import React, { useState , useEffect } from 'react';
import logo from "../assets/img/logo.png";
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

import image1 from '../assets/img/remote3.jpg';
import image2 from '../assets/img/about-4.jpg';
import image3 from '../assets/img/about-2.jpg';
import image4 from '../assets/img/remote2.jpg';

const Careers = () => {
    const [loading, setLoading] = useState(true);    const [category, setCategory] = useState('');      
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About Us' },
      { name: 'Careers', active: true },
    ];
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
          <Hero  title="Page Name" breadcrumbs={breadcrumbs}/>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="mb-4">Empowering Talent Through Hands-On Experience!</h1>
                        <p className="mb-4">At FreshlySkilled, we harness the power of global collaboration to empower aspiring professionals. Our goal is to provide a platform where talents can gain international experience through project-based internships, transforming their skills and perspectives for a competitive edge in the global marketplace.</p>
                        <Link className="btn btn-primary py-3 px-5 mt-3" to="/job-list">Join Us</Link>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100" src={image1} />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100" src={image2} style={{width: '100%', marginTop: '5%'}} /> 
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-100" src={image3} />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-100" src={image4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="mb-4">What You Gain by Joining Us</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <h3>Experience Growth Through Real-World Projects</h3>
                        <p>Empower your future through hands-on, project-driven experiences!</p>
                    </div>
                    <div className="col-lg-8 wow fadeIn" data-wow-delay="0.2s">
                        <h5>1. Real Product Ownership & Development</h5>
                        <p>Collaborate in a team of 5-7 experts, including developers, designers, and product managers:</p>
                        <ul>
                            <li>Work on a product you’ll be proud of.</li>
                            <li>Collaborate remotely with diverse teams through regular virtual meetings.</li>
                            <li>Develop using Agile methodologies.</li>
                            <li>Publish a monthly blog to share your journey.</li>
                        </ul>
                        <p><em>Note: Each member dedicates 20 hours per week to maintain quality and consistency.</em></p>
                        <p><strong><Link to="/products">Our Products</Link> | <Link to="/tech-stack">Our Tech Stack</Link> | <Link to="/methodology">Our Approach to Development</Link></strong></p>

                        <h5>2. Soft Skills & Technical Training</h5>
                        <p>Gain new skills with 30 hours of training to expand your expertise:</p>
                        <ul>
                            <li><strong>Soft Skills (free):</strong> Resume building, interview prep, business communication, teamwork, and time management.</li>
                            <li><strong>Technical Skills (free):</strong> Frontend/back-end development, UI design, data analysis, DevOps, SEO/marketing, and more.</li>
                        </ul>
                        <p>Earn completion certificates from reputable training providers.</p>

                        <h5>3. Premium Access to Industry Mentors</h5>
                        <p>Get guidance from mentors at top companies like Apple, Google, and Amazon:</p>
                        <ul>
                            <li>Direct mentor access for personalized advice.</li>
                            <li>Monthly group mentoring sessions.</li>
                            <li>Monthly live office hours for real-time support.</li>
                        </ul>
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

export default Careers;
