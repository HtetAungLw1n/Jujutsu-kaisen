let animeImg = document.querySelector(".anime-poster-img");
let btnOne = document.querySelector(".anime-title-btn-one");
let btnTwo = document.querySelector(".anime-title-btn-two");
let btnThree = document.querySelector(".anime-title-btn-three");
let btnFour = document.querySelector(".anime-title-btn-four");
let btnFive = document.querySelector(".anime-title-btn-five");

btnOne.addEventListener("click", () => {
  animeImg.src = `img/Cursed Child Arc.png`;
});
btnTwo.addEventListener("click", () => {
  animeImg.src = `img/Fearsome Womb Arc.png`;
});
btnThree.addEventListener("click", () => {
  animeImg.src = `img/Kyoto Goodwill Event Arc.png`;
});
btnFour.addEventListener("click", () => {
  animeImg.src = `img/Hidden Inventory Arc.png`;
});
btnFive.addEventListener("click", () => {
  animeImg.src = `img/Shibuya Incident Arc.png`;
});
