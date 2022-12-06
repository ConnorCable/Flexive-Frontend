import React from "react";
import "bulma/css/bulma.min.css";
import "./Components.css";

import { Route, Link, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <section className="hero is-primary is-fullheight" id="login">
      <div className="hero-body is-center has-text-centered">
        <div className=" container is-centered">
          <p className="title is-size-1" id="companyName">
            Flexive
          </p>
          <button className="button is-primary is-light">
            <Link to="/login">Login</Link>
          </button>
          <button className="button is-primary is-light ml-1">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </div>

      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </section>
  );
};

export default App;
