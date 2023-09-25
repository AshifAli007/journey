import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  // console.log(e);

  let value = window.scrollY;
  // console.log(value, 'value');

  // console.log($("#clouds").css("left"));

  // $("#clouds").css("left", 189 + value * -2 + "px");
  // $("#bird1").css("left", 355 + value * -1.0 + "px");

  // 50 + value * 3.5 < 900 && $('#bird2').css('top', 50 + value * 3.5 + 'px');
  // $('#bird2').css('right', 355 + value * -1.5 + 'px');

  // $('#rocks').css('top', value * -0.3 + 'px');

  // $('#forest').css('top', value * -0.6 + 'px');

  // $('#text').css('bottom', 290 + value * 2.5 + 'px');
  // $('.btn').css('bottom', 384 + value * -0.5 + 'px');
});
