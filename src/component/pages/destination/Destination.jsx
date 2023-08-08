import React, { useState } from "react";
import Header from "../../header/Header";
import "../../styles/global.css";
import data from "../../json/data.json";
import "./destination.css";

const Destination = () => {
  const [activeTab, setActiveTab] = useState(data.destinations[0].name);
  const DestinationItems = ["Moon", "Mars", "Europa", "Titan"];


  const openPlanet = (destination) => {
    setActiveTab(destination);

  };

  const getImageSrc = (destination) => {
    if (window.innerWidth === 320 && window.innerWidth <= 767) {
      return destination.img.sm;
    } else if (window.innerWidth === 768 && window.innerWidth <= 1023) {
      return destination.img.lg;
    } else {
      return destination.img.xl;
    }
  };

  return (
    <div id="destination-container" className="min-h-screen  ">
      <Header />
      <div className=" mt-8 item-center justify-center flex flex-row lg:items-start lg:justify-start lg:mx-10 xl:mx-32 xl:mt-20">
        <h5 className="mr-2 text-hr font-bold">01</h5>
        <h5 className="text-white uppercase    ">Pick your destination</h5>
      </div>
      <main className=" p-5 text-white flex justify-center items-center   flex-col text-center mt-12  lg:mx-28 xl:flex xl:flex-row xl:gap-24">
      <div className="desktop xl:w-1/2 2xl:w-3/5   xl:flex justify-center ">
      {data.destinations.map((destination) => (
          <div key={destination.id}>
            {activeTab === destination.name && (
              <img
                src={getImageSrc(destination)}
                alt={destination.name}
                className="flex item-center my-8 lg:my-12 "
              />
            )}
          </div>
        ))}
      </div>
      

        <div className="desktop  xl:w-1/2 2xl:w-2/5 xl:items-start justify-start    ">
          <div className=" flex flex-row items-center justify-center uppercase gap-6 xl:justify-start xl:gap-12">

            {DestinationItems.map((item) => (
              <h6 className={`planet ${activeTab === item ? "active border-white border-b-4" : ""}`}  onClick={() => openPlanet(item)}>
                {item}
              </h6>
             
            ))}
          </div>

          {data.destinations.map((destination) => (
            <div>
              {activeTab === destination.name && (
                <>
                  <h2 className="uppercase my-3 xl:text-left">{destination.name}</h2>

                  <p className="  text-blueLight px-5 mb-10   lg:p-0   xl:px-0 xl:text-left ">
                    {destination.description}
                  </p>
                  <hr className="border-hr" />

                  <section className="    my-10   flex flex-col  items-center  uppercase lg:flex-row justify-around  xl:justify-normal xl:gap-24  ">
                    <div id="subHeading" className="text-blueLight xl:text-start">
                      Avg distance
                      <h3 className=" text-white mt-2">
                        {destination.distance}
                      </h3>
                    </div>
                    <div
                      id="subHeading"
                      className=" text-blueLight mt-6 lg:mt-0 xl:text-start"
                    >
                      Est Travel Time
                      <h3 className=" text-white mt-2">
                        {" "}
                        {destination.travel}
                      </h3>
                    </div>
                  </section>
                </>
              )}
            </div>
          ))}

       
        </div>
       
      </main>
    </div>
  );
};
export default Destination;
