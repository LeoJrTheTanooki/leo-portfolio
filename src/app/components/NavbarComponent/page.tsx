/* eslint-disable @next/next/no-img-element */
"use client";
import { Navbar } from "flowbite-react";
import localFont from "next/font/local";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const pixelType = localFont({ src: "./Pixeltype.woff" });
const eightBitPusab = localFont({ src: "./8-bit-pusab.woff" });
const eightBitFortress = localFont({ src: "./8-bit fortress.woff" });

const NavbarComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handlePageChange = (route: string) => {
    router.push(route);
  };
  const [brandIcon, setBrandIcon] = useState<string>("/PageIcon.png");

  return (
    <>
      <Navbar className={"bg-[#9090e8] pb-0 "} fluid>
        <Navbar.Brand
          className={"cursor-pointer " + eightBitPusab.className}
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
          <span
            className={
              "self-center whitespace-nowrap text-xl font-semibold dark:text-white "
            }
          >
            Leo&rsquo;s Site
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="self-end">
          <Navbar.Link
            className="navbar-link bg-teal-300 md:hover:bg-teal-300"
            onClick={() => {
              handlePageChange("/");
            }}
          >
            <div
              className={`navbar-div ${
                pathname === "/" ? "mt-0 pb-2" : "md:mt-2"
              } ${eightBitFortress.className} text-[14px]`}
            >
              <img
                src="/LeoEB.gif"
                className="w-[32px] self-center mr-2 md:mr-0"
                alt="Leo Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              About Me
            </div>
          </Navbar.Link>
          <Navbar.Link
            className="navbar-link bg-pink-300 md:hover:bg-pink-300"
            onClick={() => {
              handlePageChange("/ProjectsPage");
            }}
          >
            <div
              className={`navbar-div ${
                pathname === "/ProjectsPage" ? "mt-0 pb-2" : "md:mt-2"
              } ${eightBitFortress.className} text-[14px]`}
            >
              <img
                src="/ProjectsIcon.gif"
                className="w-[32px] self-center mr-2 md:mr-0"
                alt="Wrench Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Projects
            </div>
          </Navbar.Link>
          <Navbar.Link
            className="navbar-link bg-yellow-200 md:hover:bg-yellow-200"
            onClick={() => {
              handlePageChange("/SkillsPage");
            }}
          >
            <div
              className={`navbar-div ${
                pathname === "/SkillsPage" ? "mt-0 pb-2" : "md:mt-2"
              } ${eightBitFortress.className} text-[14px]`}
            >
              <img
                src="/SkillsIcon.gif"
                className="w-[32px] self-center mr-2 md:mr-0"
                alt="Placeholder Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Skills
            </div>
          </Navbar.Link>
          <Navbar.Link
            className="navbar-link bg-amber-400 md:hover:bg-amber-400"
            onClick={() => {
              handlePageChange("/ContactPage");
            }}
          >
            <div
              className={`navbar-div ${
                pathname === "/ContactPage" ? "mt-0 pb-2" : "md:mt-2"
              } ${eightBitFortress.className} text-[14px]`}
            >
              <img
                src="/ContactIcon.gif"
                className="w-[32px] self-center mr-2 md:mr-0"
                alt="Placeholder Sprite"
                style={{ imageRendering: "pixelated" }}
              />
              Contact
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
