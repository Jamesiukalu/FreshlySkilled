/* eslint-disable react/no-unknown-property */
import { useState , useEffect } from 'react';
import logo from "../assets/img/logo.png";
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import ToggleLike from '../components/ToggleLike';
import { Link } from "react-router-dom";

import jobData from "../data/jobs.json"; 

const Jobs = () => {
    const [selectedTab, setSelectedTab] = useState('featured');
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // Simulating fetching jobs data
        setJobs(jobData);
    }, []);

    const filterJobsByCategory = (category) => {
        return jobs.filter(job => job.category === category);
    };

    const renderJobs = (category) => {
        const filteredJobs = filterJobsByCategory(category);
        return filteredJobs.map(job => (
            <div key={job.id} className="job-item p-4 mb-4">
                <div className="row g-4">
                <div className="col-12 col-md-8 d-flex align-items-center">
                    <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src={logo}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                    />
                    <div className="text-start ps-4">
                    <h5 className="mb-3">{job.title}</h5>
                    <span className="text-truncate me-3">
                        <i className="fa fa-map-marker-alt text-primary me-2"></i>
                        {job.location}
                    </span>
                    <span className="text-truncate me-3">
                        <i className="far fa-clock text-primary me-2"></i>
                        {job.type}
                    </span>
                    <span className="text-truncate me-0">
                        <i className="far fa-money-bill-alt text-primary me-2"></i>
                        {job.salary}
                    </span>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                    <div className="d-flex mb-3">
                    <ToggleLike />
                    <Link className="btn btn-primary" to={`/job-detail/${job.id}`}>
                        Apply Now
                    </Link>
                    </div>
                    <small className="text-truncate">
                    <i className="far fa-calendar-alt text-primary me-2"></i>
                    Deadline: {job.deadline}
                    </small>
                </div>
                </div>
            </div>
        ));
    };

    return (
        <>
          <div className="container-fluid py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                    <li className="nav-item">
                        <a
                            className={`d-flex align-items-center text-start mx-3 ms-0 p-3 text-decoration-none ${selectedTab === 'featured' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('featured')}
                        >
                            <h6 className="mt-n1 mb-0">Featured</h6>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`d-flex align-items-center text-start mx-3 ms-0 p-3 text-decoration-none ${selectedTab === 'full-time' ? 'active' : ''}`}
                                onClick={() => setSelectedTab('full-time')}
                            >
                                <h6 className="mt-n1 mb-0">Full Time</h6>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`d-flex align-items-center text-start mx-3 ms-0 p-3 text-decoration-none ${selectedTab === 'part-time' ? 'active' : ''}`}
                                onClick={() => setSelectedTab('part-time')}
                            >
                                <h6 className="mt-n1 mb-0">Part Time</h6>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane fade show ${selectedTab ? 'active' : ''}`}>
                            {renderJobs(selectedTab)}
                        </div>
                    </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Jobs;
