import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="bg-pink-300 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="grid md:grid-cols-2 m-4 gap-4">
          <div className="md:col-span-2">
            <EBContainer flavor="strawberry" className="text-[32px]">
              &#8226;Projects
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-[32px]" fullHeight fullWidth>
              <div className="flex gap-2">
                <a
                  href="https://tbweather.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  TBWeather
                  <Image height={220} width={350} src="/tbweather.png" alt="TBweather screencap" />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>
                      <a
                        href="https://openweathermap.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-class"
                      >
                        &#8226;OpenWeatherMap&rsquo;s API
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-class"
                      >
                        &#8226;Next.js
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kyr0.github.io/nes-ui-react/"
                        target="_blank"
                        className="link-class"
                      >
                        &#8226;nes-ui-react
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">
                Short for ThrowBack Weather. A site that utlizes a weather API and allows users to search a
                location to find the weather and forecast of said location.
              </p>
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-[32px]" fullHeight fullWidth>
              <div className="flex gap-2">
                <a
                  href="https://all-for-one-six.vercel.app/index.html"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  All-For-One
                  <Image
                    height={220}
                    width={350}
                    src="/all-for-one.png"
                    alt="All-For-One screencap"
                  />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Microsoft Azure</li>
                    <li>&#8226;C#</li>
                    <li>&#8226;.NET 7</li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">
                A site that utlizes a custom made API made using .NET and C#,
                and was deployed using Microsoft Azure
              </p>
            </EBContainer>
          </div>
          <EBContainer className="text-[32px]" fullHeight fullWidth>
            <div className="flex gap-2">
              <a
                href="https://rpsclsp-psi.vercel.app/"
                target="_blank"
                className="link-class content-center w-3/5"
              >
                Rock Paper Scissors Lizard Spock
                <Image height={220} width={350} src="/rpsclsp.png" alt="Rock Paper Scissors Lizard Spock screencap" />
              </a>
              <div>
                Utilities Leveraged
                <ul>
                  <li>&#8226;Bootstrap</li>
                  <li>
                    <a
                      href="https://nostalgic-css.github.io/NES.css/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-class"
                    >
                      &#8226;NES.css
                    </a>
                  </li>
                  <li>&#8226;Javascript</li>
                </ul>
              </div>
            </div>
            <p className=" mt-1">
              A site that uses logic comparisons and provides win and lose
              conditions.
            </p>
          </EBContainer>
          <div>
            <EBContainer className="text-[32px]" fullHeight fullWidth>
              <div className="flex gap-2">
                <a
                  href="https://capsulepedia.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  Capsulepedia
                  <Image
                    height={220}
                    width={350}
                    src="/capsulepedia.png"
                    alt="Capsulepedia screencap"
                  />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Tailwind</li>
                    <li>
                      <a
                        href="https://pokeapi.co/"
                        target="_blank"
                        className="link-class"
                      >
                        &#8226;PokeAPI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">
                A site that uses an API to allow users to either search for or
                use a random button to get any Pokemon up to Generation 5.
              </p>
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-[32px]" fullHeight fullWidth>
              <div className="flex gap-2">
                <a
                  href="https://localinezation.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  LocaLINEzation
                  <Image
                    height={220}
                    width={350}
                    src="/localinezation.png"
                    alt="LocaLINEzation screencap"
                  />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Next.js</li>
                    <li>&#8226;Azure</li>
                    <li>&#8226;Teamwork</li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">
                Full stack site designed for fans of foreign media to
                collaborate on translating their favorite media.
              </p>
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-[32px]" fullHeight fullWidth>
              <div className="flex gap-2">
                <a
                  href="https://leojrthetanooki.itch.io/neon-tank-survivor/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  Neon Tank Survivor
                  <Image
                    height={220}
                    width={350}
                    src="/neon-tank-survivor.png"
                    alt="Neon Tank Survivor screencap"
                  />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Godot</li>
                    <li>&#8226;GDScript</li>
                    <li>&#8226;Aseprite</li>
                    <li>&#8226;OpenGameArt</li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">
                A top down game where you control a tank trying to avoid bullets made using Godot based on its documentation. Works on mobile devices too thanks to Godot Multidirectional Joystick by JstnJrg.
              </p>
            </EBContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
