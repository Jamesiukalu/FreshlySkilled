import React from 'react';
import aboutimage1 from "../assets/img/about-1.jpg";
import aboutimage2 from "../assets/img/about-2.jpg";
import aboutimage3 from "../assets/img/about-3.jpg";
import aboutimage4 from "../assets/img/about-4.jpg";

const About = () => {
    
    return (
        <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100" src={aboutimage1}/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid" src={aboutimage2} style={{width: '85%', marginTop: '15%'}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid" src={aboutimage3} style={{width: '85%',}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-100" src={aboutimage4}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">Unlock Your Potential with Our Expert Guidance</h1>
                        <p className="mb-4">Join our community to enhance your skills, build cutting-edge projects, and launch a successful career in tech.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Collaborative Development</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Mentored Growth</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Continuous Learning</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Global Experience</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        </>
    );
};

export default About;
