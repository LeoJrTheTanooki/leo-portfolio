import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";

const SkillsPage = () => {
  return (
    <div className=" bg-yellow-200 flex justify-center min-h-[80vh]">
      <div className="grid m-4 gap-4">
        <div className="justify-self-center">
          <EBContainer flavor="banana" className=" text-3xl">
            <p>&#8226;Skills</p>
          </EBContainer>
        </div>
        <div className="justify-self-center">
          <EBContainer className=" text-3xl">
            <p>&#8226;Languages: HTML, CSS, JavaScript, C#, Typescript</p>
            <p>
              &#8226;Frameworks and Libraries: Bootstrap, Tailwind, Flowbite,
              React JS
            </p>
            <p>
              &#8226;Tools: Visual Studio Code, .NET 7.0, Microsoft Azure, Git,
              Postman, Slack, Figma, Unity
            </p>
          </EBContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
