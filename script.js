const home = document.getElementById("home");
const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const news = document.getElementById("news");
const contact = document.getElementById("contact");
const homeOption = document.getElementById("home-option");
const aboutOption = document.getElementById("about-option");
const portfolioOption = document.getElementById("portfolio-option");
const newsOption = document.getElementById("news-option");
const contactOption = document.getElementById("contact-option");
const homeButton = document.getElementById("Home-button");
const learnMoreBtn = document.getElementById("about-button");
const learnMore = document.getElementById("about-learn-more");
const arrows = document.querySelectorAll(".arrows img");
const textChangerFont = document.getElementById("main-font-content");

const newsMainContent = document.getElementById("news-main-content");
const headerFalto = document.getElementById("header-falto");
const headerMain = document.getElementById("header-main");
const closeBtnForLearnMoreAbout = document.querySelector(
  "#close-container-learn-more-about"
);
let menuIcon = document.querySelector(".menu-icon");
let listMenu = document.querySelector("#header-right-side-phone");

function closeMenu() {
  listMenu.style.display = "none";
}
menuIcon.addEventListener("click", function () {
  if (listMenu.style.display === "none" || listMenu.style.display === "") {
    listMenu.style.display = "block";
  } else {
    listMenu.style.display = "none";
  }
});
let navLinks = document.querySelectorAll("#header-right-side-phone a");
navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
homeOption.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "grid";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutOption.addEventListener("click", function () {
  about.style.display = "flex";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
portfolioOption.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "block";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsOption.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
contactOption.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "block";
  closeBtnForLearnMoreAbout.style.display = "none";
});
homeButton.addEventListener("click", function () {
  contact.style.display = "block";
  home.style.display = "none";
});
const learnMoreTwo = document.querySelector("#about-learn-more-container--");
learnMoreBtn.addEventListener("click", function () {
  learnMore.style.display = "flex";
  learnMoreTwo.style.display = "flex";
  about.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("main-font-content");
  const messages = ["Developer", "Freelancer", "Designer"];
  let currentIndex = 0;

  function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.textContent = messages[currentIndex];
      currentIndex = (currentIndex + 1) % messages.length;
      textElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeText, 1500);
});

closeBtnForLearnMoreAbout.addEventListener("click", function () {
  learnMore.style.display = "none";
  learnMoreTwo.style.display = "none";
  about.style.display = "flex";
  headerMain.style.display = "flex";
  closeBtnForLearnMoreAbout.style.display = "none";
});
// const newsSlideContentOneCloseIcon =
//     document.querySelector("#close-container-1"),
//   newsSlideContentTwoCloseIcon = document.querySelector("#close-container-2"),
//   newsSlideContentThreeCloseIcon = document.querySelector("#close-container-3");
// newsSlideContentOneCloseIcon.addEventListener("click", function () {
//   newsSlidesContentOne.style.display = "none";
//   newsMainContent.style.display = "grid";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "block";
//   contact.style.display = "none";
//   headerMain.style.display = "flex";
// });
// newsSlideContentTwoCloseIcon.addEventListener("click", function () {
//   newsSlidesContentTwo.style.display = "none";
//   newsMainContent.style.display = "grid";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "block";
//   contact.style.display = "none";
//   headerMain.style.display = "flex";
// });
// newsSlideContentThreeCloseIcon.addEventListener("click", function () {
//   newsSlidesContentThree.style.display = "none";
//   newsMainContent.style.display = "grid";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "block";
//   contact.style.display = "none";
//   headerMain.style.display = "flex";
// });
let firstProgressBar = document.querySelector(".first-language-percentage"),
  secondProgressBar = document.querySelector(".second-language-percentage"),
  thirdProgressBar = document.querySelector(".third-language-percentage");

let ProgressOneStartValue = 0,
  ProgressOneEndValue = 90,
  speedOne = 100;

let progressOne = setInterval(() => {
  ProgressOneStartValue++;
  firstProgressBar.style.background = `conic-gradient(#fe0000 ${
    ProgressOneStartValue * 3.6
  }deg, rgba(255, 255, 255, 0.2) 0deg)`;
  if (ProgressOneStartValue == ProgressOneEndValue) {
    clearInterval(progressOne);
  }
}, speedOne);

let ProgressTwoStartValue = 0,
  ProgressTwoEndValue = 60,
  speedTwo = 100;

