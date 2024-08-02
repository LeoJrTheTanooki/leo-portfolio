/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);
  const currentMonth =  new Date().getMonth();
  console.log(currentMonth)

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
              backgroundImage: currentMonth == 9 ? "url(/GiygasByArtisticMan99.gif)" : "url(/TrippyBg.gif)",
              imageRendering: "pixelated",
              backgroundPosition: "center",
            }}
          >
            <div className="p-2 pb-4 bg-black flex justify-center w-full">
              <EBContainer className="text-[32px] md:w-4/5 min-w-min">
                <p>
                  &#8226;My name is Leo Garcia, I&rsquo;ve studied and learned a
                  lot about web development for ten months. Currently
                  I&rsquo;m attending an internship for CodeStack as a junior
                  web developer.
                </p>
                <p>
                  &#8226;In my free time I like to code and make pixel art, for
                  example the icons used here were mosty made by me. The
                  containers here were also created using CSS and made into
                  React components.
                </p>
              </EBContainer>
            </div>
            <div className="flex justify-center py-10">
              <img
                src={currentMonth == 9 ? "/LeoRage.png" : "/LeoBattle.png"}
                alt="Sprite of Leo Garcia based on EarthBound's battle sprites"
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
