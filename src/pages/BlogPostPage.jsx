import React, { useState, useEffect } from 'react';
import { BounceLoader } from 'react-spinners';
import WOW from 'wow.js';
import $ from 'jquery';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogData.jsx';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BlogPostPage() {
  const { slug } = useParams();
  const blog = blogs.find((blog) => blog.slug === slug);

    const breadcrumbs = [
        { name: 'Blogs', link: '/blogs' },
        // { name: 'About' },
        { name: blog.title, active: true },
      ];
    
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

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container-fluid bg-white p-0">
        <Navbar />
        <Hero title="Techtalize Board" breadcrumbs={breadcrumbs} />
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {blog.content}
        </div>
        <Footer />

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
        </a>
    </div>
  );
}

export default BlogPostPage;