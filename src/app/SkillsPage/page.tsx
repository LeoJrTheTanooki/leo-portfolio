/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import EBContainer from "../components/EBContainer/EBContainer";
import Image from "next/image";
import EBHealth from "../components/EBContainer/EBHealth";

const SkillsPage = () => {
  const [languageActive, setLanguageActive] = useState<boolean>(false);
  const [frameworksActive, setFrameworksActive] = useState<boolean>(false);
  const [toolsActive, setToolsActive] = useState<boolean>(false);
  const [servicesActive, setServicesActive] = useState<boolean>(false);
  const [enginesActive, setEnginesActive] = useState<boolean>(false);

  const handleActive = (activatedSubject: any) => {
    setLanguageActive(false);
    setFrameworksActive(false);
    setToolsActive(false);
    setServicesActive(false);
    setEnginesActive(false);
    activatedSubject(true);
  };

  return (
    <div className="bg-yellow-200 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="grid m-4 gap-4">
          <div className="justify-self-center">
            <EBContainer flavor="banana" className="text-[32px]">
              <p>&#8226;Skills</p>
            </EBContainer>
          </div>
          <div className="justify-self-center">
            <div className="flex flex-wrap ">
              <EBContainer className=" text-[32px]">
                <ul>
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setLanguageActive);
                    }}
                  >
                    Languages
                  </li>
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setFrameworksActive);
                    }}
                  >
                    Frameworks
                  </li>
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setToolsActive);
                    }}
                  >
                    Tools
                  </li>
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setServicesActive);
                    }}
                  >
                    Services
                  </li>
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setEnginesActive);
                    }}
                  >
                    Engines
                  </li>
                </ul>
              </EBContainer>
              <EBContainer className=" text-[32px]">
                <div className="w-80">
                  {languageActive ||
                  frameworksActive ||
                  toolsActive ||
                  servicesActive ||
                  enginesActive ? (
                    ""
                  ) : (
                    <>&#8226;Pick a category</>
                  )}
                  <ul
                    className={`grid grid-cols-2 ${
                      languageActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/SkillsIcon1.png"
                        title="Javascript"
                        alt="Javascript"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      Javascript
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/SkillsIcon2.png"
                        title="Typescript"
                        alt="Typescript"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      Typescript
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/SkillsIcon3.png"
                        title="HTML5"
                        alt="HTML5"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      HTML5
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/SkillsIcon4.png"
                        title="CSS"
                        alt="CSS"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      CSS
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/SkillsIcon5.png"
                        title="C#"
                        alt="C#"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      C#
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      frameworksActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/SkillsIcon6.png"
                        title="Next.js"
                        alt="Next.js"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Next.js
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon9.png"
                        title="React"
                        alt="React"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      React
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon24.png"
                        title="Tailwind"
                        alt="Tailwind"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Tailwind
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon14.png"
                        title="Bootstrap"
                        alt="Bootstrap"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Bootstrap
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      toolsActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/SkillsIcon7.png"
                        title="Figma"
                        alt="Figma"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Figma
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon11.png"
                        title="Postman"
                        alt="Postman"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Postman
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon15.png"
                        title="Aseprite"
                        alt="Aseprite"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Aseprite
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon16.png"
                        title="Photoshop"
                        alt="Photoshop"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Photoshop
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon17.png"
                        title="Inkscape"
                        alt="Inkscape"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Inkscape
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon19.png"
                        title="Node.js"
                        alt="Node.js"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Node.js
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon18.png"
                        title="Visual Studio Code"
                        alt="Visual Studio Code"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      VS Code
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      servicesActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/SkillsIcon8.png"
                        title="Slack"
                        alt="Slack"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Slack
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon10.png"
                        title="Vercel"
                        alt="Vercel"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Vercel
                    </li>
                    <li className="flex">
                      <img
                        src="/GithubLogo.png"
                        title="GitHub"
                        alt="GitHub"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GitHub
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon13.png"
                        title="Microsoft Azure"
                        alt="Microsoft Azure"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Azure
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon21.png"
                        title="Jira"
                        alt="Jira"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Jira
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      enginesActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/SkillsIcon20.png"
                        title="Unity"
                        alt="Unity"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Unity
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon23.png"
                        title="Unreal Engine"
                        alt="Unreal Engine"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Unreal
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon26.png"
                        title="Valve Hammer Editor"
                        alt="Valve Hammer Editor"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Hammer
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon25.png"
                        title="Cube 2: Sauerbraten"
                        alt="Cube 2: Sauerbraten"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Cube 2
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon22.png"
                        title="GB Studio"
                        alt="GB Studio"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GB Studio
                    </li>
                  </ul>
                </div>
              </EBContainer>
            </div>
            <div className="flex justify-center mt-4">
              <img
                src="/LeoComputer.gif"
                className=" w-[96px]"
                alt="Sprite of Leo on computer based on EarthBound overworld sprites"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
