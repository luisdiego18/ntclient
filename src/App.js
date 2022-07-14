import React from "react";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Post />
      <LoginForm></LoginForm>
    </div>
  );
};

export default App;
