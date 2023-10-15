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

const newsMainContent = document.getElementById("wrapper-2");
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
  home.style.display = "flex";
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
const newsSlideContentOneCloseIcon =
    document.querySelector("#close-container-1"),
  newsSlideContentTwoCloseIcon = document.querySelector("#close-container-2"),
  newsSlideContentThreeCloseIcon = document.querySelector("#close-container-3"),
  newsSlideContentFourCloseIcon = document.querySelector("#close-container-4"),
  newsSlideContentFiveCloseIcon = document.querySelector("#close-container-5"),
  newsSlideContentSixCloseIcon = document.querySelector("#close-container-6");

newsSlideContentOneCloseIcon.addEventListener("click", function () {
  newsSlidesContentOne.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
newsSlideContentTwoCloseIcon.addEventListener("click", function () {
  newsSlidesContentTwo.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
newsSlideContentThreeCloseIcon.addEventListener("click", function () {
  newsSlidesContentThree.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
newsSlideContentFourCloseIcon.addEventListener("click", function () {
  newsSlidesContentFour.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
newsSlideContentFiveCloseIcon.addEventListener("click", function () {
  newsSlidesContentFive.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
newsSlideContentSixCloseIcon.addEventListener("click", function () {
  newsSlidesContentSix.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
});
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

const newsSlidesContentTitleOne = document.querySelector("#news-slides-font-1"),
  newsSlidesContentTitleTwo = document.querySelector("#news-slides-font-2"),
  newsSlidesContentTitleThree = document.querySelector("#news-slides-font-3"),
  newsSlidesContentTitleFour = document.querySelector("#news-slides-font-4"),
  newsSlidesContentTitleFive = document.querySelector("#news-slides-font-5"),
  newsSlidesContentTitleSix = document.querySelector("#news-slides-font-6"),
  newsSlidesContentOne = document.querySelector("#slide-1-container"),
  newsSlidesContentTwo = document.querySelector("#slide-2-container"),
  newsSlidesContentThree = document.querySelector("#slide-3-container"),
  newsSlidesContentFour = document.querySelector("#slide-4-container"),
  newsSlidesContentFive = document.querySelector("#slide-5-container"),
  newsSlidesContentSix = document.querySelector("#slide-6-container");

newsSlidesContentTitleOne.addEventListener("click", function () {
  newsSlidesContentOne.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlidesContentTitleTwo.addEventListener("click", function () {
  newsSlidesContentTwo.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlidesContentTitleThree.addEventListener("click", function () {
  newsSlidesContentThree.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlidesContentTitleFour.addEventListener("click", function () {
  newsSlidesContentFour.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlidesContentTitleFive.addEventListener("click", function () {
  newsSlidesContentFive.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
newsSlidesContentTitleSix.addEventListener("click", function () {
  newsSlidesContentSix.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});

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
document.addEventListener("DOMContentLoaded", function () {
  const textElementAbout = document.getElementById("about-main-font-content");
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

const learnMorePart8 = document.querySelector(".part-8-content");
const secondImage = learnMorePart8.querySelector("li");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
const applyDraggingClass = () => {
  if (isDragStart) {
    learnMorePart8.classList.add("dragging");
  } else {
    learnMorePart8.classList.remove("dragging");
  }
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = learnMorePart8.scrollLeft;
  applyDraggingClass();
  learnMorePart8.style.transition = "none";
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  learnMorePart8.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
  applyDraggingClass();
};

const dragStop = () => {
  isDragStart = false;
  applyDraggingClass();
  learnMorePart8.style.transition = "";
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

learnMorePart8.addEventListener("mousedown", dragStart);
learnMorePart8.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
learnMorePart8.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
learnMorePart8.addEventListener("touchend", dragStop);

const aboutLearnMoreTitleSecond1 = document.querySelector(
    "#news-slides--font-1"
  ),
  aboutLearnMoreTitleSecond2 = document.querySelector("#news-slides--font-2"),
  aboutLearnMoreTitleSecond3 = document.querySelector("#news-slides--font-3"),
  aboutLearnMoreTitleSecond4 = document.querySelector("#news-slides--font-4"),
  aboutLearnMoreTitleSecond5 = document.querySelector("#news-slides--font-5"),
  aboutLearnMoreTitleSecond6 = document.querySelector("#news-slides--font-6");

aboutLearnMoreTitleSecond1.addEventListener("click", function () {
  newsSlidesContentOne.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutLearnMoreTitleSecond2.addEventListener("click", function () {
  newsSlidesContentTwo.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutLearnMoreTitleSecond3.addEventListener("click", function () {
  newsSlidesContentThree.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutLearnMoreTitleSecond4.addEventListener("click", function () {
  newsSlidesContentFour.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutLearnMoreTitleSecond5.addEventListener("click", function () {
  newsSlidesContentFive.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});
aboutLearnMoreTitleSecond6.addEventListener("click", function () {
  newsSlidesContentSix.style.display = "block";
  newsMainContent.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "none";
});

const newsFooterText = document.querySelector("#news-footer-second-font"),
  PortfolioFooterText = document.querySelector("#portfolio-footer-second-font"),
  carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  myDiv = document.getElementById("portfolio-footer-percentge"),
  arrowIcons = document.querySelectorAll(".arrows img"),
  carousel2 = document.querySelector(".carousel-2"),
  firstImg2 = carousel2.querySelectorAll("img")[0],
  myDivTwo = document.getElementById("news-footer-percentge"),
  arrowIcons2 = document.querySelectorAll(".arrows-2 img");

if (window.innerWidth > 1111) {
  newsFooterText.textContent = "04";
  PortfolioFooterText.textContent = "04";
  arrowIcons2.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth2 = firstImg2.clientWidth + 18;
      let newWidth = parseFloat(myDivTwo.style.width) || 25;

      if (icon.id == "left-2") {
        newWidth -= 25;
      } else {
        newWidth += 25;
      }

      myDivTwo.style.width = `${newWidth}%`;
      carousel2.scrollLeft +=
        icon.id == "left-2" ? -firstImgWidth2 : firstImgWidth2;
    });
  });

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 27;
      let newWidth = parseFloat(myDiv.style.width) || 25;

      if (icon.id == "left") {
        newWidth -= 25;
      } else {
        newWidth += 25;
      }

      myDiv.style.width = `${newWidth}%`;
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });
} else {
  newsFooterText.textContent = "06";
  PortfolioFooterText.textContent = "06";
  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 27;
      let newWidth = parseFloat(myDiv.style.width) || 16.6;

      if (icon.id == "left") {
        newWidth -= 16.6;
      } else {
        newWidth += 16.6;
      }

      myDiv.style.width = `${newWidth}%`;
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });
  arrowIcons2.forEach((icon) => {
    icon.addEventListener("click", () => {
      let firstImgWidth2 = firstImg2.clientWidth + 18;
      let newWidth = parseFloat(myDivTwo.style.width) || 16.6;

      if (icon.id == "left-2") {
        newWidth -= 16.6;
      } else {
        newWidth += 16.6;
      }

      myDivTwo.style.width = `${newWidth}%`;
      carousel2.scrollLeft +=
        icon.id == "left-2" ? -firstImgWidth2 : firstImgWidth2;
    });
  });
}
