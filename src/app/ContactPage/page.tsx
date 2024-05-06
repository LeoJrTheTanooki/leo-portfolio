import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";

const ContactPage = () => {
  return (
    <div className=" bg-amber-400 flex justify-center min-h-[80vh]">
      <div className="grid m-4 gap-4">
        <div className="justify-self-center">
          <EBContainer className=" text-3xl" flavor="peanut">
            <p>•Contact and Links</p>
          </EBContainer>
        </div>
        <div className="justify-self-center">
          <EBContainer className=" text-3xl">
            <div className=" grid grid-cols-2 gap-4 items-center">
              <div className="flex items-center">
                <div>
                  <img
                    src="/LinkedInLogo.png"
                    className="mr-3 w-[64px]"
                    alt="Leo Suit Sprite"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/leonardo-garcia-92ab062bb/"
                  target="_blank"
                  className="text-blue-400 hover:text-yellow-300 visited:text-pink-400 content-center"
                >
                  •Linkedin
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="/GithubLogo.png"
                  className="mr-3 w-[64px]"
                  alt="Github Logo"
                  style={{ imageRendering: "pixelated" }}
                />
                <a
                  href="https://github.com/LeoJrTheTanooki"
                  target="_blank"
                  className=" text-blue-400 hover:text-yellow-300 visited:text-pink-400"
                >
                  •Github
                </a>
              </div>
              <div className="flex items-center">
                <div>
                  <img
                    src="/PhoneIcon.png"
                    className="mr-3 w-[64px]"
                    alt="Phone Sprite"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <a href="tel:+12097154509" className=" text-blue-400 hover:text-yellow-300 visited:text-pink-400">
                  •1 (209) 715-4509
                </a>
              </div>
              <div className="flex items-center">
                <img
                  src="/EmailIcon.png"
                  className="mr-3 w-[64px]"
                  alt="Github Logo"
                  style={{ imageRendering: "pixelated" }}
                />
                <a
                  href="mailto:pixelbyte@workmail.com"
                  className=" text-blue-400 hover:text-yellow-300 visited:text-pink-400"
                >
                  •pixelbyte@workmail.com
                </a>
              </div>
            </div>
          </EBContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
