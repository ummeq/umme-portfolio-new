import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import angular from "../assets/angular.png";
import nodejs from "../assets/node.png";
import express from "../assets/express.png";
import mongoDB from "../assets/mongoDB.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: " HTML",
      style: "shadow-orange-500",
      expType:"Experienced"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      expType:"Experienced"
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      expType:"Experienced"
    },
    {
      id: 4,
      src: angular,
      title: "Angular",
      style: "shadow-red-600",
      expType:"Experienced"
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      expType:"Intermediate"
    },
    {
      id: 6,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-green-600",
      expType:"Intermediate"
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      expType:"Experienced"
    },
    {
      id: 6,
      src: express,
      title: "ExpressJs",
      style: "shadow-white",
      expType:"Intermediate"
    },
    {
      id: 7,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-300",
      expType:"Intermediate"
    },
    ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, expType }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <small>{expType}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
