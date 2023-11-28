import React from "react";
import "./destination.css";
import Title from "../../components/shared/title/Title";
import america from "../../assets/images/Destination4.jpg";
import usaBg from "../../assets/images/america-flag.png";
import canadaBg from "../../assets/images/canada-flag.png";
import italyBg from "../../assets/images/italymap.png";
import australiaBg from "../../assets/images/australia.map.png";
import ukBg from "../../assets/images/united-kingdom.map.png";
import maltaBg from "../../assets/images/maltamap.png";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../../components/shared/container/container";
import america2 from "../../assets/images/america2.jpg";
import uk from "../../assets/images/Destination5.jpg";
import uk2 from "../../assets/images/uk2.jpg";
import canada from "../../assets/images/Destination3.jpg";
import canada2 from "../../assets/images/canada2.jpg";
import australia from "../../assets/images/Destination1.jpg";
import australia2 from "../../assets/images/australia2.jpg";
import italy from "../../assets/images/Destination2.jpg";
import italy2 from "../../assets/images/Italy2.jpg";
import malta from "../../assets/images/Destination6.jpg";
import malta2 from "../../assets/images/malta2.jpg";

const Destination = () => {
  return (
    <div>
      <div className="destination-bg">
        <div className="z-10 w-full mx-auto">
          <h4 className="text-white font-Urbanist font-extrabold text-7xl">
            DESTINATION
          </h4>
        </div>
      </div>
      <Container>
        <div className="mt-20 mb-44 lg:mb-40">
          <Title subtitle="Most Popular" title="TRAVEL COUNTRIES" />
          <div className="mt-20">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-5/6">
                  <div className="country-info">
                    <img src={usaBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        AMERICA
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                  <div className="country-image">
                    <img src={america} alt="" />
                  </div>
                  <div className="country-image">
                    <img src={america2} alt="" />
                  </div>
                </div>
              </div>
            <div className="mt-40">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                <div className="country-image">
                  <img src={canada} alt="" />
                </div>
                <div className="country-image">
                  <img src={canada2} alt="" />
                </div>
                </div>
                <div className="w-full lg:w-5/6">
                  <div className="country-info">
                    <img src={canadaBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        CANADA
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-40">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-5/6">
                  <div className="country-info">
                    <img src={ukBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        United Kingdom
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                  <div className="country-image">
                    <img src={uk} alt="" />
                  </div>
                  <div className="country-image">
                    <img src={uk2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-40">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                <div className="country-image">
                  <img src={australia2} alt="" />
                </div>
                <div className="country-image">
                  <img src={australia} alt="" />
                </div>
                </div>
                <div className="w-full lg:w-5/6">
                  <div className="country-info">
                    <img src={australiaBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        Australia
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-40">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-5/6">
                  <div className="country-info">
                    <img src={italyBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        Italy
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                  <div className="country-image">
                    <img src={italy} alt="" />
                  </div>
                  <div className="country-image">
                    <img src={italy2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-40">
              <div className="flex flex-col-reverse lg:flex-row gap-5">
                <div className="flex flex-row lg:flex-row gap-6 country-images">
                <div className="country-image">
                  <img src={malta2} alt="" />
                </div>
                <div className="country-image">
                  <img src={malta} alt="" />
                </div>
                </div>
                <div className=" w-5/6">
                  <div className="country-info">
                    <img src={maltaBg} alt="" />
                    <div className="country-details">
                      <h4 className="font-Urbanist font-extrabold text-6xl tracking-wider text-[#282769]">
                        Malta
                      </h4>
                      <p className="mt-4 font-Inter font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione reiciendis ut deleniti vero quam assumenda
                        ea sapiente laborum doloremque architecto.
                      </p>
                      <div className="flex justify-between mt-5 ms-5 w-5/6">
                        <ul className="">
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Immigrant Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Visitor Visa</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Tourist Visa</p>
                          </li>
                        </ul>
                        <ul>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">No Consultant Fee</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Secure Payment</p>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <FaCheckCircle className="text-lg text-sky-600" />{" "}
                            <p className="font-Inter">Expert Travel Agent</p>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Destination;
