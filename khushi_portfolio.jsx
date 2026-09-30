import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Grid */}
      <div className="grid-bg absolute inset-0 -z-20 opacity-60" />

      {/* Left Background Glow */}
      <motion.div
        className="absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Background Glow */}
      <motion.div
        className="absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">

        {/* ================= LEFT CONTENT ================= */}

        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2"
          >
            <Sparkles
              size={15}
              className="text-violet-300"
            />

            <span className="text-xs font-semibold tracking-wide text-violet-200">
              AI • MACHINE LEARNING • FULL STACK
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">
              {portfolio.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-6 max-w-3xl text-2xl font-bold leading-tight text-slate-200 sm:text-3xl lg:text-4xl"
          >
            AI/ML Engineer
            <span className="mx-2 text-violet-400">
              &
            </span>
            Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            Building intelligent, explainable and
            user-focused applications using AI,
            machine learning and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >

            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
            >
              View Projects

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Download Resume */}
            <a
              href="/resume/Khushi_Parmar_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-400/10"
            >
              <Download
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Download Resume
            </a>

          </motion.div>

          {/* ================= SOCIAL LINKS ================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-9 flex items-center gap-3"
          >

            {/* GitHub */}
            <a
              href="https://github.com/KhushiParmar-30"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Github size={19} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/khushi-parmar30/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={19} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${portfolio.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Mail size={19} />
            </a>

            {/* Divider */}
            <div className="ml-2 h-6 w-px bg-white/10" />

            {/* Location */}
            <span className="text-xs text-slate-500">
              {portfolio.location}
            </span>

          </motion.div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="relative hidden lg:block"
        >

          {/* Main Card */}
          <div className="glass relative mx-auto aspect-square max-w-[390px] overflow-hidden rounded-[2rem] p-5">

            {/* Inner Grid */}
            <div className="absolute inset-0 grid-bg opacity-40" />

            {/* Center */}
            <div className="relative flex h-full items-center justify-center">

              {/* Outer Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border border-violet-400/20"
              />

              {/* Inner Dashed Circle */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-48 w-48 rounded-full border border-blue-400/20 border-dashed"
              />

              {/* Center Core */}
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10 shadow-[0_0_80px_rgba(139,92,246,0.2)] backdrop-blur-xl">

                <div className="text-center">

                  <p className="text-3xl font-black text-white">
                    KP
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-violet-300">
                    AI / ML
                  </p>

                </div>

              </div>


              {/* Python */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-3 top-20 rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md"
              >
                <p className="text-[10px] font-bold text-slate-300">
                  Python
                </p>
              </motion.div>


              {/* React */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-3 top-12 rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md"
              >
                <p className="text-[10px] font-bold text-slate-300">
                  React.js
                </p>
              </motion.div>


              {/* FastAPI */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-2 rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md"
              >
                <p className="text-[10px] font-bold text-slate-300">
                  FastAPI
                </p>
              </motion.div>


              {/* AI/ML */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-3 rounded-xl border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md"
              >
                <p className="text-[10px] font-bold text-slate-300">
                  AI / ML
                </p>
              </motion.div>

            </div>


            {/* Bottom Status */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[10px] font-semibold text-slate-400">
                  Building intelligent systems
                </span>

              </div>

              <span className="text-[10px] text-slate-600">
                01
              </span>

            </div>

          </div>

        </motion.div>

      </div>


      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-slate-300"
      >

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>

      </motion.a>

    </section>
  );
}