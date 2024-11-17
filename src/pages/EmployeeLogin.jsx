import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import image from "../assets/img/login.jpg";
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = ({ onLogin }) => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api?seed=wealth");
      return response.data.results[0];
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
  const validateCredentials = (user, credential, password) => {
    if (!user) {
      return false;
    }
    
    // Check if email or phone matches and password is correct
    return (
      (credential === user.email || credential === user.phone) &&
      password === user.login.password
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await fetchUserData(); // fetches user data
      if (!user || !validateCredentials(user, credential, password)) {
        setError("Invalid email or password.");
        return;
      }
      // Save user data in sessionStorage or localStorage
      sessionStorage.setItem('user', JSON.stringify(user));
      onLogin(user); // set user as logged in
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to login. Please try again.");
    }
  };
  return (
    <>
    <Navbar />
    <Hero  title="Talent Login"/>
    <div id="main-wrapper" className="container">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                              <h4 className="h5 mb-0">Welcome back!</h4>
                                <p className="text-muted mt-2 mb-5">Enter your email address and password to your profile</p>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" id="credential" className="form-control" value={credential} onChange={(e) => setCredential(e.target.value)} required />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input id="password" className="form-control" value={password} type="password" onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    <button type="submit" className="btn btn-primary">
                                      Login
                                    </button>
                                    <a href="#l" className="float-end text-primary">Forgot password?</a>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-inline-block">
                          <img src={image} alt="" className="img-fluid mx-auto d-block" style={{ width: '100%' }} />
                        </div>
                    </div>

                </div>
            </div>
            <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="/signUp" class="text-primary ml-1">register</a></p>
      </div>
    </div>
</div>
<Footer />
    </>
  );
};

export default Login;