"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";
import { Button, Navbar } from "flowbite-react";
import { useState } from "react";

export default function Home() {
  const [transition, setTransition] = useState<boolean>(false);

  return (
    <div className=" bg-[#9090e8] flex justify-center min-h-[80vh]">
      <div className="block">
        <div className="flex m-4 gap-4">
          <div>
            <EBContainer isFixed className=" text-5xl">
              <p>&#8226;Welcome to my home page</p>
              <p>
                &#8226;Feel free to hang your coat and learn more about me.
              </p>
            </EBContainer>
          </div>
          <div className="justify-self-center gap-4 flex flex-col">
            <EBContainer className=" text-3xl">
              <p>
                &#8226;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quo quis beatae tempora enim? Recusandae assumenda magnam fuga voluptatem nam sint molestiae error, cum, ullam, odit nisi neque ex esse!
              </p>
              <p>
                &#8226;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus assumenda illo id sunt deleniti eius aperiam dolores dignissimos tempore incidunt, blanditiis molestias iusto quod dicta commodi saepe magnam eum dolorum?
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
