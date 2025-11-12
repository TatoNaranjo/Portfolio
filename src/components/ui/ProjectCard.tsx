import { useState } from "react";

interface Props {
  projectTitle: string;
  projectDescription: string;
  projectYear: string;
  projectLinks: {
    code: string;
    demo?: string;
    design?: string;
  };
  techStack: string[];
}

export default function ProjectModal({
  projectTitle,
  projectDescription,
  projectYear,
  projectLinks,
  techStack,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const index = projectDescription.indexOf(".");
  const shortDescription = (index!=-1?projectDescription.substring(0,index+1):projectDescription);

  return (
    <>
      {}
      <button
        onClick={openModal}
        className="border-4 flex flex-col cursor-pointer md:flex-row md:justify-between justify-center items-center p-6 w-full h-full hover:bg-gray-100 transition-discrete duration-500 ease-in-out gap-8"
      >
        <div className="flex md:justify-start flex-col md:text-start justify-center items-start gap-2">
          <h2 className="md:text-[32px] w-full md:w-auto text-center">{projectTitle}</h2>
          <span className="text-xs md:text-[16px]">{shortDescription}</span>
        </div>
        <div>
          <h4>{projectYear}</h4>
        </div>
      </button>

      
        <div
          className={`fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out ${isOpen?"opacity-100 visible":"opacity-0 invisible"}`}
          onClick={closeModal}
        >
          <div
            className={`bg-white max-w-lg md:max-w-[50%] w-full border-4 text-black transition-all duration-300 ease-in-out ${isOpen?"opacity-100 scale-100":"opacity-0 scale-95"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-black flex justify-between items-center px-9 py-6 ">
              <div className="">
                <h1 className="text-[16px] md:text-5xl text-white">
                  {projectTitle}
                </h1>
              </div>

              <button
                onClick={closeModal}
                className="float-right font-bold text-xl text-white leading-none md:text-xl cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="px-6 py-7 flex flex-col items-center hover:border-black h-full  max-h-[70vh] md:max-h-auto overflow-scroll md:overflow-auto">
              <div className="pb-3">
                <h2 className="border-b-4 text-[20px] md:text-[48px] md:w-fit md:mb-4 ">Description</h2>
                <span className="text-[12px] md:text-[20px]">{projectDescription}</span>
              </div>

              <div className="my-4 flex gap-3 flex-wrap justify-start">
                {techStack.map((tech) => (
                  <button
                    key={tech}
                    className="px-3 py-2 border-4 hover:shadow-[4px_4px_0_0_#000]"
                  >
                    {tech}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap mt-4 border-t-4 py-3 justify-center text-xm md:text-[32px] w-full">
                <a
                  href={projectLinks.code}
                  className="flex items-center gap-2 justify-center p-2 cursor-pointer transition-all duration-300 ease-in-out uppercase font-bebas text-[16px bg-black text-white border-4 border-black hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0_0_#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:text-black w-6 h-6 md:w-8 md:h-8"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6 md:w-8 md:h-8"
                    >
                      <path d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3" />
                      <path d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31" />
                    </g>
                  </svg>
                  Code
                </a>
                <a
                  href={projectLinks.demo}
                  className="flex items-center gap-2 justify-center p-2 cursor-pointer transition-all duration-300 ease-in-out uppercase font-bebas text-[16px bg-black text-white border-4 border-black hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0_0_#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 md:w-8 md:h-8"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z"
                    />
                  </svg>
                  Demo
                </a>
                <a
                  href={projectLinks.design}
                  className="flex items-center gap-2 justify-center p-2 cursor-pointer transition-all duration-300 ease-in-out uppercase font-bebas text-[16px bg-black text-white border-4 border-black hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0_0_#000]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 md:w-8 md:h-8"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Design
                </a>
              </div>
            </div>
          </div>
        </div>
    
    
    </>
  );
}