let progressTwo = setInterval(() => {
  ProgressTwoStartValue++;
  secondProgressBar.style.background = `conic-gradient(#fe0000 ${
    ProgressTwoStartValue * 3.6
  }deg, rgba(255, 255, 255, 0.2) 0deg)`;
  if (ProgressTwoStartValue == ProgressTwoEndValue) {
    clearInterval(progressTwo);
  }
}, speedTwo);

let ProgressThirdStartValue = 0,
  ProgressThirdEndValue = 30,
  speedThird = 100;

let progressThird = setInterval(() => {
  ProgressThirdStartValue++;
  thirdProgressBar.style.background = `conic-gradient(#fe0000 ${
    ProgressThirdStartValue * 3.6
  }deg, rgba(255, 255, 255, 0.2) 0deg)`;
  if (ProgressThirdStartValue == ProgressThirdEndValue) {
    clearInterval(progressThird);
  }
}, speedThird);

// const newsSlidesContentTitleOne = document.querySelector("#news-slides-font-1"),
//   newsSlidesContentTitleTwo = document.querySelector("#news-slides-font-2"),
//   newsSlidesContentTitleThree = document.querySelector("#news-slides-font-3"),
//   newsSlidesContentTitleFour = document.querySelector("#news-slides-font-4"),
//   newsSlidesContentTitleFive = document.querySelector("#news-slides-font-5"),
//   newsSlidesContentTitleSix = document.querySelector("#news-slides-font-6"),
//   newsSlidesContentOne = document.querySelector("#slide-1-container"),
//   newsSlidesContentTwo = document.querySelector("#slide-2-container"),
//   newsSlidesContentThree = document.querySelector("#slide-3-container");

// newsSlidesContentTitleOne.addEventListener("click", function () {
//   newsSlidesContentOne.style.display = "block";
//   newsMainContent.style.display = "none";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "none";
//   contact.style.display = "none";
//   headerMain.style.display = "none";
//   closeBtnForLearnMoreAbout.style.display = "none";
// });
// newsSlidesContentTitleTwo.addEventListener("click", function () {
//   newsSlidesContentTwo.style.display = "block";
//   newsMainContent.style.display = "none";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "none";
//   contact.style.display = "none";
//   headerMain.style.display = "none";
//   closeBtnForLearnMoreAbout.style.display = "none";
// });
// newsSlidesContentTitleThree.addEventListener("click", function () {
//   newsSlidesContentThree.style.display = "block";
//   newsMainContent.style.display = "none";
//   about.style.display = "none";
//   home.style.display = "none";
//   portfolio.style.display = "none";
//   news.style.display = "none";
//   contact.style.display = "none";
//   headerMain.style.display = "none";
//   closeBtnForLearnMoreAbout.style.display = "none";
// });

const homeOptionPhone = document.querySelector("#home-option-phone"),
  aboutOptionPhone = document.querySelector("#about-option-phone"),
  portfolioOptionPhone = document.querySelector("#portfolio-option-phone"),
  newsOptionPhone = document.querySelector("#news-option-phone"),
  contactOptionPhone = document.querySelector("#contact-option-phone");

homeOptionPhone.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "flex";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutOptionPhone.addEventListener("click", function () {
  about.style.display = "block";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
portfolioOptionPhone.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "block";
  news.style.display = "none";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsOptionPhone.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
contactOptionPhone.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "block";
  closeBtnForLearnMoreAbout.style.display = "none";
});

const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".arrows img"),
  picturePercentge = document.querySelector("#portfolio-footer-percentge");
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 27;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});
const carousel2 = document.querySelector(".carousel-2"),
  firstImg2 = carousel2.querySelectorAll("img")[0],
  arrowIcons2 = document.querySelectorAll(".arrows-2 img");
arrowIcons2.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth2 = firstImg2.clientWidth + 15;
    carousel2.scrollLeft +=
      icon.id == "left-2" ? -firstImgWidth2 : firstImgWidth2;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textElementAbout = document.getElementById(
    "about-learn-more-font-content"
  );
  const messagesAbout = ["Developer", "Freelancer", "Designer"];
  let currentIndexAbout = 0;

  function changeText() {
    textElementAbout.style.opacity = 0;
    setTimeout(() => {
      textElementAbout.textContent = messagesAbout[currentIndexAbout];
      currentIndexAbout = (currentIndexAbout + 1) % messagesAbout.length;
      textElementAbout.style.opacity = 1;
    }, 500);
  }

  setInterval(changeText, 1500);
});
