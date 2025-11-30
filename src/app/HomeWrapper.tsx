// src/components/HomeWrapper.tsx

"use client";

import { useTheme } from "@/context/ThemeContext";
import { Download } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Experience from "@/components/Experience";
import Skils from "@/components/Skils";
import MyStory from "@/components/MyStory";
import AnimatedSection from "@/components/AnimatedSection";
import TransitionWrapper from "@/components/TransitionWrapper";
import Magnetic from "@/components/Magnetic";

interface HomeWrapperProps {
  profileImg: StaticImageData | string;
}

const HomeWrapper = ({ profileImg }: HomeWrapperProps) => {
  const { darkMode } = useTheme();

  return (
    <TransitionWrapper>
      <main
        className={`flex-none h-auto px-4 md:px-8 lg:px-28 relative w-full m-auto ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <AnimatedSection>
          <section className="py-28">
            {/* Reverse order on mobile so image shows first */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2">
                <p
                  className={`text-2xl mb-2 ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Hey, {"I'm"} Rishabh <span className="inline-block">👋🏻</span>
                </p>
                <h1
                  className={`text-4xl lg:text-8xl md:text-6xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span className="text-purple-600">Full Stack</span> <br />
                  Developer
                </h1>
                <p
                  className={`mt-6 text-xl lg:text-2xl px-2 ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  I&apos;m a results-oriented Full Stack Developer based in India, specializing in the MERN stack and Next.js (TypeScript). I am passionate about building powerful, scalable web applications that deliver exceptional user experiences.
                </p>

                {/* Button Section - Centered on Small/Mid Screens */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
                  >
                    Get In Touch
                  </Link>
                  <Magnetic>
                    <a
                      href="/Rishabh-Malviya-Resume.pdf" 
                      download="Rishabh-Malviya-Resume.pdf"
                      className="px-6 py-2 bg-transparent border rounded-lg flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:scale-105"
                    >
                      <Download className="text-purple-500" />
                      <span className="text-center">Download CV</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
              
              {/* Image Section (First on Mobile) */}
              <div
                className={`relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 overflow-hidden ${
                  darkMode ? "border-purple-400" : "border-purple-300"
                }`}
              >
                {/* FIX: Added 'fill' prop so string path works correctly */}
                <Image
                  src={profileImg}
                  alt="Profile Image"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <Skils />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <MyStory />
        </AnimatedSection>
      </main>
    </TransitionWrapper>
  );
};

export default HomeWrapper;