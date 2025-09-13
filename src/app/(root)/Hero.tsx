import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* hero section layout and dotted background */}
      <div className="w-screen flex flex-col justify-center items-center bg-[#030712] bg-[radial-gradient(circle,#1d202a_1px,transparent_0)] bg-size-[10px_10px] bg-fixed">
        {/* hero content width restricter */}
        <div className="w-[90vw] flex flex-col justify-center items-center">
          {/* hero section */}
          <div className="h-screen flex flex-col justify-between items-center">
            {/* top spacer */}
            <div className="h-[15vh]" />
            {/* main hero content */}
            <div className="flex-1 flex flex-col justify-between items-center">
              {/* welcome */}
              <h1 className="text-center font-vt323 text-5xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)]">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)]">
                  Hi there! I'm Tausif Samad :)
                </span>
              </h1>
              {/* profile picture div border */}
              <div className="grow aspect-square m-8 rounded-[50%] flex justify-center items-center bg-[conic-gradient(from_44deg_at_50%_50%,#D93B8A_0%,#F70000_50%,#D93B8A_100%)]">
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
              {/* text width restricter */}
              <div className=" max-w-[1024px]">
                {/* brief about me */}
                <h2 className="font-vt323 text-[#E81E45] text-2xl sm:text-3xl 2xl:text-4xl leading-none text-center">
                  a Computing student at Imperial College London. Feel free to
                  have a look at what I've been getting up to:
                </h2>
              </div>
            </div>
            {/* bottom spacer*/}
            <div className="h-[15vh] flex justify-center">
              {/* arrow */}
              <p className="text-6xl pt-[5vh] text-[#E81E45]">▼</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
