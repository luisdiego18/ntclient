import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import JobForm from "./components/JobForm";
import Jobs from "./components/Jobs";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import RegisterForm from "./components/RegisterForm";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const user = auth.getCurrentuser();
    setUsers(user);
  }, []);

  return (
    <React.Fragment>
      <Navbar user={users} />
      <main className="container">
        <ToastContainer />
        <Switch>
          <Route path="/posts" component={Post} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/jobs/:id" component={JobForm} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/job-form" component={JobForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/jobs" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
