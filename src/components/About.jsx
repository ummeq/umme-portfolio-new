import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Over 5.6 years of extensive experience in the field of Web
        applications development using Angular 2/11, Typescript, JavaScript,   
        HTML5, CSS3, NodeJS, Bootstrap, MongoDB and integrating Restful API.
        Having a good knowledge of Agile methodology. Worked in multiple    
        Scrum teams in different projects, Involved in daily stand up and   
        Client calls.

        </p>

        <br />

        <p className="text-xl">
        Thorough experience on software development methodology & worked on
        all the phases of software development life cycle, which includes
          System Study, analysis, design, development, testing & implementation
        Great ability to write clear, maintainable, well-documented, well-
        commented and efficient code for web development
        </p>
      </div>
    </div>
  );
};

export default About;
