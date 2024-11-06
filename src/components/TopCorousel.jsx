import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import carousel1 from "../assets/img/carousel-1.jpg";
import carousel2 from "../assets/img/carousel-2.jpg";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TopCorousel = () => {
    return (
        <>
            {/* Carousel Start */}
            <div className="container-fluid p-0">
                <OwlCarousel
                    className="header-carousel position-relative"
                    items={1}
                    smartSpeed={1500}
                    loop
                    autoplay
                    nav
                    dots={false}
                    navText={[
                        '<i class="bi bi-chevron-left owl-prev" aria-label="Previous"></i>',
                        '<i class="bi bi-chevron-right owl-next" aria-label="Next"></i>'
                    ]}
                    autoplayTimeout={3000} // Adjusts the time between transitions (in milliseconds)
                    autoplayHoverPause={true}
                    responsive={{
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        }
                    }}
                >
                    {/* Carousel Item 1 */}
                    <div className="owl-carousel-item position-relative">
                        <img
                            className="img-fluid"
                            src={carousel2}
                            alt="Tech Career Jumpstart"
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: 'rgba(43, 57, 64, 0.5)' }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Jumpstart Your Tech Career
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Gain practical experience, valuable insights, and professional
                                            networking opportunities to propel your tech career forward.
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Start Your Career
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Find A Talent
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Item 2 */}
                    <div className="owl-carousel-item position-relative">
                        <img
                            className="img-fluid"
                            src={carousel1}
                            alt="Tech Career Opportunities"
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: 'rgba(43, 57, 64, 0.5)' }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">
                                            Jumpstart Your Tech Career
                                        </h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">
                                            Gain practical experience, valuable insights, and professional
                                            networking opportunities to propel your tech career forward.
                                        </p>
                                        <a
                                            href=""
                                            className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Start Your Career
                                        </a>
                                        <a
                                            href=""
                                            className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Find A Talent
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/* Carousel End */}
        </>
    );
};

export default TopCorousel;
