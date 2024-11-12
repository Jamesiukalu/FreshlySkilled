import { Link } from 'react-router-dom';
import logo from '../assets/img/Tech brand4.png'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              {/* <h5 className="text-white mb-4">Techtalize</h5> */}
              <img 
                src={logo} 
                alt="Techtalize Logo" 
                className="img-fluid" 
                style={{ maxHeight: '40px' }} 
            />
              <Link className="btn btn-link text-white-50" to="/">About Us</Link>
              <Link className="btn btn-link text-white-50" to="/careers">Careers</Link>
              <Link className="btn btn-link text-white-50" to="/ourTeam">Our Programs</Link>
              <Link className="btn btn-link text-white-50" to="/alumniSection">Our Partners</Link>
              <Link className="btn btn-link text-white-50" to="/strategy">Our Strategy</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" to="/products">Pricing</Link>
              <Link className="btn btn-link text-white-50" to="/alumniSection">Alumni Corner</Link>
              <Link className="btn btn-link text-white-50" to="/privacy-policy">Privacy Policy</Link>
              <Link className="btn btn-link text-white-50" to="/terms-of-use">Terms of Use</Link>
              <Link className="btn btn-link text-white-50" to="/accessibility">Accessibility</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Bell Street, Toronto, CA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+1 454 985 3665</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@Techtalize.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Get in Touch</h5>
              <p>Leave your email and we&apos;ll get back to you.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link className="border-bottom" to="/">Techtalize</Link>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/">Home</Link>
                  <Link to="/cookies">Cookies</Link>
                  <Link to="/help">Help</Link>
                  <Link to="/faq">FAQs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
