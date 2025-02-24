import { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blogs from '../data/blogData.jsx';

const BlogsPage = () => {
  const [loading, setLoading] = useState(true);

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
          <Hero 
            title="Blog Zone" 
          />

          <main className="container py-5">
            <div className="row">
            <div className="row">
              {blogs.map((blog, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 shadow-sm border-0 rounded">
                    <img src={blog.image} className="card-img-top" alt={blog.title} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.excerpt}</p>
                        <div className="mt-auto">
                          <a href={blog.link} className="btn btn-primary">
                            Read More
                          </a>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                      By {blog.author} on {blog.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </main>

          <Footer />

          <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      )}
    </>
  );
};

export default BlogsPage;