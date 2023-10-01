import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);
let ignore = false;

const WizardHome = () => {
  const attachAnimations = () => {
    $(document).on("click", "#toAboutContainer", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        5000
      );
    });
    const time = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: ".wizard",
        start: "top top",
        end: "top -500%",
        scrub: true,
        // markers: true,
        pin: ".wizard",
        pinSpacing: true,
        pinnedContainer: ".wizard",
      },
    });
    time
      .to("#clouds", { left: "80%" })
      .to("#toAboutContainer", { zIndex: "0" }, 0)
      .to("#text", { bottom: "5%" }, 0)
      .to("#text1", { bottom: "50%", zIndex: 10 }, 0.2)
      .to("#backgroundRocks", { top: "10%" }, 0.1)
      .to("#backRocks", { top: "1%" }, 0.1);
    // gsap.to("#clouds", {
    //   left: "50%",
    //   scrollTrigger: {
    //     trigger: ".wizard",
    //     start: "top top",
    //     end: "top -30%",
    //     scrub: true,
    //     markers: true,
    //     pin: ".wizard",
    //     pinSpacing: true,
    //     pinnedContainer: ".wizard",
    //   },
    // });
    // gsap.to("#backgroundRocks", {
    //   top: "30%",
    //   scrollTrigger: {
    //     trigger: ".wizard",
    //     start: "top top",
    //     end: "top -30%",
    //     scrub: true,
    //     markers: true,
    //     pin: ".wizard",
    //     pinSpacing: true,
    //     pinnedContainer: ".wizard",
    //   },
    // });
  };

  useEffect(() => {
    if (!ignore) attachAnimations();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div>
      <Navbar />
      <section className="wizard trigger">
        <h2 id="text">Wizard Valley</h2>
        <a
          id="toAboutContainer"
          href="#aboutContainer"
          data-scroll-time="20"
          className="btn"
        >
          Explore
        </a>
        <span id="text1">I animate things</span>
        {/* <img alt="bird1" src="assets/img/bird1.png" id="bird1" />
        <img alt="bird2" src="assets/img/bird2.png" id="bird2" /> */}
        {/* <img
          className="background"
          alt="sky"
          src="assets/img/wizard/sky.png"
          id="sky"
        /> */}
        {/* <img
          className="background"
          alt="stars"
          src="assets/img/wizard/stars.png"
          id="stars"
        /> */}
        <img
          alt="magicBroom"
          src="assets/img/wizard/magicBroom.png"
          id="magicBroom"
        />
        {/* <img alt="moons" src="assets/img/wizard/moons.png" id="moons" /> */}
        <img
          alt="floatingRocksLeft"
          src="assets/img/wizard/floatingRocksLeft.png"
          id="floatingRocksLeft"
        />
        <img
          alt="floatingRocksRight"
          src="assets/img/wizard/floatingRocksRight.png"
          id="floatingRocksRight"
        />

        <img
          className="background"
          alt="backgroundRocks"
          src="assets/img/wizard/backgroundRocks.png"
          id="backgroundRocks"
        />
        <img
          className="background clouds"
          alt="clouds"
          src="assets/img/wizard/clouds.png"
          id="clouds"
        />
        <img
          className="background"
          alt="backRocks"
          src="assets/img/wizard/backRocks.png"
          id="backRocks"
        />
        <img
          className="background"
          alt="bottomRocks"
          src="assets/img/wizard/bottomRocks.png"
          id="bottomRocks"
        />
        <img
          alt="wizardGirl"
          src="assets/img/wizard/wizardGirl.png"
          id="wizardGirl"
        />
      </section>
      <div id="aboutContainer" className="aboutContainer">
        <h2>About Me</h2>
        <div className="aboutDetails">
          <img
            src="assets/img/wizard/photo.jpeg"
            alt="wizardGirl"
            className="photo"
          />
          <p>
            Mohd Ashif is a Speaker, VP of Developer Experience at Netlify, Vue
            core team member, and Staff Writer at CSS-Tricks. Sarah is formerly
            Principal Lead of Emerging Markets, Cloud Advocates at Microsoft and
            Manager of UX & Engineering at Trulia/Zillow Group. She’s the author
            of SVG Animations from O’Reilly and has given Frontend Masters
            workshops. Sarah is a co-organizer of ConcatenateConf, a free
            conference for Nigerian and Kenyan developers. Sarah is also the
            co-founder of Web Animation Workshops with Val Head. She has worked
            for 15 years as a web developer, and at points worked as a
            Scientific Illustrator and a Professor in the Greek Islands.
          </p>
        </div>
      </div>
      <div className="contactContainer">
        <div className="contactForm">
          <h2>SAY HELLO</h2>
          <form action="" className="form">
            <label for="name">Name</label>
            <input type="text" id="name" />
            <label for="email">email</label>
            <input type="email" id="email" />
            <label for="msg">Message</label>
            <textarea name="" id="msg" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WizardHome;
