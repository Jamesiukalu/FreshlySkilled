import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Inclusion = () => {
    const [loading, setLoading] = useState(true);    
    const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About' },
      { name: 'Equity, Diversity & Inclusion', active: true },
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
            <div className="container-xxl bg-white p-0">
         

          <Navbar />
          {/* <Hero  title="Frequently Asked Questions (FAQ)"/> */}
          <Hero title="Equity, Diversity & Inclusion" breadcrumbs={breadcrumbs} />
          <div className="container-xxl py-5">
            <div className="container text-center">
                <h2 className="mb-5 wow fadeInUp" data-wow-delay="0.1s">Equity, Diversity & Inclusion</h2>
                <p className="lead wow fadeInUp" data-wow-delay="0.3s" style={{color: '#6c757d'}}>
                    At Techtalize, we believe that equity, diversity, and inclusion are fundamental to our success and the success of our global community. We are committed to creating a welcoming environment where every individual feels valued, respected, and empowered to contribute their unique perspectives and talents.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="0.5s" style={{color: '#343a40'}}>Our Commitment to EDI</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="0.7s" style={{color: '#6c757d'}}>
                    We strive to cultivate a culture of inclusivity that reflects the diversity of the world around us. Our commitment to equity means ensuring that everyone has access to the resources, opportunities, and support they need to thrive, regardless of their background or identity.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="0.9s" style={{color: '#343a40'}}>Why EDI Matters</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="1.1s" style={{color: '#6c757d'}}>
                    Embracing diversity not only enriches our community but also drives innovation and creativity. By incorporating diverse perspectives, we enhance problem-solving and foster a more dynamic environment that benefits everyone involved. We recognize that our collective success depends on the contributions of individuals from various backgrounds, experiences, and viewpoints.
                </p>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="1.3s" style={{color: '#343a40'}}>Our Initiatives</h3>
                <ul className="list-unstyled mb-4 wow fadeInUp" data-wow-delay="1.5s" style={{color: '#6c757d'}}>
                    <li>🌍 **Inclusive Recruitment**: We actively seek diverse talent through inclusive hiring practices and outreach initiatives to underrepresented communities.</li>
                    <li>📚 **Training and Development**: We provide ongoing education and training on topics related to diversity, equity, and inclusion to all team members, fostering an understanding of the importance of EDI in our workplace.</li>
                    <li>🤝 **Community Engagement**: We partner with organizations and initiatives that promote diversity and inclusion, supporting community-building efforts and outreach programs.</li>
                    <li>💬 **Feedback Mechanisms**: We encourage open dialogue and feedback from our community to continually assess and improve our EDI practices, ensuring that everyone feels heard and valued.</li>
                    <li>🌟 **Celebrating Diversity**: We celebrate various cultural events, heritage months, and awareness days to honor the diverse backgrounds of our community members.</li>
                </ul>
                <h3 className="mt-4 mb-3 wow fadeInUp" data-wow-delay="1.7s" style={{color: '#343a40'}}>Join Us in Our Journey</h3>
                <p className="mb-4 wow fadeInUp" data-wow-delay="1.9s" style={{color: '#6c757d'}}>
                    We invite everyone to join us in fostering an equitable, diverse, and inclusive environment at Techtalize. Together, we can create a space where all individuals can thrive and contribute to a more innovative and equitable future.
                </p>
            </div>
        </div>
        <Footer />

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
          )}
        </>
    );
};

export default Inclusion;
