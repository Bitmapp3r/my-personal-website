"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [projectBtnJustClicked, setProjectBtnJustClicked] = useState(false);
  const [linksAndContactsBtnJustClicked, setLinksAndContactsBtnJustClicked] =
    useState(false);
  const [CVBtnJustClicked, setCVBtnJustClicked] = useState(false);

  // Functions to handle nav bar button click animations
  const handleProjectBtnClick = () => {
    setProjectBtnJustClicked(true);
    setTimeout(() => setProjectBtnJustClicked(false), 200);
  };

  const handleLinksAndContactsBtnClick = () => {
    setLinksAndContactsBtnJustClicked(true);
    setTimeout(() => setLinksAndContactsBtnJustClicked(false), 200);
  };

  const handleCVBtnClick = () => {
    setCVBtnJustClicked(true);
    setTimeout(() => setCVBtnJustClicked(false), 200);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[10vh] bg-[#0a0b18] z-2 border-b-8 border-[#E81E45] border-solid flex justify-center">
        {/* Nav bar items alignment and specifying the max width of the screen they will take up */}
        <div className="flex justify-between items-center max-w-[1536px] w-full">
          {/* Nav bar links alignment */}
          <div className="flex items-center">
            <Link href="/#projects" onClick={handleProjectBtnClick}>
              <h1
                className={`font-workbench ml-5 text-sm sm:text-base md:text-lg 2xl:text-2xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)] after:content-[''] after:block ${
                  projectBtnJustClicked ? "after:w-0" : "after:w-full"
                } after:h-[2] after:bg-[#E81E45] after:duration-200 after:ease-out`}
              >
                Projects
              </h1>
            </Link>
            <Link
              href="/#linksAndContacts"
              onClick={handleLinksAndContactsBtnClick}
            >
              <h1
                className={`font-workbench pl-5 text-sm sm:text-base md:text-lg 2xl:text-2xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)] after:content-[''] after:block ${
                  linksAndContactsBtnJustClicked ? "after:w-0" : "after:w-full"
                } after:h-[2] after:bg-[#E81E45] after:duration-200 after:ease-out`}
              >
                Links & Contacts
              </h1>
            </Link>
          </div>

          <Link
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCVBtnClick}
          >
            <h1
              className={`font-workbench pr-5 text-sm sm:text-base md:text-lg 2xl:text-2xl bg-clip-text text-transparent bg-[linear-gradient(0deg,#D93B8A_0%,#F70000_100%)] after:block ${
                CVBtnJustClicked ? "after:w-0" : "after:w-full"
              } after:h-[2] after:bg-[#E81E45] after:duration-200 after:ease-out`}
            >
              Download CV
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
