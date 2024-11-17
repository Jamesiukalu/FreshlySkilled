import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AlumniSection = () => {
    const [loading, setLoading] = useState(true);
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
              <BounceLoader color="#007AFF" loading={loading} size={150} role="status" />
            </div>
          ) : (
            <div className="container-fluid bg-white p-0">
         

          <Navbar />
          <Hero  title="Page Name" breadcrumbs={breadcrumbs}/>
          
          <div className="container-fluid py-5" style={{backgroundColor: '#f8f9fa'}}>
            <div className="container text-center">
                <h1 className="display-4 wow fadeInUp" data-wow-delay="0.1s" style={{color: '#343a40'}}>Oops! Nothing Here...</h1>
                <p className="lead wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6c757d'}}>
                    It seems we can&apos;t find what you&apos;re looking for. This page is currently empty.
                </p>
                <div className="mb-4 wow fadeInUp" data-wow-delay="0.5s">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                </div>
                <p className="mb-4 wow fadeInUp" data-wow-delay="0.7s" style={{color: '#6c757d'}}>
                    Please check back later or explore other sections of our site.
                </p>
                <a href="/" className="btn btn-primary wow fadeInUp" data-wow-delay="0.9s">Go to Homepage</a>
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

export default AlumniSection;
