/* eslint-disable @next/next/no-img-element */
import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";
import Image from "next/image";
import EBHealth from "../components/EBContainer/EBHealth";

const SkillsPage = () => {
  return (
    <div className=" bg-yellow-200 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="grid m-4 gap-4">
          <div className="justify-self-center">
            <EBContainer flavor="banana" className=" text-3xl">
              <p>&#8226;Skills</p>
            </EBContainer>
          </div>
          <div className="justify-self-center">
            <div className=" flex flex-wrap ">
              <div className="flex">
                <EBContainer className=" text-3xl">
                  <p>Languages</p>
                  <ul>
                    <li className="flex">
                      <img
                        src="/SkillsIcon1.png"
                        title="Javascript"
                        alt="Javascript"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
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
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
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
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
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
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
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
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />{" "}
                      C#
                    </li>
                  </ul>
                </EBContainer>
              </div>
              <div className="flex">
                <EBContainer className=" text-3xl">
                  <p>Frameworks</p>
                  <ul>
                    <li className="flex">
                      <img
                        src="/SkillsIcon6.png"
                        title="Next.js"
                        alt="Next.js"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Next.js
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon9.png"
                        title="React"
                        alt="React"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      React
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon14.png"
                        title="Bootstrap"
                        alt="Bootstrap"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Bootstrap
                    </li>
                  </ul>
                </EBContainer>
              </div>
              <div className="flex">
                <EBContainer className=" text-3xl">
                  <p>Tools</p>
                  <ul>
                    <li className="flex">
                      <img
                        src="/SkillsIcon7.png"
                        title="Figma"
                        alt="Figma"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Figma
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon11.png"
                        title="Postman"
                        alt="Postman"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Postman
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon15.png"
                        title="Aseprite"
                        alt="Aseprite"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Aseprite
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon16.png"
                        title="Photoshop"
                        alt="Photoshop"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Photoshop
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon17.png"
                        title="Inkscape"
                        alt="Inkscape"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Inkscape
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon19.png"
                        title="Node.js"
                        alt="Node.js"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Node.js
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon18.png"
                        title="Visual Studio Code"
                        alt="Visual Studio Code"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      VS Code
                    </li>
                  </ul>
                </EBContainer>
              </div>
              <div className="flex">
                <EBContainer className=" text-3xl">
                  <p>Services</p>
                  <ul>
                    <li className="flex">
                      <img
                        src="/SkillsIcon8.png"
                        title="Slack"
                        alt="Slack"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Slack
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon10.png"
                        title="Vercel"
                        alt="Vercel"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Vercel
                    </li>
                    <li className="flex">
                      <img
                        src="/GithubLogo.png"
                        title="GitHub"
                        alt="GitHub"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GitHub
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon13.png"
                        title="Microsoft Azure"
                        alt="Microsoft Azure"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Azure
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon21.png"
                        title="Jira"
                        alt="Jira"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Jira
                    </li>
                  </ul>
                </EBContainer>
              </div>
              <div className="flex">
                <EBContainer className=" text-3xl">
                  <p>Engines</p>
                  <ul>
                    <li className="flex">
                      <img
                        src="/SkillsIcon20.png"
                        title="Unity"
                        alt="Unity"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      Unity
                    </li>
                    <li className="flex">
                      <img
                        src="/SkillsIcon22.png"
                        title="GB Studio"
                        alt="GB Studio"
                        className=" h-[32px] w-[32px] max-h-[32px] mr-2"
                        style={{ imageRendering: "pixelated" }}
                      />
                      GB Studio
                    </li>
                  </ul>
                </EBContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
