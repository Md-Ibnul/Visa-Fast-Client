import React from "react";
import "./Choose.css";
import Container from "../../../components/shared/container/container";
import chooseImg1 from "../../../assets/images/ChooseImage1.png";
import chooseImg2 from "../../../assets/images/ChooseImage2.png";
import expert from "../../../assets/images/f-icon-3.png";
import fee from "../../../assets/images/no-fee.png";
import plane from "../../../assets/images/plane.png";
import secure from "../../../assets/images/secure-payment.png";
import bottom from "../../../assets/images/bottom-bar.png";

const Choose = () => {
  return (
    <div className="my-20">
      <Container>
        <div className="lg:flex gap-20">
          <div className="relative w-full">
            <div className="chooseImg1">
              <img src={chooseImg1} alt="Images" />
            </div>
            <div className="chooseImg2">
              <img src={chooseImg2} alt="Images" />
            </div>
          </div>
          <div className="">
            <div className="relative text-left">
              <p className="font-Fasthand text-2xl text-orange-600">
                Why choose us
              </p>
              <h3 className="font-Urbanist font-extrabold text-5xl w-5/6">
                Get the best travel experience with Visa Fast
              </h3>
              <div className="absolute left-0 -bottom-8 bottom">
                <img src={bottom} width="100%" alt="Images" />
              </div>
            </div>
            <div className="flex gap-10 mt-16 ms-14">
                <div className="chooseIcon">
                    <img src={expert} alt="Images" />
                    <h4 className="font-Urbanist text-2xl font-bold py-2">Expert Travel Agent</h4>
                    <p className="font-Inter text-gray-600 font-medium">Our team of seasoned travel agents brings a wealth of experience and knowledge to curate the perfect journey for you.</p>
                </div>
                <div className="chooseIcon">
                    <img src={fee} alt="Images" />
                    <h4 className="font-Urbanist text-2xl font-bold py-2">No Consultant Fee</h4>
                    <p className="font-Inter text-gray-600 font-medium">Our commitment is to offer you exceptional service with out any hidden cost, making your travel planning process straightforward and budget-friendly.</p>
                </div>
            </div>
            <div className="flex gap-10 mt-10 ms-14">
                <div className="chooseIcon">
                    <img src={secure} alt="Images" />
                    <h4 className="font-Urbanist text-2xl font-bold py-2">Secure Payment</h4>
                    <p className="font-Inter text-gray-600 font-medium">We offer secure payment options to guarantee that your financial transactions are safe and protected.</p>
                </div>
                <div className="chooseIcon">
                    <img src={plane} alt="Images" />
                    <h4 className="font-Urbanist text-2xl font-bold py-2">Trusted Travel Agency</h4>
                    <p className="font-Inter text-gray-600 font-medium">With a reputation built on reliability and customer satisfaction, we are a trusted name in travel industry.</p>
                </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Choose;
