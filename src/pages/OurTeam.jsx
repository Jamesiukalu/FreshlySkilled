import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurTeam = () => {
    const [loading, setLoading] = useState(true);
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About' },
      { name: 'our Team', active: true },
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
          {/* <Hero  title="Frequently Asked Questions (FAQ)"/> */}
          <Hero title="our Team" breadcrumbs={breadcrumbs} />
          <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="mb-4">Meet Our Dedicated Team</h1>
                    <p>Our team combines expertise and passion to deliver outstanding results.</p>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="team-member text-center">
                            <img className="img-fluid rounded-circle mb-3" src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="Team Member 1" />
                            <h5>Anab Sulub</h5>
                            <p className="text-muted">Co Founder / Business Head</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.2s">
                        <div className="team-member text-center">
                            <img className="img-fluid rounded-circle mb-3" src="https://randomuser.me/api/portraits/med/women/72.jpg" alt="Team Member 2" />
                            <h5>Adebisi Sheriff</h5>
                            <p className="text-muted">Co Founder / Tech Lead</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="team-member text-center">
                            <img className="img-fluid rounded-circle mb-3" src="https://randomuser.me/api/portraits/med/men/78.jpg" alt="Team Member 3" />
                            <h5>James Kalu</h5>
                            <p className="text-muted">Co Founder / Design Lead</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.4s">
                        <div className="team-member text-center">
                            <img className="img-fluid rounded-circle mb-3" src="https://randomuser.me/api/portraits/med/women/79.jpg" alt="Team Member 4" />
                            <h5>Emily Davis</h5>
                            <p className="text-muted">Social Lead</p>
                        </div>
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

export default OurTeam;
