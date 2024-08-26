/* eslint-disable @next/next/no-img-element */
import React from "react";
import EBHealth from "../EBContainer/EBHealth";
import localFont from "next/font/local";

/* 
    Sources: 
    bitcell: https://www.dafont.com/search.php?q=bitcell
    smb3: https://www.dafont.com/search.php?q=mario+3
    battleName: https://forum.starmen.net/forum/Fan/Forum/BattleName-Font
*/

// Make it more clear that the footer links are clickable
const bitcell = localFont({ src: "./fonts/bitcell_memesbruh03.woff" });

const smb3 = localFont({ src: "./fonts/Super-Mario-Bros--3.woff" });

const battleName = localFont({ src: "./fonts/BattleName.woff" });

const FooterComponent = () => {
  return (
    <div className="bg-black flex flex-wrap justify-center">
      <div className="flex">
        <a href="https://github.com/LeoJrTheTanooki" target="_blank">
          <EBHealth className="text-[32px] hover:border-t-0 hover:cursor-pointer">
            <div
              className={`bg-purple-800 flex justify-between items-center ${battleName.className}`}
            >
              <p className="pb-2">GitHub</p>
              <img
                src="/GitHubLogo.png"
                title="GitHub"
                alt="GitHub"
                className="h-[32px] w-[32px] max-h-[32px] justify-self-end"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>HP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>5</div>
                <div className={`health-wheel ${bitcell.className}`}>6</div>
                <div className={`health-wheel ${bitcell.className}`}>3</div>
              </div>
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>PP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>2</div>
                <div className={`health-wheel ${bitcell.className}`}>6</div>
                <div className={`health-wheel ${bitcell.className}`}>4</div>
              </div>
            </div>
          </EBHealth>
        </a>
        <a href="/GarciaL_Resume.pdf" target="_blank">
          <EBHealth className="text-[32px] hover:border-t-0 hover:cursor-pointer">
            <div
              className={`bg-purple-800 flex justify-between items-center ${battleName.className}`}
            >
              <p className="pb-2">Resume</p>
              <img
                src="/ResumeIcon.png"
                title="Resume"
                alt="Resume"
                className="h-[32px] w-[32px] max-h-[32px] justify-self-end"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>HP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>1</div>
                <div className={`health-wheel ${bitcell.className}`}>8</div>
                <div className={`health-wheel ${bitcell.className}`}>4</div>
              </div>
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>PP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>1</div>
                <div className={`health-wheel ${bitcell.className}`}>6</div>
                <div className={`health-wheel ${bitcell.className}`}>3</div>
              </div>
            </div>
          </EBHealth>
        </a>
      </div>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/leonardo-garcia-92ab062bb/"
          target="_blank"
        >
          <EBHealth className="text-[32px] hover:border-t-0 hover:cursor-pointer">
            <div
              className={`bg-purple-800 flex justify-between items-center ${battleName.className}`}
            >
              <p className="pb-2">LinkedIn</p>
              <img
                src="/LinkedInLogo.png"
                title="LinkedIn"
                alt="LinkedIn"
                className="h-[32px] w-[32px] max-h-[32px] justify-self-end"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>HP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>3</div>
                <div className={`health-wheel ${bitcell.className}`}>1</div>
                <div className={`health-wheel ${bitcell.className}`}>7</div>
              </div>
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>PP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}></div>
                <div className={`health-wheel ${bitcell.className}`}></div>
                <div className={`health-wheel ${bitcell.className}`}>0</div>
              </div>
            </div>
          </EBHealth>
        </a>
        <a href="mailto:pixelbyte@workmail.com">
          <EBHealth className="text-[32px] hover:border-t-0 hover:cursor-pointer">
            <div
              className={`bg-purple-800 flex justify-between items-center ${battleName.className}`}
            >
              <p className="pb-2">Email</p>
              <img
                src="/EmailIcon.png"
                title="Email"
                alt="Email"
                className="h-[32px] w-[32px] max-h-[32px]"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>HP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>2</div>
                <div className={`health-wheel ${bitcell.className}`}>1</div>
                <div className={`health-wheel ${bitcell.className}`}>2</div>
              </div>
            </div>
            <div className="text-end flex justify-end">
              <div className={`text-[16px] ${smb3.className}`}>PP </div>
              <div className="flex text-center">
                <div className={`health-wheel ${bitcell.className}`}>1</div>
                <div className={`health-wheel ${bitcell.className}`}>3</div>
                <div className={`health-wheel ${bitcell.className}`}>7</div>
              </div>
            </div>
          </EBHealth>
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
