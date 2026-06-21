import { useState, useEffect } from "react";

interface Props {
  lang: 'en' | 'es';
  projectTitle: string;
  projectDescription: string;
  projectYear: string;
  imgSrc?: string;
  projectLinks: {
    code: string;
    demo?: string;
    design?: string;
  };
  techStack: string[];
}

export default function ProjectModal({
  lang,
  projectTitle,
  projectDescription,
  projectYear,
  imgSrc,
  projectLinks,
  techStack,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const index = projectDescription.indexOf(".");
  const shortDescription = (index!=-1?projectDescription.substring(0,index+1):projectDescription);
  

  return (
    <>
      {}
      <button
        onClick={openModal}
        className="group relative border-4 border-black flex flex-col cursor-pointer w-full h-full bg-white overflow-hidden text-left hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300"
      >
        <div className="w-full h-2/3 border-b-4 border-black overflow-hidden bg-gray-200">
          {imgSrc && <img src={imgSrc} alt={projectTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
        </div>
        <div className="flex flex-col justify-between p-4 h-1/3 bg-white group-hover:bg-[var(--accent)] transition-colors duration-0">
            <div className="flex justify-between items-start gap-2">
                <h2 className="text-2xl md:text-3xl uppercase leading-none line-clamp-2 group-hover:text-white transition-colors duration-0">{projectTitle}</h2>
                <span className="font-mono font-bold text-sm border-2 border-black px-2 py-0.5 bg-white text-black">{projectYear}</span>
            </div>
            <div className="flex gap-2 flex-wrap mt-2 overflow-hidden max-h-[30px]">
                {techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="font-mono text-xs border-2 border-black px-1.5 py-0.5 bg-white text-black whitespace-nowrap">
                        {tech}
                    </span>
                ))}
                {techStack.length > 3 && <span className="font-mono font-bold text-xs border-2 border-black px-1.5 py-0.5 bg-black text-white">+{techStack.length - 3}</span>}
            </div>
        </div>
      </button>

      
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-200 ${isOpen?"opacity-100 visible":"opacity-0 invisible"}`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`bg-white max-w-3xl w-11/12 border-8 border-black text-black shadow-[16px_16px_0_0_#000] md:shadow-[24px_24px_0_0_var(--accent)] transition-transform duration-200 ${isOpen?"scale-100 translate-y-0":"scale-95 translate-y-8"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[var(--accent)] border-b-8 border-black flex justify-between items-start md:items-center px-6 py-4 md:px-9 md:py-6 gap-4">
              <div className="grow">
                <h1 id="modal-title" className="text-3xl md:text-5xl lg:text-6xl uppercase leading-none text-white break-words">
                  {projectTitle || "Proyecto sin título"}
                </h1>
              </div>

              <button
                onClick={closeModal}
                className="shrink-0 bg-white text-black border-4 border-black font-bold text-2xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-black hover:text-white hover:shadow-[4px_4px_0_0_#000] transition-all cursor-pointer"
                aria-label={lang === "en" ? "Close project details" : "Cerrar detalles del proyecto"}
              >
                &times;
              </button>
            </div>

            <div className="px-6 py-7 md:p-9 flex flex-col h-full max-h-[65vh] overflow-y-auto">
              <div className="pb-6">
                <h2 className="text-xl md:text-3xl uppercase mb-4 inline-block border-b-4 border-black pb-1">{lang === "en" ? "Description" : "Descripción"}</h2>
                <p className="font-mono text-base md:text-lg leading-relaxed">{projectDescription}</p>
              </div>

              <div className="my-6 flex gap-3 flex-wrap">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono font-bold text-sm md:text-base px-3 py-1.5 border-4 border-black bg-white shadow-[4px_4px_0_0_#000]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-6 border-t-8 border-black py-6 justify-center md:justify-start text-sm md:text-xl w-full">
                {projectLinks.code && (
                  <a
                    href={projectLinks.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center px-6 py-3 cursor-pointer uppercase font-bebas text-xl bg-black text-white border-4 border-black hover:bg-[var(--accent)] hover:text-white shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-8 md:h-8"
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
                    {lang === "en" ? "Code" : "Código"}
                  </a>
                )}
                {projectLinks.demo && (
                  <a
                    href={projectLinks.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center px-6 py-3 cursor-pointer uppercase font-bebas text-xl bg-white text-black border-4 border-black hover:bg-[var(--accent)] hover:text-white shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none transition-all"
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
                    {lang === "en" ? "Demo" : "Demostración"}
                  </a>
                )}
                {projectLinks.design && (
                  <a
                    href={projectLinks.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center px-6 py-3 cursor-pointer uppercase font-bebas text-xl bg-white text-black border-4 border-black hover:bg-[var(--accent)] hover:text-white shadow-[6px_6px_0_0_#000] active:translate-y-1 active:shadow-none transition-all"
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
                    {lang === "en" ? "Design" : "Diseño"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
    
    
    </>
  );
}
