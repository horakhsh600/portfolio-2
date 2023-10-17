const newsMainContent = document.getElementById("wrapper-2"),
  headerMain = document.getElementById("header-main"),
  closeBtnForLearnMoreAbout = document.querySelector(
    "#close-container-learn-more-about"
  );

let menuIcon = document.querySelector(".menu-icon"),
  listMenu = document.querySelector("#header-right-side-phone");

menuIcon.addEventListener("click", function () {
  if (listMenu.style.display === "none" || listMenu.style.display === "") {
    listMenu.style.display = "block";
  } else {
    listMenu.classList.add("header-right-side-phone-closing");
    setTimeout(() => {
      listMenu.style.display = "none";
      listMenu.classList.remove("header-right-side-phone-closing");
    }, 500);
  }
});

let menuItems = document.querySelectorAll(".header-right-side-phone ul li a");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    listMenu.classList.add("header-right-side-phone-closing");
    setTimeout(() => {
      listMenu.style.display = "none";
      listMenu.classList.remove("header-right-side-phone-closing");
    }, 500);
  });
});

const home = document.getElementById("home"),
  about = document.getElementById("about"),
  portfolio = document.getElementById("portfolio"),
  news = document.getElementById("news"),
  contact = document.getElementById("contact"),
  homeOption = document.getElementById("home-option"),
  aboutOption = document.getElementById("about-option"),
  portfolioOption = document.getElementById("portfolio-option"),
  newsOption = document.getElementById("news-option"),
  contactOption = document.getElementById("contact-option");

function showSection(section, displayProperty) {
  home.style.display = "none";
  about.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  section.style.display = displayProperty;
  closeBtnForLearnMoreAbout.style.display = "none";
}

homeOption.addEventListener("click", function () {
  showSection(home, "flex");
});

aboutOption.addEventListener("click", function () {
  showSection(about, "flex");
});

portfolioOption.addEventListener("click", function () {
  showSection(portfolio, "block");
});

newsOption.addEventListener("click", function () {
  showSection(news, "block");
});

contactOption.addEventListener("click", function () {
  showSection(contact, "block");
});

const homeButton = document.getElementById("Home-button");
homeButton.addEventListener("click", function () {
  contact.style.display = "block";
  home.style.display = "none";
});

const learnMore = document.getElementById("about-learn-more"),
  learnMoreBtn = document.getElementById("about-button"),
  learnMoreTwo = document.querySelector("#about-learn-more-container--");
learnMoreBtn.addEventListener("click", function () {
  learnMore.style.display = "flex";
  learnMoreTwo.style.display = "flex";
  about.style.display = "none";
  headerMain.style.display = "none";
  closeBtnForLearnMoreAbout.style.display = "block";
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

function closeSlidesContent(closeSection) {
  closeSection.style.display = "none";
  newsMainContent.style.display = "grid";
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "block";
  contact.style.display = "none";
  headerMain.style.display = "flex";
}
newsSlideContentOneCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentOne);
});
newsSlideContentTwoCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentTwo);
});
newsSlideContentThreeCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentThree);
});
newsSlideContentFourCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentFour);
});
newsSlideContentFiveCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentFive);
});
newsSlideContentSixCloseIcon.addEventListener("click", function () {
  closeSlidesContent(newsSlidesContentSix);
});

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
  newsSlidesContentSix = document.querySelector("#slide-6-container"),
  aboutLearnMoreTitleSecond1 = document.querySelector("#news-slides--font-1"),
  aboutLearnMoreTitleSecond2 = document.querySelector("#news-slides--font-2"),
  aboutLearnMoreTitleSecond3 = document.querySelector("#news-slides--font-3"),
  aboutLearnMoreTitleSecond4 = document.querySelector("#news-slides--font-4"),
  aboutLearnMoreTitleSecond5 = document.querySelector("#news-slides--font-5"),
  aboutLearnMoreTitleSecond6 = document.querySelector("#news-slides--font-6");

function handleNewsSlidesContentClick(newsSlidesContent, contentTitle) {
  contentTitle.addEventListener("click", function () {
    newsSlidesContent.style.display = "block";
    newsMainContent.style.display = "none";
    about.style.display = "none";
    home.style.display = "none";
    portfolio.style.display = "none";
    news.style.display = "none";
    contact.style.display = "none";
    headerMain.style.display = "none";
    closeBtnForLearnMoreAbout.style.display = "none";
  });
}

