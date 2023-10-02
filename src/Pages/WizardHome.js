import Navbar from "../Components/Navbar";
import { useEffect, useState, useRef } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Components/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import DownloadIcon from "@mui/icons-material/Download";

gsap.registerPlugin(ScrollTrigger);
let ignore = false;

const WizardHome = () => {
  const aboutRef = useRef(null);
  const form = useRef(null);
  const [showMsg, setShowMsg] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o94x3nh",
        "template_2tsue06",
        form.current,
        "PLOVJS9y2_pnYPcHY"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const scrollTop = () => {
    const position = window.pageYOffset;
    const scrollTop = document.getElementById("scroll-up");
    if (position >= 560) scrollTop.classList.add("show-scroll");
    else scrollTop.classList.remove("show-scroll");
  };
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
    $(document).on("click", "#scroll-up", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
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
    window.addEventListener("scroll", scrollTop, { passive: true });

    return () => {
      ignore = true;
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <a className="scrollUp" id="scroll-up">
        <ArrowUpwardIcon sx={{ fontSize: 20 }} />
      </a>
      {/* <Snackbar
        open={showMsg}
        autoHideDuration={6000}
        onClose={() => setShowMsg(false)}
      >
        <Alert
          onClose={() => setShowMsg(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your message delivered successfully
        </Alert>
      </Snackbar> */}
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
      <div id="aboutContainer" className="aboutContainer" ref={aboutRef}>
        <h2>About Me</h2>
        <div className="aboutDetails">
          <img
            src="assets/img/wizard/photo.png"
            alt="wizardGirl"
            className="photo"
          />
          <p>
            I'm a Professional developer with hands-on web development
            background and significant React and Node-based project experience.
            Build several web applications from scratch following Agile
            methodology. Strong knowledge of NodeJS and Database management
            using MongoDB. love solving mathematical, logical, and real-world
            problems by automating repetitive tasks.
          </p>
          <a className="resume" href="assets/img/Tesla_Internship.pdf" download>
            Resume
            <DownloadIcon />
          </a>
        </div>
      </div>
      <div className="contactContainer">
        <div className="contactForm">
          <h2>SAY HELLO</h2>
          <form ref={form} onSubmit={sendEmail} className="form">
            <label for="name">Name</label>
            <input type="text" name="user_name" id="name" />
            <label for="email">email</label>
            <input type="email" name="user_email" id="email" />
            <label for="msg">Message</label>
            <textarea name="user_msg" id="msg" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WizardHome;
