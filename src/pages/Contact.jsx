import { useState, useEffect, useRef } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [loading, setLoading] = useState(true);   
    const formRef = useRef(null); // Using ref for the form

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); // After 1 second, hide the spinner
    }, []);

    useEffect(() => {
        if (!loading) {
            const form = formRef.current;

            if (form) {
                const handleSubmit = async (event) => {
                    event.preventDefault();

                    const formData = new FormData(form);
                    const loading = form.querySelector('.loading');
                    const sentMessage = form.querySelector('.sent-message');
                    const errorMessage = form.querySelector('.error-message');

                    loading.style.display = 'block';
                    sentMessage.style.display = 'none';
                    errorMessage.style.display = 'none';

                    try {
                        const response = await fetch(form.action, {
                            method: form.method,
                            body: formData,
                            headers: {
                                'Accept': 'application/json',
                            },
                        });

                        loading.style.display = 'none';

                        if (response.ok) {
                            sentMessage.style.display = 'block';
                            form.reset();
                        } else {
                            const data = await response.json();
                            if (data.errors) {
                                errorMessage.textContent = data.errors.map(error => error.message).join(', ');
                                errorMessage.style.display = 'block';
                            } else {
                                errorMessage.textContent = 'An error occurred while sending your message. Please try again later.';
                                errorMessage.style.display = 'block';
                            }
                        }
                    } catch (error) {
                        loading.style.display = 'none';
                        errorMessage.textContent = 'An error occurred while sending your message. Please try again later.';
                        errorMessage.style.display = 'block';
                    }
                };

                form.addEventListener('submit', handleSubmit);

                return () => {
                    form.removeEventListener('submit', handleSubmit);
                };
            }
        }
    }, [loading]);

    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();

        // Sticky Navbar and Back-to-top Button
        const handleScroll = () => {
            if (window.scrollY > 300) {
                $('.sticky-top').css('top', '0px');
            } else {
                $('.sticky-top').css('top', '-100px');
            }

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
                    <Hero title="Contact Us" />
                    <div className="container-fluid py-5">
                        <div className="container">
                            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="row gy-4">
                                        <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                                            <div className="d-flex align-items-center bg-light rounded p-4">
                                                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-map-marker-alt text-primary"></i>
                                                </div>
                                                <span>123 Street, ON, CA</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                                            <div className="d-flex align-items-center bg-light rounded p-4">
                                                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-envelope-open text-primary"></i>
                                                </div>
                                                <span>support@Techtalize.com</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                                            <div className="d-flex align-items-center bg-light rounded p-4">
                                                <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                                                    <i className="fa fa-phone-alt text-primary"></i>
                                                </div>
                                                <span>+012 345 6789</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <iframe
                                        className="position-relative rounded w-100 h-100"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=toronto%20canada+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        frameBorder="0"
                                        style={{ minHeight: '400px', border: '0' }}
                                        allowFullScreen
                                        aria-hidden="false"
                                        tabIndex="0"
                                    ></iframe>
                                </div>
                                <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">Reach out to us with your questions about getting the right experience the best way to take your Career to the next level!</p>
                                <form
                                    ref={formRef}
                                    id="contact-form"
                                    action="https://formsubmit.co/jamesiukalu@gmail.com"
                                    method="POST"
                                    className="php-email-form"
                                >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" name="message" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        {/* Feedback Messages */}
                                        <div className="mb-3">
                                            <div className="loading" style={{ display: 'none' }}>Loading...</div>
                                            <div className="error-message" style={{ display: 'none', color: 'red' }}></div>
                                            <div className="sent-message" style={{ display: 'none', color: 'green' }}>Your message has been sent. Thank you!</div>
                                        </div>
                                        {/* Hidden Captcha */}
                                        <input type="hidden" name="_captcha" value="false" />
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                        <i className="bi bi-arrow-up"></i>
                    </a>
                </div>
            )}
        </>
    );
};

export default Contact;
