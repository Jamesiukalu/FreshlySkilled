import React, { useState , useEffect } from 'react';
import logo from "../assets/img/logo.png";
import image from "../assets/img/login.jpg";
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Jobs from '../components/Jobs';
import TopCorousel from '../components/TopCorousel';
import ITJobSearch from '../components/ITJobSearch';
import About from '../components/ITJobSearch';
import Category from '../components/Category';
import { Link } from "react-router-dom";

const SignUp = () => {
    const [loading, setLoading] = useState(true);    const [category, setCategory] = useState('');      
    // const breadcrumbs = [
    //   { name: 'Home', link: '/' },
    //   { name: 'About' },
    //   { name: 'our Team', active: true },
    // ];
    const [showTalentForm, setShowTalentForm] = useState(false);
    const [showPartnerForm, setShowPartnerForm] = useState(false);
  
    const handleTalentClick = () => {
      setShowTalentForm(true);
      setShowPartnerForm(false);
    };
  
    const handlePartnerClick = () => {
      setShowTalentForm(false);
      setShowPartnerForm(true);
    };
// Simulate loading process
    useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // After 1 second, hide the spinner
    }, []);

    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();
    
        // Sticky Navbar
        const handleScroll = () => {
          if (window.scrollY > 300) {
            $('.sticky-top').css('top', '0px');
          } else {
            $('.sticky-top').css('top', '-100px');
          }
    
          // Back-to-top Button
          if (window.scrollY > 300) {
            $('.back-to-top').fadeIn('slow');
          } else {
            $('.back-to-top').fadeOut('slow');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <>
          {loading ? (
            <div
              id="spinner"
              className="spinner-container show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            >
              <BounceLoader color="#36D7B7" loading={loading} size={150} role="status" />
            </div>
          ) : (
            <div className="container-xxl bg-white p-0">
         

          <Navbar />
          <Hero  title="Get Started with FreshlySkilled"/>
          {/* <Hero title="our Team" breadcrumbs={breadcrumbs} /> */}
          <div className="container-xxl py-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={image} alt="" className="img-fluid mx-auto d-block" style={{ width: '100%' }} />
            </div>
            <div className="col-lg-6">
              {!showTalentForm && !showPartnerForm ? (
                <div id="image-form" className="bg-light rounded p-4">
                  <h6 className="mb-4">Select the type of account you'd like to create:</h6>
                  <div className="d-flex justify-content-around mb-4">
                    <button className="btn btn-primary" onClick={handleTalentClick}>Join as a Talent</button>
                    <button className="btn btn-secondary" onClick={handlePartnerClick}>Join as a Partner/Company</button>
                  </div>
                </div>
              ) : showTalentForm ? (
                <div id="dynamic-form" className="bg-light rounded p-4">
                  <h3 className="mb-4">Create a Talent Account</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="first-name" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="first-name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="last-name" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="last-name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input type="tel" className="form-control" id="phone" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">Best Fit Role</label>
                      <input type="text" className="form-control" id="role" placeholder="e.g., Front-End Developer" required />
                    </div>
                    <button type="submit" className="btn btn-success">Sign Up</button>
                  </form>
                </div>
              ) : (
                <div id="partner-form" className="bg-light rounded p-4">
                  <h3 className="mb-4">Create a Partner/Company Account</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="business-name" className="form-label">Company/Business Name</label>
                      <input type="text" className="form-control" id="business-name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact-info" className="form-label">Phone Number or Email</label>
                      <input type="text" className="form-control" id="contact-info" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-type" className="form-label">Project Type</label>
                      <input type="text" className="form-control" id="project-type" placeholder="e.g., Web Development" required />
                    </div>
                    <button type="submit" className="btn btn-success">Request Quote</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

        <Footer />

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
          )}
        </>
    );
};

export default SignUp;
