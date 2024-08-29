/**
 * Silicon | Multipurpose Bootstrap Template & UI Kit
 * Copyright 2022 Createx Studio
 * Theme core scripts
 *
 * @author Createx Studio
 * @version 1.3.0
 */

import 'smooth-scroll/dist/smooth-scroll.polyfills'
import smoothScroll from './components/smooth-scroll';
import scrollTopButton from './components/scroll-top-button';
import gallery from './components/gallery';
import stickyNavbar from './components/sticky-navbar';

// INITIALIZATION OF SMOOTH SCROLL
// =======================================================
let scroll = new SmoothScroll('a[href*="#"]', {
  animationTime: 800,
  stepSize: 75,
  accelerationDelta: 30,
  accelerationMax: 2,
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,
  touchpadSupport: true,
});


// CUSTOM SWIPER FOR STEPS
// =======================================================
const stepsSwiper = (swiperContainer) => {
  return {
    slidesPerView: 1,
    slidesPerGroupAuto: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    speed: 600,
    loop: false,
    spaceBetween: 30,
    grid: document.documentElement.clientWidth < 768
      ? { rows: 2, fill: 'row' }
      : {},
    pagination: {
      el: `${swiperContainer} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      prevEl: `${swiperContainer} .navigation-prev`,
      nextEl: `${swiperContainer} .navigation-next`,
    },
    breakpoints: {
      768:  {
        spaceBetween: 0,
        slidesPerGroup: 2,
        slidesPerView: 'auto',
        slidesPerGroupAuto: 'auto' },
      1200:  {
        spaceBetween: 4,
        slidesPerGroup: 3,
        slidesPerView: 'auto',
        slidesPerGroupAuto: 'auto' },
    },
  };
};

new Swiper('#swiper-graduates-technology .swiper-steps', stepsSwiper('#swiper-graduates-technology'));
new Swiper('#swiper-students-technology .swiper-steps', stepsSwiper('#swiper-students-technology'));

// BASE SWIPER
// =======================================================
const baseSwiper = (swiperContainer) => {
  return {
    speed: 600,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: false,
    pagination: {
      el:  `${swiperContainer} .swiper-pagination`,
      clickable: true
    },
    navigation: {
      prevEl: `${swiperContainer} .navigation-prev`,
      nextEl: `${swiperContainer} .navigation-next`,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
        slidesPerGroup: 2 },
      992: {
        spaceBetween: 18,
        slidesPerView: 4,
        slidesPerGroup: 4 },
      1400: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 4 },
    },
  };
};

new Swiper('#swiper-campus', baseSwiper('#swiper-campus'));
new Swiper('#swiper-possibility', baseSwiper('#swiper-possibility'));
new Swiper('#swiper-reels', baseSwiper('#swiper-reels'));
new Swiper('#swiper-career', baseSwiper('#swiper-career'));
new Swiper('#swiper-nav-menu',{
  speed: 600,
  slidesPerView: 'auto',
  spaceBetween: 28,
  loop: false,
  allowTouchMove: true,
  breakpoints: {
    768: {
      spaceBetween: 50,
      slidesPerView: 'auto',
      allowTouchMove: true
    },
    992: {
      spaceBetween: 60,
      slidesPerView: 'auto',
      allowTouchMove: false
    },
    1100: {
      spaceBetween: 70,
      slidesPerView: 'auto',
    },
    1300: {
      spaceBetween: 85,
      slidesPerView: 'auto',
    },
    1600: {
      spaceBetween: 110,
      slidesPerView: 'auto',
    },
    1800: {
      spaceBetween: 120,
      slidesPerView: 'auto',
    },
    2100: {
      spaceBetween: 140,
      slidesPerView: 'auto',
    },
    2500: {
      spaceBetween: 180,
      slidesPerView: 'auto',
    },
    3000: {
      spaceBetween: 200,
      slidesPerView: 'auto',
    },
    3400: {
      spaceBetween: 230,
      slidesPerView: 'auto',
    },
  },
});


new Swiper("#swiper-accordion-projects", {
  speed: 600,
  slidesPerView: 2.5,
  slidesPerGroup: 2,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: `#swiper-accordion-projects .swiper-pagination`,
    clickable: true
  },
  navigation: {
    prevEl: `#swiper-accordion-projects .navigation-prev`,
    nextEl: `#swiper-accordion-projects .navigation-next`,
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      slidesPerView: 2.5,
      slidesPerGroup: 2
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1400: {
      spaceBetween: 0,
      slidesPerView: 4,
      slidesPerGroup: 4
    },
  }
})


