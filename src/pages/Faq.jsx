import { useState , useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Faq = () => {
    const [loading, setLoading] = useState(true);     
    // const breadcrumbs = [
    //   { name: 'Home', link: '/' },
    //   { name: '' },
    //   { name: 'Contact', active: true },
    // ];
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
          <Hero  title="Frequently Asked Questions (FAQ)"/>
          <div className="container-fluid py-5">
            <div className="container">
                <h3 className="mb-4">General</h3>
                <div className="mb-3">
                    <strong>1. What is Techtalize?</strong>
                    <p>Techtalize is a dynamic platform that connects emerging talent with real-world projects, providing hands-on experience in a collaborative environment.</p>
                </div>
                <div className="mb-3">
                    <strong>2. How does Techtalize differ from traditional bootcamps?</strong>
                    <p>Unlike traditional bootcamps that focus on theoretical learning, Techtalize emphasizes practical, project-based experience, allowing participants to apply their skills in real-world scenarios while working with industry professionals.</p>
                </div>
                <div className="mb-3">
                    <strong>3. Can I include my experience with Techtalize on my resume?</strong>
                    <p>Absolutely! The experience you gain at Techtalize is valuable and can enhance your resume, showcasing your practical skills to potential employers.</p>
                </div>
                <div className="mb-3">
                    <strong>4. What is the onboarding process like at Techtalize?</strong>
                    <p>Our onboarding process is designed to be smooth and comprehensive, ensuring you are equipped with the necessary tools and knowledge to succeed. You&apos;ll receive guidance from our team and access to resources to help you get started.</p>
                </div>
                <div className="mb-3">
                    <strong>5. Do I need prior experience to be accepted into Techtalize?</strong>
                    <p>No prior experience is necessary! We welcome individuals from various backgrounds and skill levels who are eager to learn and grow.</p>
                </div>
                <div className="mb-3">
                    <strong>6. What types of projects will I be working on?</strong>
                    <p>Participants will have the opportunity to work on diverse projects across different industries, gaining exposure to various technologies and methodologies.</p>
                </div>
                <div className="mb-3">
                    <strong>7. Will I be working for other companies?</strong>
                    <p>Yes, you will collaborate with other companies, gaining practical experience while contributing to real projects.</p>
                </div>
                <div className="mb-3">
                    <strong>8. Is this experience applicable only to permanent residents?</strong>
                    <p>No, our programs are open to individuals from various backgrounds, not limited to permanent residents.</p>
                </div>
                <div className="mb-3">
                    <strong>9. Do you offer a job guarantee?</strong>
                    <p>While we cannot guarantee job placement, we provide extensive support and resources to help you secure employment after completing our program.</p>
                </div>

                <h3 className="mb-4">Your Work and Responsibilities</h3>
                <div className="mb-3">
                    <strong>1. What does a typical day at Techtalize look like?</strong>
                    <p>A typical day involves collaborative work on projects, meetings with team members, and engaging in hands-on tasks that enhance your skills.</p>
                </div>
                <div className="mb-3">
                    <strong>2. What is expected of me during my time with Techtalize?</strong>
                    <p>We expect commitment, active participation, and a willingness to learn and collaborate with your peers.</p>
                </div>
                <div className="mb-3">
                    <strong>3. Is this a remote work opportunity?</strong>
                    <p>Yes, Techtalize offers flexible remote work options to accommodate different lifestyles and preferences.</p>
                </div>
                <div className="mb-3">
                    <strong>4. Will I receive a reference letter upon completion?</strong>
                    <p>Yes, participants will receive a reference letter detailing their contributions and skills developed during their time with Techtalize.</p>
                </div>

                <h3 className="mb-4">Technology</h3>
                <div className="mb-3">
                    <strong>1. What programming languages and tools will I be working with?</strong>
                    <p>You will work with a range of programming languages and tools tailored to the specific projects you are involved in, providing you with valuable experience.</p>
                </div>
                <div className="mb-3">
                    <strong>2. What tools will I use during my projects?</strong>
                    <p>Participants will have access to industry-standard tools and software, ensuring you are equipped with the right resources to succeed.</p>
                </div>
                <div className="mb-3">
                    <strong>3. What is your tech stack?</strong>
                    <p>Our tech stack varies by project but typically includes popular programming languages, frameworks, and tools widely used in the industry.</p>
                </div>
                <div className="mb-3">
                    <strong>4. Who will own the code I write?</strong>
                    <p>Code ownership depends on the project and partnership agreements, but you will typically retain rights to your contributions.</p>
                </div>
                <div className="mb-3">
                    <strong>5. Is the code open-sourced?</strong>
                    <p>This varies by project; some may be open-sourced while others may have restrictions based on client agreements.</p>
                </div>

                <h3 className="mb-4">Pricing</h3>
                <div className="mb-3">
                    <strong>1. Will there be any costs involved? If so, how much?</strong>
                    <p>Yes, there may be costs associated with certain programs. Please refer to our pricing page for detailed information.</p>
                </div>
                <div className="mb-3">
                    <strong>2. Is there a commitment required?</strong>
                    <p>Commitment details vary by program; please review specific requirements for the program you are interested in.</p>
                </div>
                <div className="mb-3">
                    <strong>3. Still have questions?</strong>
                    <p>For any further inquiries, please visit our <Link to="/contact">Contact Us</Link> page.</p>
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

export default Faq;
