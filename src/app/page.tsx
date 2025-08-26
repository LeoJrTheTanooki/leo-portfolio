/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);
  const currentMonth = new Date().getMonth();
  console.log(currentMonth);

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
              backgroundImage:
                currentMonth == 9
                  ? "url(/GiygasByArtisticMan99.gif)"
                  : "url(/TrippyBg.gif)",
              imageRendering: "pixelated",
              backgroundPosition: "center",
            }}
          >
            <div className="p-2 pb-4 bg-black flex justify-center w-full">
              <EBContainer className="text-[32px] md:w-4/5 min-w-min">
                <p>
                  &#8226;My name is Leo Garcia, I&rsquo;m someone who is
                  incredibly fascinated and passionate about technology. So much
                  so that I decided to put all my time and energy into CodeStack
                  Academy to get a deeper understanding into how everything
                  works. I was taught by the academy for nine months and was put
                  into an internship directly with them for three more months
                  before graduating fully from the academy. Now I&rsquo;m
                  currently helping to start up a new comapny called KAYGE
                  Koding, with a dream to not only make sites for clients, but
                  to also teach people young and old on how to code themselves.
                </p>
                <p>
                  &#8226;In my free time I like to code, make pixel art, and
                  learn new computer hobbies with new software from subtitling
                  to low poly modeling, to making custom scripts for niche
                  use-cases. A lot of the assets and components used here were
                  custom made by me, from the pixel art to the CSS (With help
                  from Tailwind to make my life with styling easier). Frequently
                  I can get lost in my work trying to make it the best it can
                  be, learning the ins and outs of the tools I&rsquo;m working
                  with, but I feel it&rsquo;s those traits that makes me a
                  valuable asset to any employer.
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
