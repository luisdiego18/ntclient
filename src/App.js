import React from "react";
import { ToastContainer } from "react-toastify";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import { Route, Redirect, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <ToastContainer />
        <Switch>
          <Route path="/posts" component={Post} />
          <Route path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/posts" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
