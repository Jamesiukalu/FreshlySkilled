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
import { Link } from "react-router-dom";

const Methodology = () => {
    const [loading, setLoading] = useState(true);    const [category, setCategory] = useState('');      
    const breadcrumbs = [
      { name: 'About', link: '/careers' },
      { name: 'Careers' },
      { name: 'Our Approach to Development', active: true },
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
          <Hero title="Our Approach to Development" breadcrumbs={breadcrumbs} />
          <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Development Approach</h1>
                
               
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-phases-tab" data-bs-toggle="pill" data-bs-target="#pills-phases" type="button" role="tab" aria-controls="pills-phases" aria-selected="true">Phased Development</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-workflow-tab" data-bs-toggle="pill" data-bs-target="#pills-workflow" type="button" role="tab" aria-controls="pills-workflow" aria-selected="false">Product Development Workflow</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-tools-tab" data-bs-toggle="pill" data-bs-target="#pills-tools" type="button" role="tab" aria-controls="pills-tools" aria-selected="false">Tools & Standards</button>
                        </li>
                    </ul>
                </div>

            
                <div className="tab-content wow fadeInUp" data-wow-delay="0.5s">
               
                    <div className="tab-pane fade show active" id="pills-phases" role="tabpanel" aria-labelledby="pills-phases-tab">
                        <h4 className="text-center mb-4">Phased Development</h4>
                        <p>Our SDLC is designed with a blend of Waterfall and Agile methodologies, ensuring we balance stability and adaptability:</p>
                        <ul className="list-unstyled">
                            <li><strong>Waterfall Phases:</strong> Initial Planning, Integration & Testing, Documentation</li>
                            <li><strong>Agile Phases:</strong> Iterative Development, Deployment & Maintenance, Feedback Loop</li>
                        </ul>
                    </div>

                   
                    <div className="tab-pane fade" id="pills-workflow" role="tabpanel" aria-labelledby="pills-workflow-tab">
                        <h4 className="text-center mb-4">Product Development Workflow</h4>
                        <p>Our process to build products follows a systematic yet flexible approach:</p>
                        <ol>
                            <li>Design planning and component assignment</li>
                            <li>Database schema development with Prisma</li>
                            <li>Frontend and backend API integration</li>
                            <li>Staging environment setup and automated deployment</li>
                            <li><strong>Backups –</strong> Schedule regular backups to safeguard data (daily or weekly, as needed).</li>
                        </ol>
                    </div>

              
                    <div className="tab-pane fade" id="pills-tools" role="tabpanel" aria-labelledby="pills-tools-tab">
                        <h4 className="text-center mb-4">Tools & Standards</h4>
                        <p>We use modern tools and adhere to best practices for seamless development:</p>
                        <ul className="list-unstyled">
                            <li><strong>Tech Stack:</strong> React.js, MUI, Node.js, PostgreSQL</li>
                            <li><strong>Issue Tracking:</strong> Managed on GitHub</li>
                            <li><strong>CI/CD:</strong> Automated with CircleCI, bi-weekly releases</li>
                            <li><strong>Scheduled Deployments:</strong>Scheduled Deployments Align releases with bi-weekly sprint cycles</li>
                            <li><strong>Feedback Management:</strong> Collect and prioritize feedback from GitHub boards for continuous improvement.</li>
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

export default Methodology;
