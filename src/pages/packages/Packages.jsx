import React from "react";
import "./packages.css";
import Container from "../../components/shared/container/container";
import touristVisa from '../../assets/images/tourist-visa.jpg'
import visitorVisa from '../../assets/images/visitor-visa.jpg'
import studentVisa from '../../assets/images/student-visa.jpg'
import familyVisa from '../../assets/images/family-visa.jpg'
import multipleVisa from '../../assets/images/multiple-visa.jpg'
import immigrantVisa from '../../assets/images/immigrant-visa.jpg'
import Title from "../../components/shared/title/Title";

const Packages = () => {
  return (
    <div className="mb-20">
        <div className="packages-bg">
        <div className="z-10 w-full mx-auto text-center">
          <h4 className="text-white font-Urbanist font-extrabold w-full">
            PACKAGES
          </h4>
        </div>
      </div>
      <Container>
        <div className="mt-20">
            <Title title="Our Popular Visa Type" subtitle="Travel Category" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-28">
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={touristVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Tourist Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Embark on your dream vacations hassle-free with our Tourist Visa Package. We streamline the visa application process, ensuring you have the necessary documentation to explore new destinations. Enjoy your travels with peace of mind, knowing our expert team is here to guide you every step of the way.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={familyVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Family Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Reunite with your family effortlessly with our Family Visa Package. We understand the importance of family ties and provide dedicated assistance to make the visa application process seamless. Let us help you bring your family together, creating precious moments and shared experiences.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={studentVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Student Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Pave the way for your educational aspirations with our Student Visa Package. We assist aspiring students in obtaining the necessary visas to pursue their academic dreams abroad. Our team ensures that the visa application process is straightforward, allowing you to focus on your studies and immerse yourself in a new learning environment.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={visitorVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Visitor Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Connect with friends and family around the globe through our Visitor Visa Package. We simplify the visa application process, making it easier for you to spend quality time with your loved ones. Our comprehensive support ensures a smooth journey, allowing you to create lasting memories with those who matter most.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={multipleVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Multiple Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Reunite with your family effortlessly with our Family Visa Package. We understand the importance of family ties and provide dedicated assistance to make the visa application process seamless. Let us help you bring your family together, creating precious moments and shared experiences.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="package-image">
                    <img src={immigrantVisa} alt="Images" />
                </div>
                <div>
                    <h4 className="font-Urbanist font-extrabold text-3xl">Immigrant Visa</h4>
                    <p className="font-Inter font-light mt-2 leading-relaxed">Embark on a new chapter in your life with our Immigrant Visa Package. We guide you through the immigration process, offering expert advice and assistance to help you settle in a new country. Our comprehensive support ensures a smooth transition as you begin your exciting journey towards a new life.</p>
                </div>
            </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Packages;
