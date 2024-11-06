import React, { useState , useEffect } from 'react';



const ITJobSearch = () => {
    const [category, setCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [courses, setCourses] = useState([]);
    const [isCourseDisabled, setIsCourseDisabled] = useState(true);

    const categoryOptions = {
        'Data Science': ['Data Scientist', 'Data Analyst', 'Business Intelligence Analyst', 'Machine Learning Engineer'],
        'Cybersecurity': ['Cybersecurity Specialist', 'Information Security Analyst', 'Penetration Tester', 'Security Consultant'],
        'AI-ML': ['AI/ML Engineer', 'AI Research Scientist', 'Computer Vision Engineer', 'NLP Specialist'],
        'Cloud Computing': ['Cloud Architect', 'Cloud Engineer', 'Cloud Security Specialist', 'DevOps Engineer'],
        'Web Development': ['Front-end Developer', 'Back-end Developer', 'Full Stack Developer', 'UI/UX Designer'],
        'Networking': ['Network Architect', 'Network Engineer', 'Network Administrator', 'Wireless Network Specialist'],
        'Database Management': ['Database Administrator', 'Database Architect', 'Data Warehousing Specialist', 'Database Security Specialist'],
        'Digital Transformation': ['IT Project Manager', 'Digital Transformation Consultant', 'Business Analyst', 'IT Service Management Specialist']
    };   
      
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);

        if (category) {
            setCourses(categoryOptions[category] || []);
            setIsCourseDisabled(false);
        } else {
            setCourses([]);
            setIsCourseDisabled(true);
        }
    };
    
      return (
        <>
            <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: '35px'}} >
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input type="text" className="form-control border-0" placeholder="Keyword (e.g., Java, Python, Developer)" />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0" id="category" value={category}  onChange={handleCategoryChange}>
                                        <option value="">Select IT Category</option>
                                        <option value="Data Science">Data Science & Analytics</option>
                                        <option value="Cybersecurity">Cybersecurity</option>
                                        <option value="AI-ML">Artificial Intelligence & Machine Learning</option>
                                        <option value="Cloud Computing">Cloud Computing</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Networking">Networking & Communications</option>
                                        <option value="Database Management">Database Management</option>
                                        <option value="Digital Transformation">Digital Transformation & IT</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                <select className="form-select border-0" id="course" disabled={isCourseDisabled}>
                                    <option value="">Select IT Course</option>
                                    {courses.map((course, index) => (
                                        <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100" id="search-btn">Search Open Roles</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ITJobSearch;
