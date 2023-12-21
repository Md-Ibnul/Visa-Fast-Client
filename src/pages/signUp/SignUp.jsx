import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Title from "../../components/shared/title/Title";
import { AuthContext } from "../../providers/AuthProviders";
import signImage from "../../assets/images/SignUp.jpg";
import Container from "../../components/shared/container/container";
import SocialLogin from "../../components/shared/socialLogin/SocialLogin";
import toast from "react-hot-toast";
import { saveUser } from "../../api/Auth";

const SignUP = () => {

    const { createUser,updateUserProfile, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
      .then(() => {
        saveUser(loggedUser);
        toast.success("Successfully SignUp");
        reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error)
        toast.error(error.message)
      })
    })
    .catch(error => {
      console.log(error)
      toast.error(error.message)
    })

   setError("");

  };

  return (
    <div className="my-20">
      <Container>
      <div>
        <Title title="Sign Up Here" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="ms-2 font-Inter font-bold text-lg">Enter Your Full Name</label>
            <input
              className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
              {...register("name", { required: true })}
              placeholder="Type Name"
            />

            <label className="ms-2 font-Inter font-bold text-lg">Enter Your  Email</label>
            <input
              className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
              {...register("email", { required: true })}
              type="email"
              placeholder="Type Email"
            />

            <label className="ms-2 font-Inter font-bold text-lg">Enter Your Password</label>
            <input
              className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
              {...register("password", { required: true })}
              placeholder="Type Password"
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <p className="ms-2 text-red-500 mb-3">{error}</p>
            <div className="flex justify-between items-center">
              <div className="w-2/5">
                <input
                  className="block bg-orange-600 text-white font-bold text-lg w-full py-3 rounded cursor-pointer"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <div className="w-1/2">
                <h4>
                  Already have an account?{" "}
                  <Link to="/login" className="hover:text-orange-700 ease-in-out ms-4">
                    Login <FaArrowRight className="inline" />
                  </Link>
                </h4>
              </div>
            </div>
          </form>
          <SocialLogin />
        </div>
        <div className="order-1 lg:order-2">
          <img src={signImage} alt="" />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default SignUP;
