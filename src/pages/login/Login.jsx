import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import loginImage from "../../assets/images/Login.jpg";
import Title from "../../components/shared/title/Title";
import Container from "../../components/shared/container/container";
import SocialLogin from "../../components/shared/socialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);

    signIn(data.email, data.password)
      .then((result) => {
        navigate('/')
        toast.success("Successfully Login");
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    setError("");
  };

  return (
    <div className="my-20">
      <Container>
        <div>
          <Title title="Login Here" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-8 gap-10">
          <div>
            <img src={loginImage} alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="ms-2 font-Inter font-bold text-lg">Your Email</label>
              <input
                className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                {...register("email", { required: true })}
                placeholder="Type Email"
              />

              <label className="ms-2 font-Inter font-bold text-lg">Your Password</label>
              <input
                className="border border-slate-900 block rounded w-full h-12 mb-12 ps-3"
                {...register("password", { required: true })}
                type="password"
                placeholder="Type Password"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <p className="text-red-500 text-xl my-5">{error}</p>
              <div className="flex justify-between items-center">
                <div className="w-2/5">
                  <input
                    className="block bg-orange-600 rounded text-white font-bold text-lg w-full py-3 rounder cursor-pointer"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div className="w-1/2 font-Inter">
                  <h4>
                  Don’t you have an account?
                    <Link to="/signUp" className="hover:text-orange-700 ms-3">
                      Sign Up <FaArrowRight className="inline" />
                    </Link>
                  </h4>
                </div>
              </div>
            </form>
          <SocialLogin />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
