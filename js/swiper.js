const preBtn = document.querySelector(".swiper-button-prev");

const nextBtn = document.querySelector(".swiper-button-next");

const swiperWrapper = document.querySelector(".swiper-wrapper");

let active = 0;

preBtn.style.display = "none";

const showNextSlide = () => {
  active++;

  if (active > 0) {
    preBtn.style.display = "block";
  }

  swiperWrapper.style.transform = `translateX(-${active * 100}%)`;

  if (active >= swiperWrapper.children.length - 1) {
    nextBtn.style.display = "none";
  }
};

const showPrevSlide = () => {
  active--;

  if (active <= swiperWrapper.children.length - 1) {
    nextBtn.style.display = "block";
  }

  swiperWrapper.style.transform = `translateX(-${active * 100}%)`;

  if (active <= 0) {
    preBtn.style.display = "none";
  }
};

nextBtn.addEventListener("click", showNextSlide);
preBtn.addEventListener("click", showPrevSlide);
