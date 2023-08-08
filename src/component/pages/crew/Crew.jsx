import React from "react";
import Header from "../../header/Header";
import "../../styles/global.css";
import data from "../../json/data.json";
import "./crew.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const imageResponsive = (member) => {
    if (window.innerWidth === 320 && window.innerWidth <= 767) {
      return member.img.sm;
    } else if (window.innerWidth === 768 && window.innerWidth <= 1023) {
      return member.img.lg;
    } else {
      return member.img.xl;
    }
  };

  return (
    <div id="crew-container" className="min-h-screen  ">
      <Header />
      <div className=" mt-8 item-center justify-center flex flex-row lg:items-start lg:justify-start lg:mx-10 xl:mx-32  xl:mt-20">
        <h5 className="mr-2 text-hr font-bold">02</h5>
        <h5 className="text-white uppercase    ">Meet your crew</h5>
      </div>
      <main className="     text-white  text-center mt-4 lg:relative   xl:mx-32   ">
        <div className="slider-container  xl:p-0 xl:m-0">
          <Slider {...settings} className="custom-slider lg:mx-28  xl:px-0 xl:mx-0  ">
            {data.crew.map((member) => (
              <div className="container    ">
                {/* <div className="crew-member " key={member.name}> */}
                {window.innerWidth >= 768 && window.innerWidth <= 1023 ? (
                  <>
                    <div className="content  px-10 xl:px-0   ">
                      <div id="role" className="text-hr mt-20 uppercase">
                        {member.role}
                      </div>
                      <div id="name" className="text-white uppercase mt-2">
                        {member.name}
                      </div>
                      <p className="text-blueLight mt-4">{member.bio}</p>
                    </div>

                    <img
                      src={imageResponsive(member)}
                      alt={member.name}
                      className="  w-4/4 mx-auto divide-y lg:mt-16   "
                    />
                  </>
                ) : (
                  <>
                  <div className="    xl:py-5 xl:flex xl:flex-row  ">
                      <div className="xl:w-1/2 xl:order-last  ">
                        <img
                         src={imageResponsive(member)}
                         alt={member.name}
                         className="  w-4/4   mx-auto divide-y lg:my-12 mt-auto xl:h-fit  "
                         />
                      </div>
                 

                    <hr className="border-hr lg:hidden"></hr>
                    <div className="content   xl:text-left xl:mt-28 xl:w-1/2   ">
                      <div id="role" className="text-hr mt-20 uppercase ">
                        {member.role}
                      </div>
                      <div id="name" className="text-white uppercase mt-2">
                        {member.name}
                      </div>
                      <p className="text-blueLight mt-4">{member.bio}</p>
                    </div>
                 
                  </div>
                    

                    
                  </>
                )}
                </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default Crew;
