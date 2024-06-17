/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);

  return (
    <div className="bg-teal-300 flex justify-center min-h-[66vh]">
      <div className="block w-full h-full">
        <div className="flex flex-wrap m-4 mb-0 gap-4">
          <div className="w-full">
            <EBContainer className="text-[32px]" flavor="mint">
              <p>&#8226;About Me</p>
            </EBContainer>
          </div>
          {""}
          <div
            className="w-full bg-cover"
            style={{
              backgroundImage: "url(/TrippyBg.gif)",
              imageRendering: "pixelated",
              backgroundPosition: "center",
            }}
          >
            <div className="p-2 pb-4 bg-black flex justify-center w-full">
              <EBContainer className="text-[32px] md:w-4/5 min-w-min">
                <p>&#8226;My name is Leo Garcia, I&apos;ve been taught a lot about web development for nine months.</p>
                <p>
                  &#8226;In my free time I like to either code or make pixel
                  art. The containers being components I made from scratch, and
                  the icons used on the site being examples of what I do.
                </p>
              </EBContainer>
            </div>
            <div className="flex justify-center py-10">
              <img
                src="/LeoBattle.png"
                alt=""
                // Multiply original width by 3
                className="w-[192px]"
                style={{ imageRendering: "pixelated" }}
                title="Name: Leo Garcia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
