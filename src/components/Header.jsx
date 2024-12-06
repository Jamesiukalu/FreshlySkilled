import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";


import bogliasco from '../assets/img/hero1.jpg';
import countyClare from '../assets/img/hero2.jpg';
import craterRock from '../assets/img/hero3.jpg';
import giauPass from '../assets/img/hero4.jpg';
import { Link } from "react-router-dom";

// const imageUrls = {
//   bogliasco: 'https://storage.cloud.google.com/techtalize/img/hero1.jpg',
//   countyClare: 'https://storage.cloud.google.com/techtalize/img/hero2.jpg',
//   craterRock: 'https://storage.cloud.google.com/techtalize/img/hero3.jpg',
//   giauPass: 'https://storage.cloud.google.com/techtalize/img/hero4.jpg',
// };

// const bogliasco = "bogliasco";
// const countyClare = "countyClare";
// const craterRock = "craterRock";
// const giauPass = "giauPass";

export default function Header() {
    return (
        <HeroSlider
          height={"100vh"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide)
          }}
        >
          <Overlay>
            <Wrapper>
              <Title>Jumpstart Your Tech Career</Title>
              <Subtitle>
              Gain practical experience, valuable insights, and professional
              networking opportunities to propel your tech career forward.
              <br/>
              <Link to="/signup" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Start Your Career</Link>
              {/* <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</Link> */}
              </Subtitle>
            </Wrapper>
          </Overlay>
    
          <Slide
            shouldRenderMask
            label="Global Connectivity"
            background={{
              backgroundImageSrc: giauPass,
              backgroundAttachment: "fixed"
            }}
            />
    
          <Slide
            shouldRenderMask
            label="Strategic Partnerships"
            background={{
              backgroundImageSrc: bogliasco,
              backgroundAttachment: "fixed"
            }}
          />
    
          <Slide
            shouldRenderMask
            label="Innovative Excellence"
            background={{
              backgroundImageSrc: countyClare,
              backgroundAttachment: "fixed"
            }}
          />
    
          <Slide
            shouldRenderMask
            label="Personalized Learning"
            background={{
              backgroundImageSrc: craterRock,
              backgroundAttachment: "fixed"
            }}
          />
    
          <MenuNav />
        </HeroSlider>
  );
}
