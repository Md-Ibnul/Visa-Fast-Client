import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Loader from "../components/shared/loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading, role } = useContext(AuthContext);

  const location = useLocation();

  if ( loading ) {
    return <Loader />;
  }
  if (user && role === "Admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;