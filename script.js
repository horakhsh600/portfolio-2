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
const newsSlideTextOne = document.getElementById("news-slides-font");
const newsSlideContentOne = document.getElementById("slide-1-container");
const newsSlideContentOneCloseIcon = document.getElementById("close-container");
const newsMainContent = document.getElementById("news-main-content");
const headerFalto = document.getElementById("header-falto");
const headerMain = document.getElementById("header-main");
const closeBtnForLearnMoreAbout = document.querySelector(
  "#close-container-learn-more-about"
);
homeOption.addEventListener("click", function () {
  about.style.display = "none";
  home.style.display = "block";
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

learnMoreBtn.addEventListener("click", function () {
  learnMore.style.display = "flex";
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
newsSlideTextOne.addEventListener("click", function () {
  newsSlideContentOne.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlideContentOneCloseIcon.addEventListener("click", function () {
  newsSlideContentOne.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
closeBtnForLearnMoreAbout.addEventListener("click", function () {
  learnMore.style.display = "none";
  about.style.display = "flex";
  headerMain.style.display = "flex";
});

let firstProgressBar = document.querySelector(".first-language-percentage");
let secondProgressBar = document.querySelector(".second-language-percentage");
let thirdProgressBar = document.querySelector(".third-language-percentage");

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
