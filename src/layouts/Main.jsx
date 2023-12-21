import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar.jsx";
import Footer from "../components/shared/footer/Footer.jsx";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop.js";
import ScrollButton from "../components/shared/scrollButton/ScrollButton.jsx";
import { useEffect, useState } from "react";
import Loader from "../components/shared/loader/Loader.jsx";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
    fakeDataFetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <div className="pt-24">
            <Outlet />
          </div>
          <ScrollButton />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
