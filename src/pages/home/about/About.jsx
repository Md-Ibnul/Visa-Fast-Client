import React from "react";
import "./about.css";
import ticketsImg from "../../../assets/images/tickets.jpg";
import windowImg from "../../../assets/images/window.png";
import aboutIcon from "../../../assets/images/about-icon.png";
import bottom from "../../../assets/images/bottom-bar.png";
import love from "../../../assets/images/pink.png";
import world from "../../../assets/images/f-icon-1.png";
import options from "../../../assets/images/directions.png";
import Container from "../../../components/shared/container/container";

const About = () => {
  return (
    <div className="mt-44 mb-32">
      <Container>
        <div className="flex  gap-5 justify-center">
          <div className="relative lg:w-2/3 lg:ms-10">
            <div className="absolute aboutIcon1">
              <img src={aboutIcon} alt="" />
            </div>
            <div className="absolute aboutImage1">
              <img width={400} height={500} src={ticketsImg} alt="" />
            </div>
            <div className="absolute aboutImage2">
              <img width={350} height={450} src={windowImg} alt="" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-10 relative">
            <div className="absolute right-0 top-7 animate-pulse">
              <img src={love} alt="" />
            </div>
            <p className="font-Fasthand text-orange-600 text-2xl">About Us</p>
            <div className="relative">
              <h4 className="font-Urbanist text-4xl font-extrabold w-5/6 leading-snug text-gray-800">
                Explore all tour of the world with us.
              </h4>
              <div className="absolute -bottom-7">
                <img src={bottom} alt="" />
              </div>
            </div>
            <div className="mt-8">
              <p className="font-Inter text-lg text-gray-600 leading-8">
                We're dedicated to offering exceptional value for your travel
                investment. Our relationships with trusted travel partners. From
                personalizes itineraries to hassle-free bookings,{" "}
                <span className="font-semibold text-orange-600">Visa Fast</span>{" "}
                is here to make your journey as remarkable as the destinations
                you explore.
              </p>
              <div className="mt-8">
                <div className="flex about-right1 items-center gap-10">
                    <div className="about-right-icon1">
                        <img width={130} height={130} src={world} alt="" />
                    </div>
                    <div>
                        <h4 className="font-Urbanist font-bold text-lg ">International Tours</h4>
                        <p className="font-Inter text-sm">Let us be your guide as you traverse the globe, creating memories that will last a lifetime. Discover, dream, and delight in the magic of international travel with us!</p>
                    </div>
                </div>
                <div className="flex about-right2 items-center gap-10 mt-8">
                    <div className="about-right-icon2">
                        <img width={130} height={130} src={options} alt="" />
                    </div>
                    <div>
                        <h4 className="font-Urbanist font-bold text-lg ">Multiple Options to Choose</h4>
                        <p className="font-Inter text-sm">Let us be your guide as you traverse the globe, creating memories that will last a lifetime. Discover, dream, and delight in the magic of international travel with us!</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
