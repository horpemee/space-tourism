import React from "react";
import "./home.css";
// import "/src/component/styles/global.css"
import "../../styles/global.css";
import Header from "../../header/Header";
import 'animate.css'
import {motion} from "framer-motion"


const Home = () => {
  return (
      <div id="home-container" className="min-h-screen  ">
        <Header />
        <main
          id="content"
          className="  p-5 flex justify-center items-center flex-col   text-center mt-12 lg:mx-28 xl:flex-row xl:mx-32 xl:mt-40 xl:p-0  "
        >
          <section className="  xl:text-left ">
            <h5 className="text-blueLight uppercase    ">
              So, you want to travel to
            </h5>
            <h1 className="text-white uppercase  my-8 lg:my-12 ">Space</h1>
            <p className="text-blueLight mb-20 px-5 lg:mb-40  xl:w-100% 2xl:w-1/2 xl:px-0 animate__animated animate__pulse">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>

           
          <motion.section whileHover={{scale: 1.2, backgroundColor: "#979797" }}   transition={{ease: "easeIn", duratiom : 4}}  className="  cursor-pointer  ">
            <fig className="rounded-full bg-white p-20 w-40 h-40 flex items-center justify-center mt-10   lg:p-40  lg:w-60 ">
              <h4 className="text-black uppercase ">Explore</h4>
            </fig>
          </motion.
          section>
          
        </main>
      </div>
  );
};

export default Home;
