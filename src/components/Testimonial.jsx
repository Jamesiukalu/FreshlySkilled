import React from 'react';

import testimonial1 from '../assets/img/testimonial-1.jpg' ;
import testimonial2 from '../assets/img/testimonial-2.jpg' ;
import testimonial3 from '../assets/img/testimonial-3.jpg' ;
import testimonial4 from '../assets/img/testimonial-4.jpg' ;
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Testimonial = () => {
 
    const testimonials = [
        {
          image: testimonial1,
          name: 'Emily Chen',
          title: 'Software Developer',
          testimonial: '"I gained invaluable experience working on real-world projects with cutting-edge technologies."'
        },
        {
          image: testimonial2,
          name: 'Rohan Patel',
          title: 'Data Scientist',
          testimonial: '"The mentorship program helped me land my dream job as a Data Scientist at Microsoft."'
        },
        {
          image: testimonial3,
          name: 'Sophia Lee',
          title: 'Front-end Developer at Amazon',
          testimonial: '"The collaborative environment and feedback from peers greatly improved my coding skills."'
        },
        {
          image: testimonial4,
          name: 'David Kim',
          title: 'DevOps Engineer',
          testimonial: '"The training programs and resources provided were instrumental in my career growth."'
        }
      ];
      

      return (
        <>
    {/* <!-- Testimonial Start --> */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <h1 className="text-center mb-5">Testimonials & References</h1>
        <OwlCarousel 
          className="testimonial-carousel" 
          loop 
          items={3} 
          autoplay 
          margin={24}
          autoplayTimeout={3000} // Time between transitions in milliseconds
          autoplayHoverPause={true} // Pause autoplay on hover
          center={false}
          smartSpeed={1000}
          dots={true}
    
          responsive={{
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-item bg-light rounded p-4" 
              key={index}
            >
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>{testimonial.testimonial}</p>
              <div className="d-flex align-items-center">
                <img 
                  className="img-fluid flex-shrink-0 rounded" 
                  src={testimonial.image} 
                  style={{width: '50px', height: '50px'}} 
                  alt={`Testimonial ${index + 1}`}
                />
                <div className="ps-3">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small>{testimonial.title}</small>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
    {/* <!-- Testimonial End --> */}
        </>
    );
};

export default Testimonial;
