import React, { useState } from "react";
import Container from "../../../components/shared/container/container";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import topShape from '../../../assets/images/bottom-shape.png'

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="">
        <img src={topShape} alt="Images" />
      <div className="py-10 bg-orange-600">
        <Container>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex flex-col md:flex-row mt-12 mb-8 gap-8 items-center justify-around">
              <div className="flex text-white items-start justify-start border-0 md:border-e-2 pe-4">
                <div className="font-bold text-5xl font-Urbanist">
                  {counterOn && (
                    <CountUp start={0} end={1245} duration={6} delay={0} />
                  )}
                </div>
                <div className="ms-4">
                  <h4 className="font-Urbanist font-bold text-xl">
                    + Successful Visa
                  </h4>
                </div>
              </div>
              <div className="flex text-white items-start justify-start border-0 md:border-e-2 pe-4">
                <div className="font-bold text-5xl font-Urbanist">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={6} delay={0} />
                  )}
                </div>
                <div className="ms-4">
                  <h4 className="font-Urbanist font-bold text-xl">
                    + Countries
                  </h4>
                </div>
              </div>
              <div className="flex text-white items-start justify-start border-0 md:border-e-2 pe-4">
                <div className="font-bold text-5xl font-Urbanist">
                  {counterOn && (
                    <CountUp start={0} end={2000} duration={6} delay={0} />
                  )}
                </div>
                <div className="ms-4">
                  <h4 className="font-Urbanist font-bold text-xl">+ Clients</h4>
                </div>
              </div>
              <div className="flex text-white items-start justify-start border-0 md:border-e-2 pe-4">
                <div className="font-bold text-5xl font-Urbanist">
                  {counterOn && (
                    <CountUp start={0} end={500} duration={6} delay={0} />
                  )}
                </div>
                <div className="ms-4">
                  <h4 className="font-Urbanist font-bold text-xl">
                    + Services
                  </h4>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </Container>
      </div>
    </div>
  );
};

export default Counter;
