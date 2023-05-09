import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import HomeLayout from "./pages/HomeLayout";
import React from "react";
import "./App.css";
import AuthLayout from "./pages/AuthLayout";
import ForumDetail from "./pages/ForumDetail";
import ForumLayout from "./pages/ForumLayout";
import { PrivateRoute } from "./components/PrivateRoute";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
      <ScrollToTop
        className="flex items-center justify-center"
        smooth
        top="10"
      />

      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeLayout />
            </PrivateRoute>
          }
        >
          <Route index={true} element={<Home />} />

          <Route path="blog" element={<Blog />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/Forum" element={<ForumLayout />}>
          <Route index={true} element={<Forum />} />
          <Route path="Forumdetail" element={<ForumDetail />} />
        </Route>
        <Route path="/Auth" element={<AuthLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
