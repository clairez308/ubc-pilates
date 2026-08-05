"use client";

import { motion } from "framer-motion";
import Stack from "./Stack";
import CardSwap, { Card } from "./CardSwap";
import RollingGallery from "./RollingGallery";
import FreeClasses from "./FreeClasses";
import Button from "./ui/Button";

const retreatImages = [
  { id: 1, img: "/retreat/retreat1.jpeg" },
  { id: 2, img: "/retreat/retreat2.jpeg" },
  { id: 3, img: "/retreat/retreat3.jpeg" },
  { id: 4, img: "/retreat/retreat4.jpeg" },
  { id: 5, img: "/retreat/retreat5.jpeg" },
];

const Hero = () => {
  return (
    <div className="relative bg-cream overflow-hidden">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-20">
          <div className="text-center mb-16">
            <div className="flex justify-center items-start gap-8 mb-8 flex-wrap">
              {/* Left photo frame */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.8 }}
                className="hidden md:block"
              >
                <div className="bg-white p-3 rounded-xl border-2 border-ink shadow-[6px_6px_0_0_#004669] transform -rotate-6">
                  <div className="w-48 h-48 bg-cream rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/group/content5.jpg"
                      alt="Pilates class"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main Heading and Subheading */}
              <div className="flex-1 max-w-2xl">
                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tight">
                  <span className="text-ink">UBC</span>
                  <br />
                  <span className="text-denim">Pilates Club</span>
                </h1>
                <p className="text-xl md:text-2xl text-ink/70 max-w-2xl mx-auto mb-8">
                  POP Pilates classes made for students, by students
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <Button
                    href="/calendar"
                    variant="primary"
                    ariaLabel="View UBC Pilates class schedule"
                    className="min-w-48"
                  >
                    View Classes
                  </Button>
                  <Button
                    href="/prices"
                    variant="secondary"
                    ariaLabel="View UBC Pilates membership pricing"
                    className="min-w-48"
                  >
                    Membership Options
                  </Button>
                </motion.div>
              </div>

              {/* Right photo frame */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 8 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.8 }}
                className="hidden md:block"
              >
                <div className="bg-white p-3 rounded-xl border-2 border-ink shadow-[6px_6px_0_0_#004669] transform rotate-6">
                  <div className="w-48 h-48 bg-cream rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/group/content4.jpg"
                      alt="Pilates class"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <FreeClasses />

      {/* Features Section - Split Layout */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-skyblue border-y-2 border-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink mb-3 sm:mb-4 tracking-tight">
              Why UBC Students Love Pilates
            </h2>
            <p className="text-lg text-ink/60 max-w-2xl mx-auto">
              Discover what makes our classes special
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Retreat Photos + Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:text-left"
            >
              <div className="mb-8">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={true}
                  cardDimensions={{ width: 300, height: 300 }}
                  cardsData={retreatImages}
                />
              </div>
              <p className="text-ink/70 text-lg max-w-md leading-relaxed">
                Swipe through memories from our Exec Retreat!
              </p>
            </motion.div>

            {/* Right: CardSwap Animated Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative flex justify-center items-center">
                <CardSwap
                  width={350}
                  height={220}
                  cardDistance={50}
                  verticalDistance={60}
                  delay={2500}
                  pauseOnHover={true}
                  skewAmount={4}
                  easing="elastic"
                >
                  <Card className="bg-white border-2 border-ink shadow-[4px_4px_0_0_#004669] rounded-xl">
                    <div className="p-6 h-full flex flex-col items-center justify-center">
                      <div className="text-5xl mb-4">🧘</div>
                      <h3 className="text-xl font-bold text-center mb-3 text-ink">
                        Student-Focused Classes
                      </h3>
                      <p className="text-center text-ink/60">
                        Pilates classes designed to fit your busy student
                        schedule.
                      </p>
                    </div>
                  </Card>

                  <Card className="bg-white border-2 border-ink shadow-[4px_4px_0_0_#004669] rounded-xl">
                    <div className="p-6 h-full flex flex-col items-center justify-center">
                      <div className="text-5xl mb-4">💵</div>
                      <h3 className="text-xl font-bold text-center mb-3 text-ink">
                        Affordable Memberships
                      </h3>
                      <p className="text-center text-ink/60">
                        Stay active without breaking your student budget.
                      </p>
                    </div>
                  </Card>

                  <Card className="bg-white border-2 border-ink shadow-[4px_4px_0_0_#004669] rounded-xl">
                    <div className="p-6 h-full flex flex-col items-center justify-center">
                      <div className="text-5xl mb-4">👥</div>
                      <h3 className="text-xl font-bold text-center mb-3 text-ink">
                        Supportive Community
                      </h3>
                      <p className="text-center text-ink/60">
                        Connect, stretch, and grow with other UBC students.
                      </p>
                    </div>
                  </Card>

                  <Card className="bg-white border-2 border-ink shadow-[4px_4px_0_0_#004669] rounded-xl">
                    <div className="p-6 h-full flex flex-col items-center justify-center">
                      <div className="text-5xl mb-4">🌍</div>
                      <h3 className="text-xl font-bold text-center mb-3 text-ink">
                        Inclusive for Everyone
                      </h3>
                      <p className="text-center text-ink/60">
                        Classes accessible for all experience levels at UBC.
                      </p>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-0"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed mb-4">
              At the UBC Pilates Club, we aim to offer pilates as an{" "}
              <span className="font-bold text-denim">
                affordable, accessible, and fun
              </span>{" "}
              method to get active and let loose, all while getting in a
              killer workout.
            </p>
          </motion.div>

          {/* Video Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="w-full max-w-4xl">
              <div className="relative rounded-xl overflow-hidden border-2 border-ink shadow-[6px_6px_0_0_#004669] bg-white p-2">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/j1TsVklJMl0"
                    title="UBC Pilates Club - About Us"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-0"
          >
            <p className="text-lg md:text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed">
              Our POP Pilates classes take traditional Pilates moves and set
              them to music so that it feels less like exercise and more like
              a <span className="font-bold text-denim">dance party!</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center overflow-hidden mt-8"
          >
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-aqua border-y-2 border-ink overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-ink mb-6 tracking-tight">
            Ready to Start Your Pilates Journey?
          </h2>
          <p className="text-xl md:text-2xl text-ink/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join UBC Pilates Club for a class and experience the benefits of
            pilates with fellow students!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/prices"
              variant="accent"
              ariaLabel="Sign up for UBC Pilates Club membership"
              className="min-w-48"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
