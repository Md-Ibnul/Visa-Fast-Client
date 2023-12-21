import React from "react";
import "./about.css";
import Container from "../../components/shared/container/container";
import Title from "../../components/shared/title/Title";
import world from "../../assets/images/f-icon-1.png";
import options from "../../assets/images/directions.png";
import expert from "../../assets/images/Experties.png";
import noFee from "../../assets/images/no-fee2.png";
import owner from "../../assets/images/Owner.png";
import owner2 from "../../assets/images/Owner2.png";
import owner3 from "../../assets/images/Owner3.png";
import owner4 from "../../assets/images/Owner4.png";
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
                  <img width={200} height={200} src={world} alt="Images" />
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
                  <img width={200} height={200} src={options} alt="Images" />
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
                  <img width={200} height={200} src={expert} alt="Images" />
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
                  <img width={180} height={180} src={noFee} alt="Images" />
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
            <img width={400} src={approve} alt="Images" />
          </div>
        </div>
        <div className="mb-20">
          <Title title="Meet The Owner & Directors" subtitle="Company Owners" />
        </div>
        <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-evenly items-center">
          <div className="">
            <img src={owner} height={600} width={600} alt="Images" />
          </div>
          <div className="text-end">
            <h4 className="font-Urbanist text-2xl lg:text-4xl font-extrabold text-gray-950 uppercase tracking-wider">LN Shamima Akter Shima</h4>
            <p className="font-Inter font-bold text-2xl tracking-widest text-gray-900">Owner of Visa Fast</p>
            <p className="font-Inter text-lg text-gray-900 font-semibold">
            Director of Pirgonj Generale  hospital <br />
            Owner of M & S Beauty  parlor  <br />
            Owner of M & S Borqa House <br />
            Regional Chairman Person at Lion's Club International
            </p>
            <h5 className="font-Inter text-2xl font-bold text-gray-900 text-center mt-6">"Visa Fast has existed for so long only thanks to your love and Visa Fast credits all its achievements only to you. Visa Fast expresses its sincere gratitude and thanks to you for this beautiful love."</h5>
          </div>
        </div>
        <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-evenly items-center">
          <div className="text-start order-2 lg:order-1">
            <h4 className="font-Urbanist text-2xl lg:text-4xl font-extrabold text-gray-950 uppercase tracking-wider">BM Wahiduzzaman</h4>
            <p className="font-Inter font-bold text-2xl tracking-widest text-gray-900">Director of Visa Fast</p>
            <p className="font-Inter text-lg text-gray-900 font-semibold">
            Owner of B. S. Trading <br />
            Owner of M/S. Zaman Enterprise  <br />
            Owner of Monika Chosma Ghar <br />
            Partner of Shariatpur Jute Mills Limited
            </p>
          </div>
          <div className="order-1 lg:order-2 flex flex-col lg:flex-row">
            <img src={owner3} height={400} width={300} alt="Images" />
            <img src={owner2} height={400} width={300} alt="Images" />
          </div>
        </div>
        <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-evenly items-center">
          <div className="">
            <img src={owner4} height={600} width={500} alt="Images" />
          </div>
          <div className="text-end">
            <h4 className="font-Urbanist text-2xl lg:text-4xl font-extrabold text-gray-950 uppercase tracking-wider">Ashraful Alam</h4>
            <p className="font-Inter font-bold text-2xl tracking-widest text-gray-900">Director of Visa Fast</p>
            <p className="font-Inter text-lg text-gray-900 font-semibold">
            Senior App Developer at <br />
            Android App Expert  <br />
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
