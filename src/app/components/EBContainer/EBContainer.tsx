"use client";
import React, { ReactNode, useEffect, useState } from "react";
import localFont from "next/font/local";

const appleKid = localFont({ src: "./fonts/Apple-Kid.woff" });

const EBContainer: React.FC<any> = ({
  children,
  flavor,
  fixed,
  fullHeight,
  fullWidth,
  className,
}) => {
  const [flavoredBorder, setFlavoredBorder] = useState<string[]>([""]);
  const [flavorPalette, setFlavorPalette] = useState<string[]>([""]);
  const [plainBorder, setPlainBorder] = useState<string[]>([""]);

  useEffect(() => {
    let borderOrder = [
      "outline outline-black outline-[0.318em] rounded-[0.1rem]",
      "outline outline-gray-400 outline-[0.265em] rounded-[0.1rem]",
      "outline outline-white outline-[0.212em] rounded-[0.1rem]",
      "outline outline-gray-400 outline-[0.16em] rounded-[0.1rem]",
      "outline outline-black outline-[0.106em] rounded-[0.1rem]",
    ];

    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
      borderOrder.reverse();
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      // Pass by default
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
      borderOrder.reverse();
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      borderOrder.reverse();
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      borderOrder.reverse();
    }
    setPlainBorder(borderOrder);
  }, []);

  useEffect(() => {
    switch (flavor) {
      case "mint":
      case "blue":
        setFlavorPalette([
          "outline-[#393152]",
          "outline-[#ffefad]",
          "outline-[#6bd6bd]",
          "bg-[#393152]",
          "bg-[#290829]",
          "text-[#e9e7b4]",
        ]);
        break;
      case "strawberry":
      case "red":
        setFlavorPalette([
          "outline-[#42214a]",
          "outline-[#ffefce]",
          "outline-[#ff94ad]",
          "bg-[#42214a]",
          "bg-[#290829]",
          "text-[#e9e7b4]",
        ]);
        break;
      case "banana":
      case "yellow":
        setFlavorPalette([
          "outline-[#4a3152]",
          "outline-[#ffffd6]",
          "outline-[#efff5a]",
          "bg-[#4a3152]",
          "bg-[#290829]",
          "text-[#e9e7b4]",
        ]);
        break;
      case "peanut":
      case "orange":
        setFlavorPalette([
          "outline-[#421829]",
          "outline-[#ffefad]",
          "outline-[#e7a552]",
          "bg-[#421829]",
          "bg-[#290829]",
          "text-[#e9e7b4]",
        ]);
        break;
      case "hurt":
      case "pain":
        setFlavorPalette([
          "outline-[#702848]",
          "outline-[#f8d090]",
          "outline-[#c04048]",
          "bg-[#702848]",
          "bg-[#290829]",
          "text-[#f88058]",
        ]);
        break;
      default:
        flavor = "";
        break;
    }
  }, [flavor]);

  useEffect(() => {
    if (flavorPalette) {
      let borderArray = [
        `outline ${flavorPalette[0]} outline-[0.318em] rounded-[0.1rem]`,
        `outline ${flavorPalette[1]} outline-[0.265em] rounded-[0.1rem]`,
        `outline ${flavorPalette[2]} outline-[0.212em] ${flavorPalette[3]} rounded-[0.1rem]`,
      ];
      // Original taken from https://stackoverflow.com/a/26358856
      if (
        (navigator.userAgent.indexOf("Opera") ||
          navigator.userAgent.indexOf("OPR")) != -1
      ) {
        // Needs Testing
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        // Pass by default
      } else if (navigator.userAgent.indexOf("Edg") != -1) {
        borderArray.reverse();
      } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        borderArray.reverse();
        // Needs Testing
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        borderArray.reverse();
      }
      setFlavoredBorder(borderArray);
    }
  }, [flavorPalette]);

  return (
    /*
     */
    <>
      <div
        className={`w-fit leading-[0.954em] border-[.324em] border-transparent ${
          // className={`w-fit leading-[0.954em] border-[.589em] border-transparent ${
          appleKid.className
        }${className ? " " + className : ""}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
      >
        {flavor ? (
          <div className={`${flavoredBorder[0]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}>
            <div
              className={`${flavoredBorder[1]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
            >
              <div
                className={`${flavoredBorder[2]}${
                  fullHeight ? " h-full" : ""
                } p-[0.16em]`}
              >
                <div
                  className={`${flavorPalette[4]} ${
                    flavorPalette[5]
                  } pb-[0.106em] pt-[0.053em]${
                    fixed
                      ? " min-w-[8.5em] max-w-[8.5em] min-h-[3em] max-h-[3em] break-words overflow-y-scroll"
                      : ""
                  }${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
                  style={{ scrollbarWidth: "none" }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${plainBorder[0]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}>
            <div className={`${plainBorder[1]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}>
              <div
                className={`${plainBorder[2]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
              >
                <div
                  className={`${plainBorder[3]}${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
                >
                  <div
                    className={`
                      ${plainBorder[4]}
                       pt-[0.212em] pb-[0.265em] px-[0.16em] bg-black text-white leading-[0.954em]${
                         fixed
                           ? " min-w-[8.83em] max-w-[8.83em] min-h-[3.32em] max-h-[3.36em] break-words overflow-y-scroll"
                           : ""
                       }${fullHeight ? " h-full" : ""}${fullWidth ? " w-full" : ""}`}
                    style={{ scrollbarWidth: "none" }}
                  >
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default EBContainer;
