import React, { useState } from "react";
import Header from "../../header/Header";
import "../../styles/global.css";
import data from "..//../json/data.json";
import "./technology.css";

const Technology = () => {
  const [currentItem, setCurrentItem] = useState(data.technology[0].id);
  const numberItems = [1, 2, 3];

  const openItem = (tech) => {
    setCurrentItem(tech);
  };

  return (
    <div id="technology-container" className="min-h-screen  ">
      <Header />
      <div className="mt-8 flex flex-row items-center justify-center lg:items-start lg:justify-start lg:mx-10 xl:mx-32 xl:mt-20  ">
          <h5 className="mr-2 text-hr font-bold">03</h5>
          <h5 className="text-white uppercase    ">space launch 101</h5>
      </div>
      <main
        id="content"
        className="    text-white flex justify-center  items-center  flex-col    text-center mt-4 xl:flex xl:flex-row-reverse xl:mx-32 xl:items-center xl:justify-center xl:bg-red-400  xl:gap-12    "
      >
        <div className=" xl:relative  ">
          {data.technology.map((tech) => (
            <div key={tech.id} className="    ">
              {currentItem === tech.id && (
                <img
                  src={tech.img}
                  alt={tech.name}
                  className=" flex items-center justify-center w-screen   h-full my-10 lg:my-12   xl:my-0"
                />
              )}
            </div>
          ))}
        </div>
        <div className="item flex flex-col items-center justify-center xl:flex-row xl: xl:bg-rose-800 xl:items-stretch    ">
          <div  className=" flex flex-row   gap-4    xl:flex xl:flex-col  xl:justify-between    ">
            {numberItems.map((item) => (
              <div id="fig  "
                onClick={() => openItem(item)}
                className= {`fig    w-11 h-11  cursor-pointer  text-white border-2 border-hr hover:border-white rounded-full  flex items-center justify-center xl:p-0 xl:w-20 xl:h-20    ${currentItem === item ? "active bg-white text-blackShade " : "" }`}  
              >
                {item} 
              </div>
            ))}
            </div>
            <div className="xl:ml-8 xl:flex xl:flex-col     xl:text-left  ">
            <div id="subHeading" className="text-blueLight uppercase mt-8 mb-4 xl:mb-0 xl:mt-0">
            The terminology...
            </div>

            {data.technology.map((tech) => (
            <div key={tech.id} className="">
              {currentItem === tech.id && (
                <div className= "">
                  <div id="name" className="text-white uppercase mb-6 xl:mb-0">
                    {tech.name}
                  </div>
                  <p className="text-blueLight px-6 lg:w-1/2 lg:pb-8 lg:mx-auto xl:mx-0 xl:px-0 xl:pb-0 xl:w-auto">{tech.description}</p>
                </div>
              )}
            </div>
          ))}
            </div>
            </div>
           
          
      </main>
    </div>
  );
};

export default Technology;
