/* eslint-disable @next/next/no-img-element */
import React from "react";
import EBHealth from "../EBContainer/EBHealth";

const FooterComponent = () => {
  return (
    <div className=" bg-black flex flex-wrap justify-center">
      <div className="flex">
          <a href="https://github.com/LeoJrTheTanooki" target="_blank">
            <EBHealth className="text-4xl hover:border-t-0 hover:cursor-pointer">
              <p className=" bg-[#7038d0] flex justify-between">
                GitHub
                <img
                  src="/GithubLogo.png"
                  title="LinkedIn"
                  alt="LinkedIn"
                  className=" h-[32px] w-[32px] max-h-[32px] justify-self-end"
                  style={{ imageRendering: "pixelated" }}
                />
              </p>
              <p>HP 200</p>
              <p>PP 200</p>
            </EBHealth>
          </a>
          <a href="/Resume.pdf" target="_blank">
            <EBHealth className="text-4xl hover:border-t-0 hover:cursor-pointer">
              <p className=" bg-[#7038d0] flex justify-between">
                Resume
                <img
                  src="/ResumeIcon.png"
                  title="LinkedIn"
                  alt="LinkedIn"
                  className=" h-[32px] w-[32px] max-h-[32px] justify-self-end"
                  style={{ imageRendering: "pixelated" }}
                />
              </p>
              <p>HP 200</p>
              <p>PP 200</p>
            </EBHealth>
          </a>
      </div>
      <div className="flex">
          <a
            href="https://www.linkedin.com/in/leonardo-garcia-92ab062bb/"
            target="_blank"
          >
            <EBHealth className="text-4xl hover:border-t-0">
              <p className=" bg-[#7038d0] flex justify-between">
                LinkedIn
                <img
                  src="/LinkedInLogo.png"
                  title="LinkedIn"
                  alt="LinkedIn"
                  className=" h-[32px] w-[32px] max-h-[32px] justify-self-end"
                  style={{ imageRendering: "pixelated" }}
                />
              </p>
              <p>HP 200</p>
              <p>PP 200</p>
            </EBHealth>
          </a>
          <a href="mailto:pixelbyte@workmail.com">
            <EBHealth className="text-4xl hover:border-t-0 hover:cursor-pointer">
              <p className=" bg-[#7038d0] flex justify-between">
                Email
                <img
                  src="/EmailIcon.png"
                  title="LinkedIn"
                  alt="LinkedIn"
                  className=" h-[32px] w-[32px] max-h-[32px]"
                  style={{ imageRendering: "pixelated" }}
                />
              </p>
              <p>HP 200</p>
              <p>PP 200</p>
            </EBHealth>
          </a>
      </div>
    </div>
  );
};

export default FooterComponent;
