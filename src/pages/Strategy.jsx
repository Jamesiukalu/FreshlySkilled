import React, { useState , useEffect } from 'react';
import logo from "../assets/img/logo.png";
import strategy from "../assets/img/Strategy.jpg";
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Jobs from '../components/Jobs';
import ITJobSearch from '../components/ITJobSearch';
import About from '../components/ITJobSearch';
import Category from '../components/Category';
import { Link } from "react-router-dom";

const Strategy = () => {
    const [loading, setLoading] = useState(true);    const [category, setCategory] = useState('');      
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About' },
      { name: 'OUR STRATEGY', active: true },
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
          {/* <Hero  title="Role Details"/> */}
          <Hero title="OUR STRATEGY" breadcrumbs={breadcrumbs} />
          <div className="container-xxl py-5">
            <div className="container text-center">
                <h2 className="mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Strategy</h2>
                <p className="lead wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6c757d'}}>
                    At FreshlySkilled, we believe in the transformative power of global collaboration. Our mission is to empower aspiring professionals by providing a platform that facilitates international experience through project-based internships. We aim to equip individuals with the skills and perspectives needed to gain a competitive edge in the global marketplace.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="0.5s" style={{color: '#343a40'}}>Our Vision</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="0.7s" style={{color: '#6c757d'}}>
                    FreshlySkilled envisions becoming a leading platform that revolutionizes the way talents acquire skills. We foster a vibrant global community where individuals can learn, collaborate, and innovate through diverse project experiences that transcend geographical boundaries.
                </p>
                <div className="wow fadeInUp" data-wow-delay="0.9s">
                    <img src={strategy} alt="Strategy Illustration" className="img-fluid" style={{maxWidth: '500px'}} />
                </div>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="1.1s" style={{color: '#343a40'}}>Our Strategic Goals</h3>
                <ul className="list-unstyled mb-4 wow fadeInUp" data-wow-delay="1.3s" style={{color: '#6c757d'}}>
                    <li>🌍 Foster a global talent network that enhances cross-cultural collaboration.</li>
                    <li>📚 Offer diverse project-based learning experiences that cater to various skill sets.</li>
                    <li>🤝 Build partnerships with organizations worldwide to provide real-world opportunities.</li>
                    <li>💡 Continuously innovate our platform to meet the evolving needs of aspiring professionals.</li>
                </ul>
            </div>
        </div>
        <Footer />

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
          )}
        </>
    );
};

export default Strategy;