// CUSTOM SWIPER FOR INFINITY
// =======================================================
const closest = (numbers, goal) => numbers.reduce(function(prev, curr) {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

const swiperInfinityMain = new Swiper('.swiper-infinity-main', {
  slidesPerView: 'auto',
  centeredSlides: true,
  slidesPerGroupAuto: 'auto',
  grabCursor: true,
  freeMode: true,
  loop: false,
  spaceBetween: 100,
});

const swiperInfinitySub = new Swiper('.swiper-infinity-sub', {
  slidesPerView: 'auto',
  slidesPerGroupAuto: 'auto',
  freeMode: true,
  grabCursor: true,
  loop: false,
  spaceBetween: 140,
  pagination: {
    el: `.swiper-infinity-sub .swiper-pagination`,
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-infinity-sub .navigation-prev',
    nextEl: '.swiper-infinity-sub .navigation-next',
  }
});

const swiperInfinityMainSlides = document.querySelectorAll('.swiper-infinity-main .swiper-slide');
const infinityImage = document.querySelector('#infinity-image');
const subSwiperDataSets = [...swiperInfinityMainSlides].map(item => Number(item.dataset.subSwiper));
const imgDataSets = [...swiperInfinityMainSlides].map(item => item.dataset.img);

swiperInfinityMainSlides.forEach((item, i) => {
  item.addEventListener('click', ()=> {
    swiperInfinityMain.slideTo(i, 600);
    swiperInfinitySub.slideTo(item.dataset.subSwiper, 600);
  })
});

swiperInfinityMain.on('activeIndexChange', function (evt) {
  const slideTo = subSwiperDataSets[swiperInfinityMain.activeIndex];
  swiperInfinitySub.slideTo(slideTo, 600);
  infinityImage.src = `assets/img/pish/${imgDataSets[swiperInfinityMain.activeIndex]}`;
});

swiperInfinitySub.on('activeIndexChange', function () {
  const closestIndex = closest(subSwiperDataSets, swiperInfinitySub.activeIndex);
  const slideTo = subSwiperDataSets.indexOf(closestIndex);
  swiperInfinityMain.slideTo(slideTo, 600)
});

// CUSTOM SWIPER FOR YOURSELF
// =======================================================
if (document.documentElement.clientWidth > 768) { // по факту надо поставить 992, но на случай переключения ориентации ipad оставил 768
  const swiperYourself = new Swiper('#swiper-yourself .swiper-steps', {
    slidesPerView: 1,
    slidesPerGroupAuto: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    speed: 600,
    loop: false,
    spaceBetween: 30,
    pagination: {
      el: '#swiper-yourself .swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#swiper-yourself .navigation-prev',
      nextEl: '#swiper-yourself .navigation-next',
    },
    breakpoints: {
      768:  {
        spaceBetween: 0,
        slidesPerGroup: 2,
        slidesPerView: 'auto',
        slidesPerGroupAuto: 'auto' },
      1200:  {
        spaceBetween: 0,
        slidesPerGroup: 4,
        slidesPerView: 'auto',
        slidesPerGroupAuto: 'auto' },
    },
  });

  const swiperYourselfBtn = new Swiper('#swiper-yourself-btn', {
    speed: 600,
    centeredSlides: true,
    spaceBetween: 50,
    slidesPerView: 'auto',
    breakpoints: {
      1200: { centeredSlides: false },
    },
  });

  const swiperYourselfSlides = document.querySelectorAll('#swiper-yourself-btn .swiper-slide');
  const subSwiperDataSets = [...swiperYourselfSlides].map(item => Number(item.dataset.subSwiper));

  swiperYourselfSlides.forEach((item, i) => {
    item.addEventListener('click', ()=> {
      swiperYourselfBtn.slideTo(i, 600);
      swiperYourself.slideTo(item.dataset.subSwiper, 600);
      swiperYourselfSlides.forEach(button => button.classList.remove('active'));
      item.classList.add('active');
    })
  });

  swiperYourselfBtn.on('activeIndexChange', function (event) {
    const slideTo = subSwiperDataSets[swiperYourselfBtn.activeIndex];
    swiperYourself.slideTo(slideTo, 600);
    swiperYourselfSlides.forEach(button => button.classList.remove('active'));
    swiperYourselfSlides[swiperYourselfBtn.activeIndex].classList.add('active');
  });

  swiperYourself.on('activeIndexChange', function () {
    const index = Number.isInteger(swiperYourself.activeIndex / 4)
      ? swiperYourself.activeIndex / 4
      : Math.floor(swiperYourself.activeIndex / 4);
    swiperYourselfBtn.slideTo(index, 600);
    swiperYourselfSlides.forEach(button => button.classList.remove('active'));
    swiperYourselfSlides[index].classList.add('active');
  });
} else {
  new Swiper('#swiper-yourself-mobile', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 48,
    loop: false,
    pagination: {
      el: '#swiper-yourself-mobile .swiper-pagination',
      clickable: true,
    },
  });
}

// CUSTOM DECOR IN HERO
// =======================================================
/*
const decor     = document.querySelector('.decor');
const dots      = decor.querySelectorAll('.dot');
const smallDots = decor.querySelectorAll('.dot .small');

function getRandomNumber(count) {
  return Math.floor(Math.random() * count);
};

function shuffle(arr) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

smallDots[getRandomNumber(smallDots.length)].parentElement.classList.add('border-decor');

shuffle([...Array(dots.length).keys()]).forEach((item, i)=> {
  setTimeout(() => {
    dots[item].classList.add('show');
  }, 200 * i);
})

// JQUERY IN FRONT PAGE (MARQUEE)
// =======================================================
jQuery(function ($) {
  if (document.body.clientWidth <= 992) {
    $('.marquee').marquee({
      duration: 5000,
      gap: 0,
      direction: 'left',
      duplicated: true,
      startVisible: true,
    });
  }
  if (document.body.clientWidth > 992) {
    $('.marquee').marquee({
      duration: 20000,
      gap: 0,
      direction: 'left',
      duplicated: true,
      startVisible: true,
    });
    $(window).on('load resize scroll', function () {
      $('.text-to-left-side').each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop * 1000 / elementTop;
        $(this).find('.js-marquee').css({ right: leftPosition });
      });
      $('.aircraft').each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop * -100 / elementTop;
        var bottomPosition = windowTop * 50 / elementTop;
        $(this).parent().css({ left: leftPosition, bottom: bottomPosition });
      });
    });
  }
});

*/
