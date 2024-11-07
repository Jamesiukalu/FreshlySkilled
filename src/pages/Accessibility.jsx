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
import ITJobSearch from '../components/ITJobSearch';
import About from '../components/ITJobSearch';
import Category from '../components/Category';

const Accessibility = () => {
    const [loading, setLoading] = useState(true);    const [category, setCategory] = useState('');      
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About Us' },
      { name: 'Accessibility', active: true },
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
            <div className="container text-center">
                <h2 className="mb-5 wow fadeInUp" data-wow-delay="0.1s">Accessibility at FreshlySkilled</h2>
                <p className="lead wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6c757d'}}>
                    At FreshlySkilled, we are committed to ensuring that our platform is accessible to all users, including individuals with disabilities. We believe that everyone deserves equal access to our services and opportunities, and we strive to create an inclusive environment where all talents can thrive.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="0.5s" style={{color: '#343a40'}}>Our Accessibility Standards</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="0.7s" style={{color: '#6c757d'}}>
                    We adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 to ensure that our website and services are designed and developed with accessibility in mind. This includes:
                </p>
                <ul className="list-unstyled mb-4 wow fadeInUp" data-wow-delay="0.9s" style={{color: '#6c757d'}}>
                    <li>🔍 <strong>Perceivable</strong>: Providing text alternatives for non-text content, making information available to all users.</li>
                    <li>🔒 <strong>Operable</strong>: Ensuring that all functionalities are accessible via a keyboard and are easy to navigate.</li>
                    <li>📄 <strong>Understandable</strong>: Making text content readable and understandable while ensuring consistent navigation and interfaces.</li>
                    <li>🛠️ <strong>Robust</strong>: Ensuring compatibility with current and future assistive technologies and user agents.</li>
                </ul>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="1.1s" style={{color: '#343a40'}}>Our Commitment to Continuous Improvement</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="1.3s" style={{color: '#6c757d'}}>
                    We regularly review our platform to identify and address accessibility barriers. We welcome feedback from our users to help us enhance our accessibility practices. Your input is invaluable in ensuring that we meet the diverse needs of our community.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="1.5s" style={{color: '#343a40'}}>Accessibility Features</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="1.7s" style={{color: '#6c757d'}}>
                    Our platform includes various accessibility features to support users, such as:
                </p>
                <ul className="list-unstyled mb-4 wow fadeInUp" data-wow-delay="1.9s" style={{color: '#6c757d'}}>
                    <li>🖱️ <strong>Keyboard Navigation</strong>: All functionality is accessible through keyboard shortcuts.</li>
                    <li>🎨 <strong>Color Contrast</strong>: We ensure that color contrast ratios meet accessibility standards for readability.</li>
                    <li>📝 <strong>Text Resizing</strong>: Users can adjust text size without loss of content or functionality.</li>
                    <li>🔊 <strong>Screen Reader Compatibility</strong>: Our site is compatible with popular screen readers, allowing for an enhanced experience.</li>
                </ul>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="2.1s" style={{color: '#343a40'}}>Contact Us for Support</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="2.3s" style={{color: '#6c757d'}}>
                    If you encounter any accessibility issues or have suggestions for improvement, please reach out to us at <a href="mailto:support@freshlyskilled.com" style={{color: '#007bff'}}>support@freshlyskilled.com</a>. We value your feedback and are here to assist you.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="2.5s" style={{color: '#343a40'}}>Join Us in Promoting Accessibility</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="2.7s" style={{color: '#6c757d'}}>
                    At FreshlySkilled, we believe that accessibility is a shared responsibility. Together, we can create an inclusive environment that empowers all individuals to succeed. Thank you for being part of our journey towards accessibility for all.
                </p>
            </div>
        </div>
        <Footer />


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
          )}
        </>
    );
};

export default Accessibility;
