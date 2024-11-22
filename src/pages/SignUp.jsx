import { useState , useEffect } from 'react';
import image from "../assets/img/login.jpg";
import { BounceLoader } from 'react-spinners';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: {
      title: '',
      first: '',
      last: '',
    },
    email: '',
    password: '',
    confirmPassword: '', // Add this field
    phone: '',
    location: {
      city: '',
      state: '',
    },
    picture: {
      large: '',
    },
    role: '',
    dateOfEmployment: '',
  });
  
  
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);  
    const [showTalentForm, setShowTalentForm] = useState(false);
    const [showPartnerForm, setShowPartnerForm] = useState(false);
  
    const handleTalentClick = () => {
      setShowTalentForm(true);
      setShowPartnerForm(false);
    };
  
    const handlePartnerClick = () => {
      setShowTalentForm(false);
      setShowPartnerForm(true);
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
    
      // For nested fields
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setFormData((prev) => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value,
          },
        }));
      } else {
        // For top-level fields
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };    
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        picture: {
          ...prev.picture,
          large: file,
        },
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        
        // Create FormData object
        const formData = new FormData();
        formData.append('name.title', formData.name.title);
        formData.append('name.first', formData.name.first);
        formData.append('name.last', formData.name.last);
        formData.append('email', formData.email);
        formData.append('password', formData.password);
        formData.append('phone', formData.phone);
        formData.append('location.city', formData.location.city);
        formData.append('location.state', formData.location.state);
        formData.append('role', formData.role);
        formData.append('dateOfEmployment', formData.dateOfEmployment);
        
        // Append file (make sure it's the correct input name)
        if (formData.picture.large) {
          formData.append('picture', formData.picture.large);
        }
        const response = await axios.post('http://18.234.215.162:5000/api/users/register', formData, {
          // const response = await axios.post('http://localhost:5000/api/users/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    
        setLoading(false);
        setSuccess(response.data.message);
        setError("");
        navigate("/login"); // Redirect to login page after successful registration
      } catch (error) {
        setLoading(false);
        setError(error.response?.data?.message || "Failed to register. Please try again.");
        setSuccess("");
      }
    };
    
    return (
        <>
        <div className="container-fluid bg-white p-0">        

          <Navbar />
          <Hero  title="Get Started with Techtalize"/>
          <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row mb-4">
              <div className="col text-center">
                  <Link to="/login">
                      <button className="btn btn-secondary">Already onboarded? Sign In</button>
                  </Link>
              </div>
          </div>
        <div className="row justify-content-center">
        <div className="col-xl-10">
        <div className="card border-0">
        <div className="card-body p-0">
          <div className="row no-gutters">
            <div className="col-lg-6">
              {!showTalentForm && !showPartnerForm ? (
                <div id="image-form" className="bg-light rounded p-4">
                  <h6 className="mb-4">Select the type of account you&apos;d like to create:</h6>
                  <div className="d-flex justify-content-around mb-4">
                    <button className="btn btn-primary" onClick={handleTalentClick}>Join as a Talent</button>
                    <button className="btn btn-outline-primary" onClick={handlePartnerClick}>Join as a Partner/Company</button>
                  </div>
                </div>
              ) : showTalentForm ? (
                <div id="dynamic-form" className="p-4">
                  <h3 className="mb-4">Create a Talent Account</h3>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label htmlFor="title">Title</label>
                          <input
                            type="text"
                            name="name.title"
                            id="title"
                            className="form-control"
                            value={formData.name.title}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="first">First Name</label>
                          <input
                            type="text"
                            name="name.first"
                            id="first"
                            className="form-control"
                            value={formData.name.first}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last">Last name</label>
                        <input
                            type="text"
                            name="name.last"
                            id="last"
                            className="form-control"
                            value={formData.name.last}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          name="location.city"
                          id="city"
                          className="form-control"
                          value={formData.location.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">State</label>
                        <input
                          type="text"
                          name="location.state"
                          id="state"
                          className="form-control"
                          value={formData.location.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file" className="form-label">Upload Image</label>
                        <input
                          type="file"
                          name="picture.large"
                          id="image"
                          className="form-control"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="role">Role</label>
                          <input
                            type="text"
                            name="role"
                            id="role"
                            className="form-control"
                            value={formData.role}
                            onChange={handleChange}
                            required
                          />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dateOfEmployment">Date of Employment</label>
                          <input
                            type="text"
                            name="dateOfEmployment"
                            id="dateOfEmployment"
                            className="form-control mb-3"
                            value={formData.dateOfEmployment}
                            onChange={handleChange}
                            required
                          />
                      </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    <button type="submit" className="btn btn-primary">
                     {!loading ? <BounceLoader size={20} color={"#fff"} /> : "Sign Up"}
                    </button>
                  </form>

                </div>
              ) : (
                <div id="partner-form" className="p-4">
                  <h3 className="mb-4">Create a Partner/Company Account</h3>
                  <form>
                    <div className="form-group mb-3">
                      <label htmlFor="business-name" className="form-label">Company/Business Name</label>
                      <input type="text" className="form-control" id="business-name" required />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="contact-info" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="contact-info" required />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="project-type" className="form-label">Project Type</label>
                      <input type="text" className="form-control" id="project-type" placeholder="e.g., Web Development" required />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="project-desc" className="form-label">Project Description</label>
                      <textarea className="form-control" id="project-desc" placeholder="project Description" required ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Request Quote</button>
                  </form>
                </div>
              )}
            </div>
            
            <div className="col-lg-6 d-none d-lg-inline-block">
              <img src={image} alt="" className="img-fluid mx-auto d-block" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>

        <Footer />

       </div>
        </>
    );
};

export default SignUp;