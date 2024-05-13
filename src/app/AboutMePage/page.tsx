import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";

const AboutMePage = () => {
  return (
    <div className=" bg-teal-300 flex justify-center min-h-[80vh]">
      <div className="block">
        <div className="grid grid-cols-2 m-4 gap-4">
          <EBContainer className=" col-span-2 text-3xl" flavor="mint">
            <p>•About Me</p>
          </EBContainer>
          <div>
            <img src="Headshot.jpg" alt="" />
          </div>
          <EBContainer className=" text-3xl">
            <p>•
              My name is Leo Garcia, I&apos;ve been learning code for nine months and
              in those nine months I&apos;ve larned a variety of skills and frameworks
              from C# to Next.js.
            </p>
            <p>•
              In my free time I like to either code or make pixel art. The
              containers being components I made from scratch, and the icons used
              on the site being examples of what I do.
            </p>
          </EBContainer>
        
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
