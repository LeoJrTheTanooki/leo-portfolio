"use client";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavbarComponent = () => {
  const router = useRouter();
  const handlePageChange = (route: string) => {
    router.push(route);
  };
  const [brandIcon, setBrandIcon] = useState<string>("/PageIcon.png");

  return (
    <>
      <Navbar className="bg-[#f06565] pb-0" fluid>
        <Navbar.Brand
          className=" cursor-pointer"
          onClick={() => {
            handlePageChange("/");
          }}
          onMouseEnter={() => {
            setBrandIcon("/PageIcon.gif");
          }}
          onMouseLeave={() => {
            setBrandIcon("/PageIcon.png");
          }}
        >
          <img
            src={brandIcon}
            className="mr-3 w-[64px]"
            alt="Leo Sprite"
            style={{ imageRendering: "pixelated" }}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Leo's Site
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=" self-end">
          <Navbar.Link
            onClick={() => {
              handlePageChange("/AboutMePage");
            }}
          >
            <div className="cursor-pointer flex flex-col bg-teal-300 mt-2 hover:mt-0 hover:pb-2">
              <img
                src="/LeoEB.gif"
                className="w-[32px] self-center"
                alt="Leo Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              About Me
            </div>
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              handlePageChange("/ProjectsPage");
            }}
          >
            <div className="cursor-pointer flex flex-col bg-pink-300 mt-2 hover:mt-0 hover:pb-2">
              <img
                src="/Placeholder.gif"
                className="w-[32px] self-center"
                alt="Placeholder Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Projects
            </div>
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              handlePageChange("/SkillsPage");
            }}
          >
            <div className="cursor-pointer flex flex-col bg-yellow-200 mt-2 hover:mt-0 hover:pb-2">
              <img
                src="/Placeholder.gif"
                className="w-[32px] self-center"
                alt="Placeholder Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Skills
            </div>
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              handlePageChange("/ContactPage");
            }}
          >
            <div className="cursor-pointer flex flex-col bg-amber-400 mt-2 hover:mt-0 hover:pb-2">
              <img
                src="/Placeholder.gif"
                className="w-[32px] self-center"
                alt="Placeholder Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Contact & Links
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
