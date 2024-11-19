import {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import AlumniSection from './pages/AlumniSection';
import Strategy from './pages/Strategy';
import Inclusion from './pages/Inclusion';
import Accessibility from './pages/Accessibility';
import JobDetail from './pages/JobDetail';
import JobList from './pages/JobList';
import JobCategories from './pages/JobCategories';
import TechStack from './pages/TechStack';
import TestimonialPage from './pages/TestimonialPage';
import Faq from './pages/Faq';
import Methodology from './pages/Methodology';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import Login from './pages/EmployeeLogin';
import Dashboard from './pages/Dashboard';

function App() {
  const [employee, setEmployee] = useState(null);

  return (      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/alumniSection" element={<AlumniSection />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/inclusion" element={<Inclusion />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/job-detail/:id" element={<JobDetail />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-categories" element={<JobCategories />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/testimonialPage" element={<TestimonialPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={setEmployee} />} />
        <Route
          path="/dashboard"
          element={
            localStorage.getItem('user') ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
