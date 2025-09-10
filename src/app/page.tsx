import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

export default function Home() {
  return (
    // hero section layout and dotted background
    <div className="w-screen flex flex-col justify-center items-center bg-[#030712] bg-[radial-gradient(circle,#1d202a_1px,transparent_0)] bg-size-[10px_10px] bg-fixed">
      {/* hero content width restricter */}
      <div className="w-[90vw] flex flex-col justify-center items-center">
        {/* hero section */}
        <div className="h-screen flex flex-col justify-between items-center">
          {/* top spacer (can be used for nav bar later) */}
          <div className="h-[15vh]" />
          {/* main hero content */}
          <div className="flex-1 flex flex-col justify-between items-center">
            {/* welcome */}
            <h1 className="text-center font-vt323 text-5xl">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)]">
                Hiya! I'm Tausif Samad{" "}
              </span>
              😊
            </h1>
            {/* profile picture div border */}
            <div className="w-70 h-70 rounded-[50%] flex justify-center items-center bg-[conic-gradient(from_44deg_at_50%_50%,#D93B8A_0%,#F70000_50%,#D93B8A_100%)]">
              {/* profile picture */}
              <div className="w-[90%] h-[90%] rounded-[50%] overflow-hidden relative">
                <Image
                  src="/images/prof-pic.jpg"
                  alt="Tausif Samad"
                  fill
                  objectFit="cover"
                  objectPosition="50% 40%"
                />
              </div>
            </div>
            {/* brief about me */}
            <h2 className="font-vt323 text-[#E81E45] text-xl leading-none text-justify">
              a Computing student at Imperial College London. Feel free to have
              a look at what I've been getting up to:
            </h2>
          </div>
          {/* bottom spacer*/}
          <div className="h-[15vh] flex justify-center">
            {/* arrow */}
            <p className="text-6xl pt-[5vh] text-[#E81E45]">▼</p>
          </div>
        </div>
      </div>
      {/* project section layout and background */}
      <div className="w-screen flex flex-col justify-center items-center bg-[#0a0b18]">
        {/* project content width restricter */}
        <div className="w-[90vw] flex flex-col justify-center items-center gap-5">
          <h1 className="font-workbench pt-14 pb-5 text-3xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)]">
            Projects
          </h1>

          <ProjectCard
            image="/images/readventure-logo.png"
            alt="Readventure Logo"
            title="Readventure"
            description="A reading app for distracted children. Stories have multiple choices throughout them in which kids can finish with unique endings."
          />

          <ProjectCard
            image="/images/ram.png"
            alt="RAM"
            title="PintOS"
            description="Developed and extended key components of the base PintOS operating system, including multithreading, system calls, and virtual memory management."
          />

          <ProjectCard
            image="/images/wacc-tifax-logo.png"
            alt="WACC"
            title="WACC Compiler"
            description="Implemented a compiler for the WACC programming language which involved lexical, syntactic, and semantic analysis, along with code generation."
          />

          <ProjectCard
            image="/images/rpi-logo.png"
            alt="Raspberry Pi"
            title="Aarch64 Mode ARMv8 Emulator, Assembler and Wireless Morse Code Device"
            description="Developed an emulator and assembler for the Aarch64 mode of the ARMv8 ISA. This was used to flash an LED connected to the Raspberry Pi's GPIO pins and these pins were also used to create a wireless Morse code device."
          />

          <ProjectCard
            image="/images/LoL-logo.png"
            alt="League of Legends"
            title="League of Legends AI Damage-Based Win Predictor"
            description="Created a 'support-vector-machine-based' machine learning model to predict the outcome of a game of League of Legends based on total damage dealt by both teams."
          />
          
        </div>
      </div>
    </div>
  );
}
