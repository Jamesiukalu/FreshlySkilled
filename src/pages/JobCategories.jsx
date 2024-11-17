import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JobCategories = () => {
    const [loading, setLoading] = useState(true);   
    // const breadcrumbs = [
    //   { name: 'Home', link: '/' },
    //   { name: 'About' },
    //   { name: 'Equity, Diversity & Inclusion', active: true },
    // ];
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
          <Hero  title="Our Programs"/>
          {/* <Hero title="Equity, Diversity & Inclusion" breadcrumbs={breadcrumbs} /> */}
          <div className="container-fluid py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-chart-bar text-primary mb-4"></i>
                            <h6 className="mb-3">Data Science & Analytics</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-lock text-primary mb-4"></i>
                            <h6 className="mb-3">Cybersecurity</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-robot text-primary mb-4"></i>
                            <h6 className="mb-3">Artificial Intelligence & Machine Learning</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-cloud text-primary mb-4"></i>
                            <h6 className="mb-3">Cloud Computing</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="cat-item h-100 rounded p-4" href="">
                        <i className="fa fa-3x fa-code text-primary mb-4"></i>
                            <h6 className="mb-3">Mobile/Web Development</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-network-wired text-primary mb-4"></i>
                            <h6 className="mb-3">Networking & Communications</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-database text-primary mb-4"></i>
                            <h6 className="mb-3">Database Management</h6>
                            <p className="mb-0">view more</p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a className="cat-item h-100 rounded p-4" href="">
                            <i className="fa fa-3x fa-cogs text-primary mb-4"></i>
                            <h6 className="mb-3">Digital Transformation & IT</h6>
                            <p className="mb-0">view more</p>
                        </a>
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

export default JobCategories;
