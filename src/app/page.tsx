"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);

  return (
    <div className=" bg-teal-300 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="flex flex-wrap m-4 gap-4">
          <div className=" w-full">
            <EBContainer className=" text-3xl" flavor="mint">
              <p>•About Me</p>
            </EBContainer>
          </div>{" "}
          <div
            className="w-full bg-cover"
            style={{ backgroundImage: "url(/TrippyBg.gif)" }}
          >
            <div className=" p-1 bg-black flex justify-center">
              <EBContainer className=" text-3xl md:w-4/5 min-w-min">
                <p>
                  • My name is Leo Garcia, I&apos;ve been learning code for nine
                  months and in those nine months I&apos;ve larned a variety of
                  skills and frameworks from C# to Next.js.
                </p>
                <p>
                  • In my free time I like to either code or make pixel art. The
                  containers being components I made from scratch, and the icons
                  used on the site being examples of what I do.
                </p>
              </EBContainer>
            </div>
            <div className=" flex justify-center py-10">
              <img
                src="/LeoBattle.png"
                alt=""
                className=" w-[96px]"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
