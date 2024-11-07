import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const bogliasco = "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104315.jpg?t=st=1731000498~exp=1731004098~hmac=4b9d9b25395363181bce6ae3933fcf9678925d554356f0b404fe1e7e62ba9cd1&w=2000";
const countyClare = "https://img.freepik.com/free-photo/different-moments-theater-class_23-2151104277.jpg?t=st=1731000530~exp=1731004130~hmac=3e373fb1e4ae1a2a7bc5b996f6f79d52fbed2f8cc45030de55dcb1bec091ddeb&w=2000";
const craterRock = "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?t=st=1731000522~exp=1731004122~hmac=3546d11f4bfd9ce749d5e7082dcc030a6c3b43e876f88192d547e1f2b0bad515&w=2000";
const giauPass = "https://img.freepik.com/free-photo/close-up-keyboard-used-by-software-engineer-programming-home_482257-88598.jpg?t=st=1731000607~exp=1731004207~hmac=f24f0ffef99be4bf8bb4ce5b9517656b75f8d91a15d8fe599f117d23032993ee&w=2000";

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
