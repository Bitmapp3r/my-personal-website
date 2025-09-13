import { useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectPopUpBox from "../../../components/ProjectPopUpBox";

export default function ProjectSection() {
  // State for tracking whether the pop-up boxes for certain projects are open
  // or not
  const [isPintOSBoxOpen, setIsPintOSBoxOpen] = useState(false);
  const [isWACCBoxOpen, setIsWACCBoxOpen] = useState(false);
  const [isCProjBoxOpen, setIsCProjBoxOpen] = useState(false);

  return (
    <>
      {/* project section layout and background */}
      <div className="w-screen flex flex-col justify-center items-center bg-[#0a0b18] pb-10">
        {/* project content width restricter */}
        <div className="w-[90vw] flex flex-col justify-center items-center">
          {/* scroll-mt controls the extra top margin adjustment when using scroll snapping. This should later be calculated using variables like the size of the navbar */}
          <h1
            id="projects"
            className="font-workbench pt-14 pb-5 2xl:pb-10 text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)] scroll-mt-[calc(10vh+8px)]"
          >
            Projects
          </h1>
          {/* Project cards */}
          {/* I think multi-column layout isn't like grid and doesn't have rows and so gap-y can't be used? */}
          <div className="columns-1 sm:columns-2 lg:columns-3 w-full gap-x-4">
            <a
              href="https://gitlab.com/Bitmapp3r/reading-web-app"
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
            >
              <ProjectCard
                image="/images/readventure-logo.png"
                alt="Readventure Logo"
                title="Readventure"
                description="A reading app for distracted children. Stories have multiple choices throughout them in which kids can finish with unique endings."
              />
            </a>
            <ProjectCard
              image="/images/ram.png"
              alt="RAM"
              title="PintOS"
              description="Developed and extended key components of the base PintOS operating system, including multithreading, system calls, and virtual memory management."
              onClickStateChangeFunction={() => setIsPintOSBoxOpen(true)}
            />

            <ProjectCard
              image="/images/wacc-tifax-logo.png"
              alt="WACC"
              title="WACC Compiler"
              description="Implemented a compiler for the WACC programming language which involved lexical, syntactic, and semantic analysis, along with code generation."
              onClickStateChangeFunction={() => setIsWACCBoxOpen(true)}
            />

            <ProjectCard
              image="/images/rpi-logo.png"
              alt="Raspberry Pi"
              title="Aarch64 Mode ARMv8 Emulator, Assembler and Wireless Morse Code Device"
              description="Developed an emulator and assembler for the Aarch64 mode of the ARMv8 ISA. This was used to create an assembly program to flash an LED connected to the Raspberry Pi's GPIO pins and these pins were also used to create a wireless Morse code device."
              onClickStateChangeFunction={() => setIsCProjBoxOpen(true)}
            />

            <a
              href="https://github.com/Bitmapp3r/LoL-Team-Damage-Win-Predicter"
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
            >
              <ProjectCard
                image="/images/LoL-logo.png"
                alt="League of Legends"
                title="League of Legends AI Damage-Based Win Predictor"
                description="Created a 'support-vector-machine-based' machine learning model to predict the outcome of a game of League of Legends based on total damage dealt by both teams."
              />
            </a>
          </div>
        </div>
      </div>
      {/* Modals for certain projects that don't/can't have links */}
      {/* Dark screen box filter */}
      {/* note that fixed elements are initially positioned where they would 
          normally be and so this would be below the viewport due to the above 
          section taking up the entire viewport. That's why the top position is 
          needed to re-adjust it. */}
      <ProjectPopUpBox
        isOpen={isPintOSBoxOpen}
        onClickStateChangeFunction={() => setIsPintOSBoxOpen(false)}
      >
        <p>
          The &apos;PintOS&apos; project was part of the Imperial College London second
          year Computing curriculum. To avoid plagiarism, please contact me
          directly to view the project repository.
        </p>
      </ProjectPopUpBox>

      <ProjectPopUpBox
        isOpen={isWACCBoxOpen}
        onClickStateChangeFunction={() => setIsWACCBoxOpen(false)}
      >
        <p>
          The &apos;WACC Compiler&apos; project was part of the Imperial College London
          second year Computing curriculum. To avoid plagiarism, please contact
          me directly to view the project repository.
        </p>
      </ProjectPopUpBox>

      <ProjectPopUpBox
        isOpen={isCProjBoxOpen}
        onClickStateChangeFunction={() => setIsCProjBoxOpen(false)}
      >
        <p>
          The &apos;Aarch64 Mode ARMv8 Emulator, Assembler and Wireless Morse Code
          Device&apos; project was part of the Imperial College London first year
          Computing curriculum. To avoid plagiarism, please contact me directly
          to view the project repository.
        </p>
      </ProjectPopUpBox>
    </>
  );
}
