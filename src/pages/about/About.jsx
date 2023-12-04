import React from "react";
import "./about.css";
import Container from "../../components/shared/container/container";
import Title from "../../components/shared/title/Title";
import world from "../../assets/images/f-icon-1.png";
import options from "../../assets/images/directions.png";
import expert from "../../assets/images/Experties.png";
import noFee from "../../assets/images/no-fee2.png";
import owner from "../../assets/images/Owner.png";
import approve from "../../assets/images/american-experience-ride-the-wave-1.gif";
import Choose from "../home/choose/Choose";
import Counter from "../home/counter/Counter";
import Partners from "../home/partners/Partners";

const About = () => {
  return (
    <div>
      <div className="about-bg">
        <div className="z-10 w-full mx-auto text-center">
          <h4 className="text-white w-full font-Urbanist font-extrabold text-2xl">
            ABOUT US
          </h4>
        </div>
      </div>
      <Container>
        <div className="mt-20 mb-44 lg:mb-40 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-auto">
            <div className="w-4/6 m-auto">
              <Title
                title="Explore all tour of the world with us."
                subtitle="Know More About Us"
              />
              </div>
              <div className="mt-8">
                <p className="font-Inter text-lg text-gray-600 leading-8">
                  We're dedicated to offering exceptional value for your travel
                  investment. Our relationships with trusted travel partners.
                  From personalizes itineraries to hassle-free bookings,{" "}
                  <span className="font-semibold text-orange-600">
                    Visa Fast
                  </span>{" "}
                  is here to make your journey as remarkable as the destinations
                  you explore.
                </p>
              
            </div>
            <div className="mt-6 flex flex-col lg:flex-row  justify-between gap-10">
              <div>
              <div className="flex about-right1 items-center gap-10">
                <div className="about-right-icon1">
                  <img width={200} height={200} src={world} alt="" />
                </div>
                <div>
                  <h4 className="font-Urbanist font-bold text-lg ">
                    International Tours
                  </h4>
                  <p className="font-Inter text-sm">
                    Let us be your guide as you traverse the globe, creating
                    memories that will last a lifetime. Discover, dream, and
                    delight in the magic of international travel with us!
                  </p>
                </div>
              </div>
              <div className="flex about-right2 items-center gap-10 mt-8">
                <div className="about-right-icon2">
                  <img width={200} height={200} src={options} alt="" />
                </div>
                <div>
                  <h4 className="font-Urbanist font-bold text-lg ">
                    Multiple Options to Choose
                  </h4>
                  <p className="font-Inter text-sm">
                    Let us be your guide as you traverse the globe, creating
                    memories that will last a lifetime. Discover, dream, and
                    delight in the magic of international travel with us!
                  </p>
                </div>
              </div>
              </div>
              <div>
              <div className="flex about-right1 items-center gap-10">
                <div className="about-right-icon1">
                  <img width={200} height={200} src={expert} alt="" />
                </div>
                <div>
                  <h4 className="font-Urbanist font-bold text-lg ">
                    Our Expertise
                  </h4>
                  <p className="font-Inter text-sm">
                    At Visa fast, we boast a team of travel experts passionate about crafting personalized experience. Our travel agents bring a wealth of knowledge to ensure your itinerary is not just a travel but a curated  adventure tailored to your desire. 
                  </p>
                </div>
              </div>
              <div className="flex about-right2 items-center gap-10 mt-8">
                <div className="about-right-icon2">
                  <img width={180} height={180} src={noFee} alt="" />
                </div>
                <div>
                  <h4 className="font-Urbanist font-bold text-lg ">
                    No Consultant Fee
                  </h4>
                  <p className="font-Inter text-sm">
                    Let us be your guide as you traverse the globe, creating
                    memories that will last a lifetime. Discover, dream, and
                    delight in the magic of international travel with us!
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="flex-auto w-full">
            <img width={400} src={approve} alt="" />
          </div>
        </div>
        <div className="my-5 flex flex-col lg:flex-row gap-12 justify-evenly items-center">
          <div>
            <img src={owner} height={600} width={600} alt="" />
          </div>
          <div className="text-end">
            <h4 className="font-Urbanist text-2xl lg:text-4xl font-extrabold text-gray-950 uppercase tracking-wider">LN Shamima Akter Shima</h4>
            <p className="font-Inter font-light text-gray-600">Owner, Visa Fast</p>
            <p className="font-Inter text-lg text-gray-900 font-semibold">
            RCP at Lions Club # Dis-315A1 <br />
            Director, Pirganj General Hospital <br />
            Ticketing & Visa Director of Biman Holidays
            </p>
          </div>
        </div>
      </Container>
      <Choose />
      <Counter />
      <Partners />
    </div>
  );
};

export default About;
