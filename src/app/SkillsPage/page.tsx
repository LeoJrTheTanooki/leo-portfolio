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
  const [certificatesActive, setCertificatesActive] = useState<boolean>(false);

  const handleActive = (activatedSubject: any) => {
    setLanguageActive(false);
    setFrameworksActive(false);
    setToolsActive(false);
    setServicesActive(false);
    setEnginesActive(false);
    setCertificatesActive(false);
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
                  <li
                    className=" link-class"
                    onClick={() => {
                      handleActive(setCertificatesActive);
                    }}
                  >
                    Certificates
                  </li>
                </ul>
              </EBContainer>
              <EBContainer className=" text-[32px]">
                <div className="w-80">
                  {languageActive ||
                  frameworksActive ||
                  toolsActive ||
                  servicesActive ||
                  enginesActive ||
                  certificatesActive ? (
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
                        src="/skill-icons/JavaScriptIcon.png"
                        title="JavaScript"
                        alt="JavaScript"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      JavaScript
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/skill-icons/TypescriptIcon.png"
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
                        src="/skill-icons/HTML5Icon.png"
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
                        src="/skill-icons/CSSIcon.png"
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
                        src="/skill-icons/CSharpIcon.png"
                        title="C#"
                        alt="C#"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      C#
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/skill-icons/CPlusPlusIcon.png"
                        title="C++"
                        alt="C++"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      C++
                    </li>
                    <li className="flex">
                      {" "}
                      <img
                        src="/skill-icons/GDScriptIcon.png"
                        title="GDScript"
                        alt="GDScript"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      GDScript
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      frameworksActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/skill-icons/NextjsIcon.png"
                        title="Next.js"
                        alt="Next.js"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Next.js
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/ReactIcon.png"
                        title="React"
                        alt="React"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      React
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/TailwindIcon.png"
                        title="Tailwind"
                        alt="Tailwind"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Tailwind
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/BootstrapIcon.png"
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
                        src="/skill-icons/FigmaIcon.png"
                        title="Figma"
                        alt="Figma"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Figma
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/PostmanIcon.png"
                        title="Postman"
                        alt="Postman"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Postman
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/AsepriteIcon.png"
                        title="Aseprite"
                        alt="Aseprite"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Aseprite
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/PhotoshopIcon.png"
                        title="Photoshop"
                        alt="Photoshop"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Photoshop
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/InkscapeIcon.png"
                        title="Inkscape"
                        alt="Inkscape"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Inkscape
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/NodejsIcon.png"
                        title="Node.js"
                        alt="Node.js"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Node.js
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/VSCodeIcon.png"
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
                        src="/skill-icons/SlackIcon.png"
                        title="Slack"
                        alt="Slack"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Slack
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/VercelIcon.png"
                        title="Vercel"
                        alt="Vercel"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Vercel
                    </li>
                    <li className="flex">
                      <img
                        src="/GitHubLogo.png"
                        title="GitHub"
                        alt="GitHub"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GitHub
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/AzureIcon.png"
                        title="Microsoft Azure"
                        alt="Microsoft Azure"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Azure
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/JiraIcon.png"
                        title="Jira"
                        alt="Jira"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Jira
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/DevOpsIcon.png"
                        title="Azure DevOps"
                        alt="Azure DevOps"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      DevOps
                    </li>
                  </ul>
                  <ul
                    className={`grid grid-cols-2 ${
                      enginesActive ? "" : "hidden"
                    }`}
                  >
                    <li className="flex">
                      <img
                        src="/skill-icons/GodotIcon.png"
                        title="Godot"
                        alt="Godot"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Godot
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/UnityIcon.png"
                        title="Unity"
                        alt="Unity"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Unity
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/UnrealIcon.png"
                        title="Unreal Engine"
                        alt="Unreal Engine"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Unreal
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/HammerIcon.png"
                        title="Valve Hammer Editor"
                        alt="Valve Hammer Editor"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Hammer
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/Cube2Icon.png"
                        title="Cube 2: Sauerbraten"
                        alt="Cube 2: Sauerbraten"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Cube 2
                    </li>
                    <li className="flex">
                      <img
                        src="/skill-icons/GBStudioIcon.png"
                        title="GB Studio"
                        alt="GB Studio"
                        className="h-[32px] w-[32px] max-h-[32px] mr-1"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GB Studio
                    </li>
                  </ul>
                  <ul className={` ${certificatesActive ? "" : "hidden"}`}>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/65f0ff88f4fc58e0536b3b51648dff24"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/CSharpIcon.png"
                          title="C#"
                          alt="C#"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn C#
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/b74a2390dfc4127fa5d43fe147425ad0"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/CPlusPlusIcon.png"
                          title="C++"
                          alt="C++"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn C++
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/1bf3e70ae92b43c2a3add66cbfaec661"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/ReactIcon.png"
                          title="React"
                          alt="React"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn React: Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/JavaScriptIcon.png"
                          title="JavaScript"
                          alt="JavaScript"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/512386fdc7f6c934f98b01e6afa8285a"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/JavaScriptIcon.png"
                          title="JavaScript"
                          alt="JavaScript"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn Intermediate JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/9da84567e8ff414b91f0b23d917fb42f"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/CSSIcon.png"
                          title="CSS"
                          alt="CSS"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn CSS: Introduction
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.codecademy.com/profiles/LeoJrTheTanooki/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7"
                        target="blank"
                        className="link-class flex"
                      >
                        <img
                          src="/skill-icons/HTML5Icon.png"
                          title="HTML5"
                          alt="HTML5"
                          className="h-[32px] w-[32px] max-h-[32px] mr-1"
                          style={{ imageRendering: "pixelated" }}
                        />
                        Learn HTML
                      </a>
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
