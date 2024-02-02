const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .img-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-btn");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  // ending
  const imageListTwo = document.querySelector(
    ".slider-wrapper-two .img-list-two"
  );
  const slideButtonsTwo = document.querySelectorAll(
    ".slider-wrapper-two .slide-btn-two"
  );
  const maxScrollLeftTwo = imageListTwo.scrollWidth - imageListTwo.clientWidth;
  // ending

  slideButtons.forEach((button) => [
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }),
  ]);

  // handleDisplayofSlidebtn
  // const handelSlideButtons = () => {
  //   slideButtons[0].style.display =
  //     imageList.scrollLeft <= 0 ? "none" : "block";
  //   slideButtons[1].style.display =
  //     imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  // };

  // imageListTwo.addEventListener("scroll", () => {
  //   handelSlideButtons();
  // });

  //ending
  slideButtonsTwo.forEach((button) => [
    button.addEventListener("click", () => {
      const directiontwo = button.id === "prev-slide-two" ? -1 : 1;
      const scrollAmount = imageListTwo.clientWidth * directiontwo;
      imageListTwo.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }),
  ]);

  // handleDisplayofSlidebtn
  // const handelSlideButtonsTwo = () => {
  //   slideButtonsTwo[0].style.display =
  //     imageListTwo.scrollLeft <= 0 ? "none" : "block";
  //   slideButtonsTwo[1].style.display =
  //     imageListTwo.scrollLeft >= maxScrollLeftTwo ? "none" : "block";
  // };

  // imageListTwo.addEventListener("scroll", () => {
  //   handelSlideButtonsTwo();
  // });
};

window.addEventListener("load", initSlider);
