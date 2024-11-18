import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jobData from "../data/jobs.json";

const JobDetail = () => {
    const [loading, setLoading] = useState(true);   
    const { id } = useParams(); // Get the job index from the route
    const job = jobData.find(job => job.id === parseInt(id));


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

    // Check if the job exists, otherwise show an error or a fallback
    if (!job) {
        return <div>Job not found</div>; // You can customize this message or redirect
    }

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
                <Hero title="Role Details"/>
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gy-5 gx-4">
                            <div className="col-lg-8">
                                <div className="d-flex align-items-center mb-5">
                                    <img className="flex-shrink-0 img-fluid border rounded" src={logo} alt="" style={{width: '80px', height: '80px'}} />
                                    <div className="text-start ps-4">
                                        <h3 className="mb-3">{job.title}</h3>
                                        <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{job.location}</span>
                                        <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2"></i>{job.type}</span>
                                        <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i>{job.salary}</span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h4 className="mb-3">Job description</h4>
                                    <p>{job.roleDescription}</p>
                                    <h4 className="mb-3">Responsibility</h4>
                                    <p>{job.roleResponsibility}</p>
                                    <ul className="list-unstyled">
                                    {job.roleResponsibilities.map((resp, index) => (
                                        <li key={index}>
                                            <i className="fa fa-angle-right text-primary me-2"></i>{resp}
                                        </li>
                                    ))}
                                    </ul>
                                    <h4 className="mb-3">Qualifications</h4>
                                    <p>{job.roleQualification}</p>
                                    <ul className="list-unstyled">
                                    {job.roleQualifications.map((qual, index) => (
                                        <li key={index}>
                                            <i className="fa fa-angle-right text-primary me-2"></i>{qual}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            <div className="">
                                <h4 className="mb-4">Fill the form to apply</h4>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control" placeholder="Portfolio Website" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="file" className="form-control bg-white" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control" rows="5" placeholder="Coverletter"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Apply Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>        
                            </div>
                            <div className="col-lg-4">
                                <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-4">Job Summery</h4>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Published On: {job.rolePublishedDate}</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Type: {job.type}</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Job Nature: {job.type}</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Salary: {job.salary}</p>
                                    <p><i className="fa fa-angle-right text-primary me-2"></i>Location: {job.location}</p>
                                    <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: {job.deadline}</p>
                                </div>
                                <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-4">{job.companyDetails.name}</h4>
                                    <p className="m-0">{job.companyDetails.description}</p>
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

export default JobDetail;
