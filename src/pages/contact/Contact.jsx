import React from "react";
import "./contact.css";
import Container from "../../components/shared/container/container";
import Title from "../../components/shared/title/Title";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { useForm } from "react-hook-form"

const Contact = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div className="contact-bg">
        <div className="z-10 w-full mx-auto text-center">
          <h4 className="text-white font-Urbanist font-extrabold w-full">
            CONTACT US
          </h4>
        </div>
      </div>
      <Container>
        <div className="mt-20 mb-28">
          <Title title="Contact Information" subtitle="Contact Details" />
          <div className="mt-28 grid grid-cols-1 lg:grid-cols-3 gap-y-16">
            <div className="contact-info m-auto flex flex-col items-center gap-10">
              <div className="text-center contact-icon">
                <FaPhone className="icon" />
              </div>
              <div className="text-center">
                <h4 className="font-Urbanist text-4xl font-extrabold">
                  Contact number
                </h4>
                <p className="mt-6 font-Inter">
                  +88017 3756 4236 <br /> +88017 0557 4099
                </p>
              </div>
            </div>
            <div className="contact-info m-auto flex flex-col items-center gap-10">
              <div className="text-center contact-icon">
                <SiMinutemailer className="icon" />
              </div>
              <div className="text-center">
                <h4 className="font-Urbanist text-4xl font-extrabold">
                  Mail Address
                </h4>
                <p className="mt-6 font-Inter">visafastusa@gmail.com</p>
              </div>
            </div>
            <div className="contact-info m-auto flex flex-col items-center gap-10">
              <div className="text-center contact-icon">
                <ImLocation2 className="icon" />
              </div>
              <div className="text-center">
                <h4 className="font-Urbanist text-4xl font-extrabold">
                  Office Address
                </h4>
                <p className="mt-6 font-Inter">
                  44/F/8A West Panthapath, <br /> Dhaka-1215
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="width: 100%">
            <iframe
              width="100%"
              height="500"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=44/F/8A%20Panthapath,%20Dhaka-1215+(Visa%20Fast%20Office%20Address)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population calculator map
              </a>
            </iframe>
          </div>
        </div>
        <div className="mb-20">
          <div className="my-20">
            <Title title="Send Us Your Message" />
          </div>
          <div className="lg:w-1/3 m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-Inter font-medium">What is your name?</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  required
                  {...register("Name")}
                />
              </label>
              <label className="form-control w-full mt-6">
                <div className="label">
                  <span className="label-text font-Inter font-medium">What is your Email?</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  required
                  {...register("Email")}
                />
              </label>
              <label className="form-control w-full mt-6">
                <div className="label">
                  <span className="label-text font-Inter font-medium">What is your Contact Number?</span>
                </div>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  required
                  {...register("Phone")}
                />
              </label>
              <label className="form-control mt-6">
                <div className="label">
                  <span className="label-text font-Inter font-medium">Your message</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Type here"
                  required
                  {...register("Message")}
                ></textarea>
              </label>
              <input className="mt-6 w-full bg-orange-500 py-5 text-white font-Urbanist font-bold text-xl rounded-md hover:bg-orange-700 ease-in-out cursor-pointer" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
