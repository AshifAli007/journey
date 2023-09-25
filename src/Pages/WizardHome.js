import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let ignore = false;

const WizardHome = () => {
  const attachAnimations = () => {
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
        <h2 id="text">
          <span>It's time to enter</span>
          <br />
          Wizard Valley
        </h2>
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
        <a href="#" className="btn">
          Explore
        </a>

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
      <div className="sec">
        <div className="aboutContainer">
          <h2>About Me</h2>
          <div className="aboutDetails"></div>
        </div>
      </div>
    </div>
  );
};

export default WizardHome;
