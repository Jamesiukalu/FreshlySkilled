/* eslint-disable react/no-unknown-property */
import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TechStack = () => {
    const [loading, setLoading] = useState(true);
    const breadcrumbs = [
      { name: 'About', link: '/careers' },
      { name: 'Careers' },
      { name: 'Our TechStack', active: true },
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
          {/* <Hero  title="Role Details"/> */}
          <Hero title="Our TechStack" breadcrumbs={breadcrumbs} />
          <div className="container-fluid py-5">
            <div className="container">
                <h3 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Tech Stack</h3>
                <p className="text-center wow fadeInUp" data-wow-delay="0.2s">
                    Our team at Techtalize brings together diverse expertise and backgrounds, so our tech stack is a blend of widely-used technologies with an openness to newer, innovative tools. While the specific requirements of a SaaS application can vary, here’s a look at the core technologies we employ—and some we may explore in the future.
                </p>


                <div className="row justify-content-center mb-5">
                  
                    <div className="col-auto wow fadeInUp" data-wow-delay="0.3s">
                        <i className="fab fa-react fa-3x mx-3"></i>
                        <i className="fab fa-github fa-3x mx-3"></i>
                        <i className="fab fa-node fa-3x mx-3"></i>
                        <i className="fab fa-git fa-3x mx-3"></i>
                        <i className="fab fa-figma fa-3x mx-3"></i>
                        <i className="fab fa-bootstrap fa-3x mx-3"></i>
                    </div>
                </div>

                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-frontend" type="button" role="tab" aria-controls="pills-frontend" aria-selected="true">Frontend Technologies</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-backend-tab" data-bs-toggle="pill" data-bs-target="#pills-backend" type="button" role="tab" aria-controls="pills-backend" aria-selected="false">Backend Technologies</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-infrastructure-tab" data-bs-toggle="pill" data-bs-target="#pills-infrastructure" type="button" role="tab" aria-controls="pills-infrastructure" aria-selected="false">Infrastructure & Deployment</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-additional-tab" data-bs-toggle="pill" data-bs-target="#pills-additional" type="button" role="tab" aria-controls="pills-additional" aria-selected="false">Additional Tools & Services</button>
                        </li>
                    </ul>
                </div>

                <div className="tab-content wow fadeInUp" data-wow-delay="0.5s">
      
                    <div className="tab-pane fade show active" id="pills-frontend" role="tabpanel" aria-labelledby="pills-frontend-tab">
                        <h4 className="text-center mb-4">Frontend Technologies</h4>
                        <p>At Techtalize, user experience is a top priority in building SaaS applications. Our frontend stack is selected to ensure intuitive interfaces and smooth interactions:</p>
                        <ul className="list-unstyled">
                            <li><strong>Core Languages:</strong> HTML, CSS, JavaScript for building user-facing components.</li>
                            <li><strong>Framework:</strong> React for dynamic and interactive user interfaces.</li>
                            <li><strong>Styling Framework:</strong> MUI provides pre-designed React components based on Material Design, speeding up development.</li>
                            <li><strong>State Management:</strong> Redux manages state in complex applications for a consistent experience.</li>
                            <li><strong>Responsive Design:</strong> Ensures compatibility across various devices.</li>
                        </ul>
                    </div>

                    <div className="tab-pane fade" id="pills-backend" role="tabpanel" aria-labelledby="pills-backend-tab">
                        <h4 className="text-center mb-4">Backend Technologies</h4>
                        <p>Our backend stack is built for scalability, security, and performance:</p>
                        <ul className="list-unstyled">
                            <li><strong>Engine:</strong> Node.js is our main runtime; we may also explore Go for performance needs in the future.</li>
                            <li><strong>APIs:</strong> RESTful APIs facilitate communication between frontend and backend.</li>
                            <li><strong>Authentication:</strong> OAuth, JWT, and session-based authentication ensure secure access control.</li>
                            <li><strong>Database:</strong> PostgreSQL serves as our primary relational database.</li>
                            <li><strong>Caching:</strong> Redis is currently in use, though we’re exploring alternatives following recent licensing changes.</li>
                        </ul>
                    </div>

                    <div className="tab-pane fade" id="pills-infrastructure" role="tabpanel" aria-labelledby="pills-infrastructure-tab">
                        <h4 className="text-center mb-4">Infrastructure & Deployment</h4>
                        <p>We leverage modern cloud and containerization tools for seamless deployment and monitoring:</p>
                        <ul className="list-unstyled">
                            <li><strong>Cloud Platform:</strong> AWS and Digital Ocean (primarily S3 and Linux-based images).</li>
                            <li><strong>Containerization:</strong> Docker for flexible deployment, with future plans for Kubernetes.</li>
                            <li><strong>Version Control:</strong> GitHub is our central code repository, supporting collaboration and versioning.</li>
                            <li><strong>CI/CD:</strong> CircleCI automates build, test, and deployment processes for smooth delivery.</li>
                            <li><strong>Monitoring:</strong> Signoz provides APM, logs, metrics, and alerting to maintain system health.</li>
                        </ul>
                    </div>

                    <div className="tab-pane fade" id="pills-additional" role="tabpanel" aria-labelledby="pills-additional-tab">
                        <h4 className="text-center mb-4">Additional Tools & Services</h4>
                        <ul className="list-unstyled">
                            <li><strong>Communication:</strong> Discord for team collaboration, with plans to open community channels.</li>
                            <li><strong>Project Management:</strong> GitHub is used for issue tracking and project planning.</li>
                        </ul>
                        <p>If you have experience with other technologies, we&apos;d love to hear from you! We’re always open to new ideas and evolving our stack to best meet project needs.</p>
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

export default TechStack;
