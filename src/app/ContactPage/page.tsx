/* eslint-disable @next/next/no-img-element */
import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";
// import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-amber-400 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="grid m-4 gap-4">
          <div className="justify-self-center">
            <EBContainer className="text-[32px]" flavor="peanut">
              <p>&#8226;Contact and Links</p>
            </EBContainer>
          </div>
          <div className="justify-self-center">
            <EBContainer className="text-[32px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="flex flex-wrap items-center">
                  <img
                    src="/GithubLogo.png"
                    className="mr-3 w-[64px]"
                    alt="Github Logo"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <a
                    href="https://github.com/LeoJrTheTanooki"
                    target="_blank"
                    className="text-blue-400 hover:text-yellow-300 visited:text-pink-400"
                  >
                    &#8226;Github
                  </a>
                </div>
                <div className="flex flex-wrap items-center">
                  <div>
                    <img
                      src="/ResumeIcon.png"
                      className="mr-3 w-[64px]"
                      alt="Phone Sprite"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    className="text-blue-400 hover:text-yellow-300 visited:text-pink-400"
                  >
                    &#8226;Resume
                  </a>
                </div>
                <div className="flex flex-wrap items-center">
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
                    &#8226;Linkedin
                  </a>
                </div>
                <div className="flex flex-wrap items-center">
                  <img
                    src="/EmailIcon.png"
                    className="mr-3 w-[64px]"
                    alt="Github Logo"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <a
                    href="mailto:pixelbyte@workmail.com"
                    className="text-blue-400 hover:text-yellow-300 visited:text-pink-400"
                  >
                    &#8226;pixelbyte@workmail.com
                  </a>
                </div>
                <div className="flex flex-wrap items-center sm:col-span-2 justify-center">
                  {/* <img
                    src="/EmailIcon.png"
                    className="mr-3 w-[64px]"
                    alt="Github Logo"
                    style={{ imageRendering: "pixelated" }}
                  /> */}
                </div>
              </div>
            </EBContainer>
            {/* <ContactForm/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
