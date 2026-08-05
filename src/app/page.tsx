// 'use client';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UBC Pilates Club',
  description: 'We offer POP pilates as an affordable, accessible and fun method to get active for students.',
  alternates: {
    canonical: 'https://ubcpilatesclub.vercel.app/',
  },
};

export default function Home() {
  return <Hero />;
}

// import Hero from '@/components/Hero';

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//     </main>
//   );
// }