handleNewsSlidesContentClick(newsSlidesContentOne, newsSlidesContentTitleOne);
handleNewsSlidesContentClick(newsSlidesContentTwo, newsSlidesContentTitleTwo);
handleNewsSlidesContentClick(
  newsSlidesContentThree,
  newsSlidesContentTitleThree
);
handleNewsSlidesContentClick(newsSlidesContentFour, newsSlidesContentTitleFour);
handleNewsSlidesContentClick(newsSlidesContentFive, newsSlidesContentTitleFive);
handleNewsSlidesContentClick(newsSlidesContentSix, newsSlidesContentTitleSix);
handleNewsSlidesContentClick(newsSlidesContentOne, aboutLearnMoreTitleSecond1);
handleNewsSlidesContentClick(newsSlidesContentTwo, aboutLearnMoreTitleSecond2);
handleNewsSlidesContentClick(
  newsSlidesContentThree,
  aboutLearnMoreTitleSecond3
);
handleNewsSlidesContentClick(newsSlidesContentFour, aboutLearnMoreTitleSecond4);
handleNewsSlidesContentClick(newsSlidesContentFive, aboutLearnMoreTitleSecond5);
handleNewsSlidesContentClick(newsSlidesContentSix, aboutLearnMoreTitleSecond6);

const homeOptionPhone = document.querySelector("#home-option-phone"),
  aboutOptionPhone = document.querySelector("#about-option-phone"),
  portfolioOptionPhone = document.querySelector("#portfolio-option-phone"),
  newsOptionPhone = document.querySelector("#news-option-phone"),
  contactOptionPhone = document.querySelector("#contact-option-phone");

function phoneNavBar(navBarName, navBarDisplayValue) {
  about.style.display = "none";
  home.style.display = "none";
  portfolio.style.display = "none";
  news.style.display = "none";
  contact.style.display = "none";
  navBarName.style.display = navBarDisplayValue;
  closeBtnForLearnMoreAbout.style.display = "none";
}

homeOptionPhone.addEventListener("click", function () {
  phoneNavBar(home, "flex");
});
aboutOptionPhone.addEventListener("click", function () {
  phoneNavBar(about, "block");
});
portfolioOptionPhone.addEventListener("click", function () {
  phoneNavBar(portfolio, "block");
});
newsOptionPhone.addEventListener("click", function () {
  phoneNavBar(news, "block");
});
contactOptionPhone.addEventListener("click", function () {
  phoneNavBar(contact, "block");
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

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("main-font-content");
  const messages = ["Developer", "Freelancer", "Designer"];
  rotateText(textElement, messages);
});

document.addEventListener("DOMContentLoaded", function () {
  const textElementAboutLearnMore = document.getElementById(
    "about-learn-more-font-content"
  );
  const messagesAboutLearnMore = ["Developer", "Freelancer", "Designer"];
  rotateText(textElementAboutLearnMore, messagesAboutLearnMore);
});

document.addEventListener("DOMContentLoaded", function () {
  const textElementAboutMain = document.getElementById(
    "about-main-font-content"
  );
  const messagesAboutMain = ["Developer", "Freelancer", "Designer"];
  rotateText(textElementAboutMain, messagesAboutMain);
});
function rotateText(textElement, messages) {
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
}

function animateProgressBar(progressBar, startValue, endValue, speed) {
  let currentValue = startValue;

  const animation = setInterval(() => {
    currentValue++;
    progressBar.style.background = `conic-gradient(#fe0000 ${
      currentValue * 3.6
    }deg, rgba(255, 255, 255, 0.2) 0deg)`;
    if (currentValue >= endValue) {
      clearInterval(animation);
    }
  }, speed);
}

let firstProgressBar = document.querySelector(".first-language-percentage");
animateProgressBar(firstProgressBar, 0, 90, 100);

let secondProgressBar = document.querySelector(".second-language-percentage");
animateProgressBar(secondProgressBar, 0, 60, 100);

let thirdProgressBar = document.querySelector(".third-language-percentage");
animateProgressBar(thirdProgressBar, 0, 30, 100);
