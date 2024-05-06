import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";

const ProjectsPage = () => {
  return (
    <div className=" bg-pink-300 flex justify-center min-h-[80vh]">
      <div className="grid grid-cols-2 m-4 gap-4">
        <div className=" col-span-2">
          <EBContainer flavor="strawberry" className="text-3xl">
            &#8226;Projects
          </EBContainer>
        </div>
        <div>
          <EBContainer className="text-3xl">
            <a
              href="https://tbweather.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:text-yellow-300 visited:text-pink-400 content-center"
            >
              &#8226;TBWeather
            </a>
          <img src="/tbweather.png" alt="" />
          </EBContainer>
        </div>
        <div>
          <EBContainer className="text-3xl">
            <a
              href="https://all-for-one-six.vercel.app/index.html"
              target="_blank"
              className="text-blue-400 hover:text-yellow-300 visited:text-pink-400 content-center"
            >
              &#8226;All-For-One
            </a>
          <img src="/all-for-one.png" alt="" />
          </EBContainer>
        </div>
        <div>
          <EBContainer className="text-3xl">
            <a
              href="https://rpsclsp-psi.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:text-yellow-300 visited:text-pink-400 content-center"
            >
              &#8226;Rock Paper Scissors Lizard Spock
            </a>
          <img src="/rpsclsp.png" alt="" />
          </EBContainer>
        </div>
        <div>
          <EBContainer className="text-3xl">
            <a
              href="https://capsulepedia.vercel.app/"
              target="_blank"
              className="text-blue-400 hover:text-yellow-300 visited:text-pink-400 content-center"
            >
              &#8226;Capsulepedia
            </a>
          <img src="/capsulepedia.png" alt="" />
          </EBContainer>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
