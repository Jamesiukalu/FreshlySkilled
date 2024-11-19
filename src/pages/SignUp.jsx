// import { useState , useEffect } from 'react';
// import image from "../assets/img/login.jpg";
// import { BounceLoader } from 'react-spinners';
// import WOW from 'wow.js';
// import $ from 'jquery';
// import Hero from '../components/Hero';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     gender: "",
//     title: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     streetNumber: "",
//     streetName: "",
//     city: "",
//     country: "",
//     dob: "",
//     role: "",
//     dateOfEmployment: "",
//   });
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");
//     const navigate = useNavigate();

//     const [loading, setLoading] = useState(true);  
//     const [showTalentForm, setShowTalentForm] = useState(false);
//     const [showPartnerForm, setShowPartnerForm] = useState(false);
  
//     const handleTalentClick = () => {
//       setShowTalentForm(true);
//       setShowPartnerForm(false);
//     };
  
//     const handlePartnerClick = () => {
//       setShowTalentForm(false);
//       setShowPartnerForm(true);
//     };
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const response = await axios.post("http://localhost:5000/register", formData);
//         setSuccess(response.data.message);
//         setError("");
//         navigate("/login"); // Redirect to login page after successful registration
//       } catch (error) {
//         setError(error.response?.data?.error || "Failed to register. Please try again.");
//         setSuccess("");
//       }
//     };
//     return (
//         <>
//         <div className="container-fluid bg-white p-0">        

//           <Navbar />
//           <Hero  title="Get Started with Techtalize"/>
//           <div className="container-fluid py-4 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container">
//           <div className="row mb-4">
//               <div className="col text-center">
//                   <Link to="/login">
//                       <button className="btn btn-secondary">Already onboarded? Sign In</button>
//                   </Link>
//               </div>
//           </div>
//         <div className="row justify-content-center">
//         <div className="col-xl-10">
//         <div className="card border-0">
//         <div className="card-body p-0">
//           <div className="row no-gutters">
//             <div className="col-lg-6">
//               {!showTalentForm && !showPartnerForm ? (
//                 <div id="image-form" className="bg-light rounded p-4">
//                   <h6 className="mb-4">Select the type of account you&apos;d like to create:</h6>
//                   <div className="d-flex justify-content-around mb-4">
//                     <button className="btn btn-primary" onClick={handleTalentClick}>Join as a Talent</button>
//                     <button className="btn btn-outline-primary" onClick={handlePartnerClick}>Join as a Partner/Company</button>
//                   </div>
//                 </div>
//               ) : showTalentForm ? (
//                 <div id="dynamic-form" className="p-4">
//                   <h3 className="mb-4">Create a Talent Account</h3>
//                   <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label>Gender</label>
//                       <select name="gender" className="form-control" onChange={handleChange} required>
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                       </select>
//                     </div>
//                     <div className="form-group">
//                       <label>Title</label>
//                       <input type="text" name="title" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>First Name</label>
//                       <input type="text" name="firstName" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Last Name</label>
//                       <input type="text" name="lastName" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Email</label>
//                       <input type="email" name="email" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Phone Number</label>
//                       <input type="text" name="phoneNumber" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" name="password" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Street Number</label>
//                       <input type="text" name="streetNumber" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Street Name</label>
//                       <input type="text" name="streetName" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>City</label>
//                       <input type="text" name="city" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Country</label>
//                       <input type="text" name="country" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Date of Birth</label>
//                       <input type="date" name="dob" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="file" className="form-label">Upload Resume</label>
//                       <input type="file" className="form-control" id="file" required />
//                     </div>
//                     <div className="form-group">
//                       <label>Role</label>
//                       <input type="text" name="role" className="form-control" onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                       <label>Date of Employment</label>
//                       <input type="date" name="dateOfEmployment" className="form-control" onChange={handleChange} required />
//                     </div>
//                     {error && <div className="alert alert-danger">{error}</div>}
//                     {success && <div className="alert alert-success">{success}</div>}
//                     <button type="submit" className="btn btn-primary">Register</button>
//                   </form>

//                 </div>
//               ) : (
//                 <div id="partner-form" className="p-4">
//                   <h3 className="mb-4">Create a Partner/Company Account</h3>
//                   <form>
//                     <div className="form-group mb-3">
//                       <label htmlFor="business-name" className="form-label">Company/Business Name</label>
//                       <input type="text" className="form-control" id="business-name" required />
//                     </div>
//                     <div className="form-group mb-3">
//                       <label htmlFor="contact-info" className="form-label">Email Address</label>
//                       <input type="email" className="form-control" id="contact-info" required />
//                     </div>
//                     <div className="form-group mb-3">
//                       <label htmlFor="project-type" className="form-label">Project Type</label>
//                       <input type="text" className="form-control" id="project-type" placeholder="e.g., Web Development" required />
//                     </div>
//                     <div className="form-group mb-3">
//                       <label htmlFor="project-desc" className="form-label">Project Description</label>
//                       <textarea className="form-control" id="project-desc" placeholder="project Description" required ></textarea>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Request Quote</button>
//                   </form>
//                 </div>
//               )}
//             </div>
            
//             <div className="col-lg-6 d-none d-lg-inline-block">
//               <img src={image} alt="" className="img-fluid mx-auto d-block" style={{ width: '100%' }} />
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>

//         <Footer />

//        </div>
//         </>
//     );
// };

// export default SignUp;
import { useState, useEffect } from 'react';
import image from "../assets/img/login.jpg";
import { BounceLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/signup', formData);
      setLoading(false);
      console.log(response.data);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <>
      <Navbar />
      <Hero title="Create a New Account" />
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h4 className="h5 mb-0">Sign Up</h4>
                      <p className="text-muted mt-2 mb-5">Create your new account</p>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
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
                        <div className="form-group mb-5">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">
                          {loading ? <BounceLoader size={20} color={"#fff"} /> : "Sign Up"}
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <img src={image} alt="" className="img-fluid mx-auto d-block" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted text-center mt-3 mb-0">Already have an account? <a href="/login" className="text-primary ml-1">Login</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
