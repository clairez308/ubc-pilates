"use client";

import React, {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefObject,
    useEffect,
    useMemo,
    useRef
  } from 'react';
  import gsap from 'gsap';
  
  export interface CardSwapProps {
    width?: number | string;
    height?: number | string;
    cardDistance?: number;
    verticalDistance?: number;
    delay?: number;
    pauseOnHover?: boolean;
    onCardClick?: (idx: number) => void;
    skewAmount?: number;
    easing?: 'linear' | 'elastic';
    children: ReactNode;
  }
  
  export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    customClass?: string;
  }
  
  export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, children, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`
        absolute top-1/2 left-1/2 
        rounded-3xl border border-cyan-200/40 
        bg-gradient-to-br from-white/80 via-sky-50/80 to-cyan-100/70 
        backdrop-blur-xl shadow-[0_10px_25px_rgba(56,128,200,0.15)] 
        [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]
        overflow-hidden transition-all duration-500
        hover:shadow-[0_20px_40px_rgba(56,128,200,0.25)] hover:-translate-y-1 hover:scale-[1.02]
        before:absolute before:inset-0 before:bg-gradient-to-tr before:from-cyan-300/10 before:to-transparent before:opacity-80
        ${customClass ?? ''} ${rest.className ?? ''}
      `.trim()}    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(173,216,230,0.15),transparent_70%)] pointer-events-none" />
        <div className="relative z-10">{children}</div>
        </div>
      
      
  ));
  Card.displayName = 'Card';
  
  type CardRef = RefObject<HTMLDivElement | null>;
  interface Slot {
    x: number;
    y: number;
    z: number;
    zIndex: number;
  }
  
  const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i
  });
  
  const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
    gsap.set(el, {
      x: slot.x,
      y: slot.y,
      z: slot.z,
      xPercent: -50,
      yPercent: -50,
      skewY: skew,
      transformOrigin: 'center center',
      zIndex: slot.zIndex,
      force3D: true
    });
  
  const CardSwap: React.FC<CardSwapProps> = ({
    width = 500,
    height = 300,
    cardDistance = 60,
    verticalDistance = 70,
    delay = 500,
    pauseOnHover = false,
    onCardClick,
    skewAmount = 6,
    easing = 'elastic',
    children
  }) => {
    const config = {
  ease: "power1.inOut",
  durDrop: 0.5,
  durMove: 0.5,
  durReturn: 0.5,
  promoteOverlap: 0.9,
  returnDelay: 0.05,
};
  
    const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
    const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  
    const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const intervalRef = useRef<number>(0);
    const container = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));
  
      const swap = () => {
        if (order.current.length < 2) return;
  
        const [front, ...rest] = order.current;
        const elFront = refs[front].current!;
        const tl = gsap.timeline();
        tlRef.current = tl;
  
        tl.to(elFront, {
          y: '+=500',
          duration: config.durDrop,
          ease: config.ease
        });
  
        tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
        rest.forEach((idx, i) => {
          const el = refs[idx].current!;
          const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
          tl.set(el, { zIndex: slot.zIndex }, 'promote');
          tl.to(
            el,
            {
              x: slot.x,
              y: slot.y,
              z: slot.z,
              duration: config.durMove,
              ease: config.ease
            },
            `promote+=${i * 0.15}`
          );
        });
  
        const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
        tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
        tl.call(
          () => {
            gsap.set(elFront, { zIndex: backSlot.zIndex });
          },
          undefined,
          'return'
        );
        tl.to(
          elFront,
          {
            x: backSlot.x,
            y: backSlot.y,
            z: backSlot.z,
            duration: config.durReturn,
            ease: config.ease
          },
          'return'
        );
  
        tl.call(() => {
          order.current = [...rest, front];
        });
      };
  
      swap();
      intervalRef.current = window.setInterval(swap, delay);
  
      if (pauseOnHover) {
        const node = container.current!;
        const pause = () => {
          tlRef.current?.pause();
          clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener('mouseenter', pause);
        node.addEventListener('mouseleave', resume);
        return () => {
          node.removeEventListener('mouseenter', pause);
          node.removeEventListener('mouseleave', resume);
          clearInterval(intervalRef.current);
        };
      }
      return () => clearInterval(intervalRef.current);
    }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);
  
    const rendered = childArr.map((child, i) =>
      isValidElement<CardProps>(child)
        ? cloneElement(child, {
            key: i,
            ref: refs[i],
            style: { width, height, ...(child.props.style ?? {}) },
            onClick: e => {
              child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
              onCardClick?.(i);
            }
          } as CardProps & React.RefAttributes<HTMLDivElement>)
        : child
    );
  
    return (
        <div
        ref={container}
        className="
          relative
          flex justify-end items-center
          perspective-[900px]
          overflow-visible
          translate-x-[8%] translate-y-[5%]
          max-[1024px]:translate-x-[5%] max-[1024px]:translate-y-[10%]
          max-[768px]:justify-center max-[768px]:translate-x-0 max-[768px]:translate-y-[15%]
          max-[480px]:scale-[0.8]
        "
        style={{ width, height }}
      >
        {rendered}
      </div>
      
    );
  };
  
  export default CardSwap;
  