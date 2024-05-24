/* eslint-disable @next/next/no-img-element */
import React from "react";
import EBContainer from "../components/EBContainer/EBContainer";

const ProjectsPage = () => {
  return (
    <div className="bg-pink-300 flex justify-center min-h-[66vh]">
      <div className="block">
        <div className="grid md:grid-cols-2 m-4 gap-4">
          <div className="md:col-span-2">
            <EBContainer flavor="strawberry" className="text-3xl">
              &#8226;Projects
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-3xl" fullHeight>
              <div className="flex gap-2">
                <a
                  href="https://tbweather.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  TBWeather
                  <img src="/tbweather.png" alt="" />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;OpenWeatherMap&apos;s API</li>
                    <li>&#8226;Next.js</li>
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
                A site that utlizes a weather API and allows users to search a
                location to find the weather and forecast of said location.
              </p>
            </EBContainer>
          </div>
          <div>
            <EBContainer className="text-3xl" fullHeight>
              <div className="flex gap-2">
                <a
                  href="https://all-for-one-six.vercel.app/index.html"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  All-For-One
                  <img src="/all-for-one.png" alt="" />
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
            <EBContainer className="text-3xl" fullHeight>
              <div className="flex gap-2">
                <a
                  href="https://rpsclsp-psi.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  Rock Paper Scissors Lizard Spock
                  <img src="/rpsclsp.png" alt="" />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Bootstrap</li>
                    <li>&#8226;NES.css</li>
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
            <EBContainer className="text-3xl" fullHeight>
              <div className="flex gap-2">
                <a
                  href="https://capsulepedia.vercel.app/"
                  target="_blank"
                  className="link-class content-center w-3/5"
                >
                  Capsulepedia
                  <img src="/capsulepedia.png" alt="" />
                </a>
                <div>
                  Utilities Leveraged
                  <ul>
                    <li>&#8226;Tailwind</li>
                    <li>&#8226;PokeAPI</li>
                  </ul>
                </div>
              </div>
              <p className=" mt-1">A site that uses an API to allow users to either search for or use a random button to get any Pokemon up to Generation 5.</p>
            </EBContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
