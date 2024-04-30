"use client";
import Image from "next/image";
import EBContainer from "./components/EBContainer/EBContainer";

export default function Home() {
  return (
    <div>
      <EBContainer textSize="3xl" isFixed flavor="strawberry">
        <p>Hey, check out what I can do</p>{" "}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quasi
          quaerat nihil sint repellat officiis ratione a labore aliquid
          consequuntur esse tempore quas debitis sunt libero quisquam,
          reprehenderit itaque rerum.
        </p>{" "}
        Hey you don't even need p tags (Albeit it won't have a bullet point){" "}
        <br /> <span className=" text-blue-300">Look, even span tags work</span>
        <img src="/swirl.gif" alt="" />
      </EBContainer>

      {/* 
      
      Screen transition prototype
      <img src="/output-onlinegiftools.gif" className=" fixed top-0 w-screen h-screen hidden" alt="" />
      
      */}
    </div>
  );
}
