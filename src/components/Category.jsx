import React from 'react';

const Category = () => {
  
    return (
        <>
        <div className="container-xxl py-5">
        <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore Tech Careers</h1>
        <div className="row g-4 techrows">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-chart-bar text-primary mb-4"></i>
                    <h6 className="mb-3">Data Science & Analytics</h6>
                    <p className="mb-0">Data Scientist</p>
                    <p className="mb-0">Data Analyst</p>
                    <p className="mb-0">Business Intelligence Analyst</p>
                    <p className="mb-0">Machine Learning Engineer</p>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-lock text-primary mb-4"></i>
                    <h6 className="mb-3">Cybersecurity</h6>
                    <p className="mb-0">Cybersecurity Specialist</p>
                    <p className="mb-0">Information Security Analyst</p>
                    <p className="mb-0">Penetration Tester</p>
                    <p className="mb-0">Security Consultant</p>                    
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-robot text-primary mb-4"></i>
                    <h6 className="mb-3">Artificial Intelligence & Machine Learning</h6>
                    <p className="mb-0">AI/ML Engineer</p>
                    <p className="mb-0">AI Research Scientist</p>
                    <p className="mb-0">Computer Vision Engineer</p>
                    <p className="mb-0">NLP Specialist</p>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-cloud text-primary mb-4"></i>
                    <h6 className="mb-3">Cloud Computing</h6>
                    <p className="mb-0">Cloud Architect</p>
                    <p className="mb-0">Cloud Engineer</p>
                    <p className="mb-0">Cloud Security Specialist</p>
                    <p className="mb-0">DevOps Engineer</p>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-code text-primary mb-4"></i>
                    <h6 className="mb-3">Mobile/Web Development</h6>
                    <p className="mb-0">Front-end Developer</p>
                    <p className="mb-0">Back-end Developer</p>
                    <p className="mb-0">Full Stack Developer</p>
                    <p className="mb-0">UI/UX Designer</p>
                </a>
            </div>            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-network-wired text-primary mb-4"></i>
                    <h6 className="mb-3">Networking & Communications</h6>
                    <p className="mb-0">Network Architect</p>
                    <p className="mb-0">Network Engineer</p>
                    <p className="mb-0">Network Administrator</p>
                    <p className="mb-0">Wireless Network Specialist</p>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-database text-primary mb-4"></i>
                    <h6 className="mb-3">Database Management</h6>
                    <p className="mb-0">Database Administrator</p>
                    <p className="mb-0">Database Architect</p>
                    <p className="mb-0">Data Warehousing Specialist</p>
                    <p className="mb-0">Database Security Specialist</p>
                </a>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <a className="cat-item h-100 rounded p-4" href="">
                    <i className="fa fa-3x fa-cogs text-primary mb-4"></i>
                    <h6 className="mb-3">Digital Transformation & IT</h6>
                    <p className="mb-0">IT Project Manager</p>
                    <p className="mb-0">Digital Transformation Consultant</p>
                    <p className="mb-0">Business Analyst</p>
                    <p className="mb-0">IT Service Management Specialist</p>
                </a>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default Category;
