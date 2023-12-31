new WOW({
  mobile: false,
}).init();



const myText = new SplitType(".menu__button");
const myText2 = new SplitType(".menu__list-link");
const myText3 = new SplitType(".footer__list-link");
const myText4 = new SplitType(".footer__contacts-phone");
const myText5 = new SplitType(".footer__contacts-mail");

let matchMedia = gsap.matchMedia() 


// document.querySelector('.menu__info .line').classList.add('wow')
// document.querySelector('.menu__info .line').classList.add('animate__slideInDown')
// document.querySelector('.menu__info .line').classList.add('animate__animated')

// // // // // //
// // // // // //
// // // // // //
const menuListFirst = document.querySelector(".menu__list-link--1");
const menuListSec = document.querySelector(".menu__list-link--2");
const menuListThird = document.querySelector(".menu__list-link--3");
const menuListFour = document.querySelector(".menu__list-link--4");
const menuListFive = document.querySelector(".menu__list-link--5");

// matchMedia.add('max-width: 1025px', () => {
  const animationMenu1 = gsap.to(".menu__list-link--1 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationMenu2 = gsap.to(".menu__list-link--2 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationMenu3 = gsap.to(".menu__list-link--3 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationMenu4 = gsap.to(".menu__list-link--4 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationMenu5 = gsap.to(".menu__list-link--5 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });

// })



menuListFirst.addEventListener("mouseenter", () => animationMenu1.play());
menuListFirst.addEventListener("mouseleave", () => animationMenu1.reverse());
menuListSec.addEventListener("mouseenter", () => animationMenu2.play());
menuListSec.addEventListener("mouseleave", () => animationMenu2.reverse());
menuListThird.addEventListener("mouseenter", () => animationMenu3.play());
menuListThird.addEventListener("mouseleave", () => animationMenu3.reverse());
menuListFour.addEventListener("mouseenter", () => animationMenu4.play());
menuListFour.addEventListener("mouseleave", () => animationMenu4.reverse());
menuListFive.addEventListener("mouseenter", () => animationMenu5.play());
menuListFive.addEventListener("mouseleave", () => animationMenu5.reverse());
// // // // // //
// // // // // //
// // // // // //
const footerMenuListFirst = document.querySelector(".footer__list-link--1");
const footerMenuListSec = document.querySelector(".footer__list-link--2");
const footerMenuListThird = document.querySelector(".footer__list-link--3");
const footerMenuListFour = document.querySelector(".footer__list-link--4");
const footerMenuListFive = document.querySelector(".footer__list-link--5");

// matchMedia.add('max-width: 1025px', () => {
  const animationFooterMenu1 = gsap.to(".footer__list-link--1 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationFooterMenu2 = gsap.to(".footer__list-link--2 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationFooterMenu3 = gsap.to(".footer__list-link--3 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationFooterMenu4 = gsap.to(".footer__list-link--4 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  const animationFooterMenu5 = gsap.to(".footer__list-link--5 .char", {
    y: -31,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
// })

footerMenuListFirst.addEventListener("mouseenter", () =>
  animationFooterMenu1.play()
);
footerMenuListFirst.addEventListener("mouseleave", () =>
  animationFooterMenu1.reverse()
);
footerMenuListSec.addEventListener("mouseenter", () =>
  animationFooterMenu2.play()
);
footerMenuListSec.addEventListener("mouseleave", () =>
  animationFooterMenu2.reverse()
);
footerMenuListThird.addEventListener("mouseenter", () =>
  animationFooterMenu3.play()
);
footerMenuListThird.addEventListener("mouseleave", () =>
  animationFooterMenu3.reverse()
);
footerMenuListFour.addEventListener("mouseenter", () =>
  animationFooterMenu4.play()
);
footerMenuListFour.addEventListener("mouseleave", () =>
  animationFooterMenu4.reverse()
);
footerMenuListFive.addEventListener("mouseenter", () =>
  animationFooterMenu5.play()
);
footerMenuListFive.addEventListener("mouseleave", () =>
  animationFooterMenu5.reverse()
);
// // // // // //
// // // // // //
// // // // // //
const headerBtn = document.querySelector(".menu__button--header");
// const headerMobBtn = document.querySelector(".menu__button--mob");
const footerBtn = document.querySelector(".menu__button--footer");

// matchMedia.add('max-width: 1025px', () => {
  const animationHeader = gsap.to(".menu__button--header .char", {
    y: -40,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
  // const animationHeaderMob = gsap.to(".menu__button--mob .char", {
  //   y: -40,
  //   stagger: 0.02,
  //   delay: 0.1,
  //   duration: 0.1,
  //   paused: true,
  // });
  const animationFooter = gsap.to(".menu__button--footer .char", {
    y: -40,
    stagger: 0.02,
    delay: 0.1,
    duration: 0.1,
    paused: true,
  });
// })



headerBtn.addEventListener("mouseenter", () => animationHeader.play());
headerBtn.addEventListener("mouseleave", () => animationHeader.reverse());
// headerMobBtn.addEventListener("mouseenter", () => animationHeaderMob.play());
// headerMobBtn.addEventListener("mouseleave", () => animationHeaderMob.reverse());
footerBtn.addEventListener("mouseenter", () => animationFooter.play());
footerBtn.addEventListener("mouseleave", () => animationFooter.reverse());

// // // // // //
// // // // // //
// // // // // //

const donatePopup = new SplitType(".donate-popup__btn--purple");
const donatePopupBlack = new SplitType(".donate-popup__btn--black");

const donateBtn = document.querySelector(".donate-popup__btn--purple");
const donateBtnBlack = document.querySelector(".donate-popup__btn--black");

const animationDonateBtn = gsap.to(".donate-popup__btn--purple .char", {
  y: -40,
  stagger: 0.02,
  delay: 0.1,
  duration: 0.1,
  paused: true,
});
const animationDonateBtnBlack = gsap.to(".donate-popup__btn--black .char", {
  y: -40,
  stagger: 0.02,
  delay: 0.1,
  duration: 0.1,
  paused: true,
});

donateBtn.addEventListener("mouseenter", () => animationDonateBtn.play());
donateBtn.addEventListener("mouseleave", () => animationDonateBtn.reverse());
donateBtnBlack.addEventListener("mouseenter", () => animationDonateBtnBlack.play());
donateBtnBlack.addEventListener("mouseleave", () => animationDonateBtnBlack.reverse());

// // // // // //
// // // // // //
// // // // // //

const footerContactsPhone = document.querySelector(".footer__contacts-phone");
const footerContactsMail = document.querySelector(".footer__contacts-mail");

const animationFooterContactsPhone = gsap.to(".footer__contacts-phone .char", {
  y: -31,
  stagger: 0.02,
  delay: 0.1,
  duration: 0.1,
  paused: true,
});
const animationFooterContactsMail = gsap.to(".footer__contacts-mail .char", {
  y: -31,
  stagger: 0.02,
  delay: 0.02,
  duration: 0.1,
  paused: true,
});

footerContactsPhone.addEventListener("mouseenter", () =>
  animationFooterContactsPhone.play()
);
footerContactsPhone.addEventListener("mouseleave", () =>
  animationFooterContactsPhone.reverse()
);
footerContactsMail.addEventListener("mouseenter", () =>
  animationFooterContactsMail.play()
);
footerContactsMail.addEventListener("mouseleave", () =>
  animationFooterContactsMail.reverse()
);

const burgerItem = document.querySelector(".menu__burger");
const burgerText = document.querySelector(".menu__burger-text");
const burgerSpace = document.querySelector(".menu__list-wrapper");

burgerItem.addEventListener("click", () => {
  burgerItem.classList.toggle("active");
  if (burgerItem.classList.contains("active")) {
    burgerSpace.classList.add("active");
    burgerText.innerHTML = "Close";
    document.body.style.overflow = "hidden";
  } else {
    burgerSpace.classList.remove("active");
    burgerText.innerHTML = "Menu";
    document.body.style.overflow = "visible";
  }
});


function bindModal(
  triggerSelector,
  modalSelector,
  closeSelector,
  closeClickOverlay = true,
  display = "block"
) {
  const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll("[data-modal]");

  function calcScroll() {
    const div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  trigger.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }

      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.display = display;
      document.body.style.overflow = "hidden";
      const scrollbarWidth = calcScroll();
      document.body.style.marginRight = `${scrollbarWidth}px`; 
    });
  });

  close.addEventListener("click", () => {
    windows.forEach((item) => {
      item.style.display = "none";
    });

    modal.style.display = "none";

    const burgerItem = document.querySelector(".menu__burger");
    if (!burgerItem.classList.contains("active")) {
      document.body.style.overflow = ""; 
    }
    document.body.style.marginRight = "0px";
  });

  if (closeClickOverlay) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
  
        modal.style.display = "none";
  
        const burgerItem = document.querySelector(".menu__burger");
        if (!burgerItem.classList.contains("active")) {
          document.body.style.overflow = "";
        }
        document.body.style.marginRight = "0px";
      }
    });
  }
}

function showModalByTime(selector, time) {
  setTimeout(() => {
    document.querySelector(selector).style.display = display;
    document.body.style.overflow = "hidden";
  }, time);
}

function calcScroll() {
  let div = document.createElement("div");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

bindModal(
  ".menu__button",
  ".donate-popup",
  ".donate-popup__close",
  true,
  "flex"
);