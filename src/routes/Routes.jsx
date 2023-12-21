import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Destination from "../pages/destination/Destination";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../ErrorPage";
import Packages from "../pages/packages/Packages";
import SignUP from "../pages/signUp/SignUP";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import AdminRoute from "./AdminRoute";
import Blog from "../pages/blog/Blog";
import AddBlog from "../components/dashboard/admin/AddBlog";
import BlogDetails from "../pages/blogDetails/blogDetails";
import { getBlog } from "../api/Blog";
import ManageBlogs from "../components/dashboard/admin/ManageBlogs";
import ManageUsers from "../components/dashboard/ManageUsers";
import UpdateBlog from "../components/dashboard/admin/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogDetails/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUP />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // Admin Dashboard
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/addBlogs",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageBlogs",
        element: (
          <AdminRoute>
            <ManageBlogs />
          </AdminRoute>
        )
      },
      {
        path: "/dashboard/updateBlog/:id",
        element: (
          <AdminRoute>
            <UpdateBlog />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
    ],
  },
]);

export default router;
