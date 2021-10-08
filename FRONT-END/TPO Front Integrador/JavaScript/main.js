/* MENU SHOW Y HIDDEN */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* validate if constant exist */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* DARK LUGHT THEME */

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-son";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  //call the function to set night mode
  initMap();
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.62137250491205, lng: -58.37137936816418 },
    zoom: 15,
    mapTypeControl: false,
  });
  //if the class name is dark-theme set the styles in night
  if (document.body.className === "dark-theme") {
    map.setOptions({ styles: styles.night });
  }
}
// Styles a map in night mode and light.
const styles = {
  default: [],
  night: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ],
};

/* SCROLL DOWN  */
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
/* window.onscroll = function () {
  myFunction();
};


const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
 */
/* SmoothScroll */

/* function smoothScroll(target, duration) {
  var target= document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
  function animation(currentTime) {
    if (startTime == null) startTime = currentTime;
    console.log(startTime);
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
} */
var bajar_medio = document.querySelector(".section1");
var bajar_final = document.querySelector(".section-2");
var subir_principio = document.querySelector(".section-1");
var subir_principio2 = document.querySelector(".section-up");

bajar_medio.addEventListener("click", function () {
  console.log("click");
  ticking = true;
  if (currentSlideNumber !== totalSlideNumber - 1) {
    currentSlideNumber++;
    nextItem();
  }
  slideDurationTimeout(slideDurationSetting);
  if (currentSlideNumber === 0) {
    header.classList.add("absolute");
    navbar.classList.remove("nav-top");
  } else {
    header.classList.remove("absolute");
    navbar.classList.add("nav-top");
  }
});

bajar_final.addEventListener("click", function () {
  console.log("click-1");
  ticking = true;
  if (currentSlideNumber !== totalSlideNumber - 1) {
    currentSlideNumber++;
    nextItem();
  }
  slideDurationTimeout(slideDurationSetting);
  if (currentSlideNumber === 0) {
    header.classList.add("absolute");
    navbar.classList.remove("nav-top");
  } else {
    header.classList.remove("absolute");
    navbar.classList.add("nav-top");
  }
});

subir_principio.addEventListener("click", function () {
  console.log("subo");
  ticking = true;
  if (currentSlideNumber !== 0) {
    currentSlideNumber--;
  }
  previousItem();
  slideDurationTimeout(slideDurationSetting);
  previousItem();
  if (currentSlideNumber === 0) {
    header.classList.add("absolute");
    navbar.classList.remove("nav-top");
  } else {
    header.classList.remove("absolute");
    navbar.classList.add("nav-top");
  }
});
subir_principio2.addEventListener("click", function () {
  console.log("subo");
  ticking = true;
  if (currentSlideNumber !== 0) {
    currentSlideNumber--;
  }
  previousItem();
  slideDurationTimeout(slideDurationSetting);
  previousItem();
  if (currentSlideNumber === 0) {
    header.classList.add("absolute");
    navbar.classList.remove("nav-top");
  } else {
    header.classList.remove("absolute");
    navbar.classList.add("nav-top");
  }
});
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

let ticking = false;
const isFirefox = /Firefox/i.test(navigator.userAgent);
const isIe =
  /MSIE/i.test(navigator.userAgent) ||
  /Trident.*rv\:11\./i.test(navigator.userAgent);
const scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
const slideDurationSetting = 600; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
const totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * -120;
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
    console.log(currentSlideNumber);
    if (currentSlideNumber === 0) {
      header.classList.add("absolute");
      navbar.classList.remove("nav-top");
    } else {
      header.classList.remove("absolute");
      navbar.classList.add("nav-top");
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function () {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  const $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  const $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
