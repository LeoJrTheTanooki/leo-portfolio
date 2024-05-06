"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);

  return (
    <div className=" bg-[#9090e8] flex justify-center min-h-[80vh]">
      <div className="flex m-4 gap-4">
        <div>
          <EBContainer isFixed className=" text-5xl">
            <p>&#8226;Welcome to my home page</p>
            <p>
              &#8226;Feel free to leave the coat by the door, and see my works.
            </p>
          </EBContainer>
        </div>
        <div className="justify-self-center">
          <EBContainer className=" text-3xl">
            <p>
              &#8226;I'm not sure what else to put here... Ah well I'll figure
              it out at some point
            </p>
          </EBContainer>
          <Button
            onClick={() => {
              setTransition(true);
              setTimeout(() => {
                setTransition(false);
              }, 2000);
            }}
          >
            {transition ? "Boom, Screen Transition" : "Press Me"}
          </Button>
        </div>
      </div>
      {transition ? (
        <img
          src="/transition.gif"
          className={`fixed top-0 w-screen h-screen`}
          alt=""
        />
      ) : (
        <></>
      )}
    </div>
  );
}
