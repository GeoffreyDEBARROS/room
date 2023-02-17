let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let topHead = document.querySelector(".topHead");
let h2 = document.querySelector("h2");
const bgArray = [
  "mobile-image-hero-1.jpg",
  "mobile-image-hero-2.jpg",
  "mobile-image-hero-3.jpg",
];
let currentBgIndex = 0;

leftButton.addEventListener("click", () => {
  currentBgIndex = (currentBgIndex + 1) % bgArray.length;
  const imageUrl = `url(./assets/images/${bgArray[currentBgIndex]})`;
  topHead.style.background = imageUrl;
  topHead.style.backgroundPosition = "center";
  topHead.style.backgroundSize = "cover";
});

rightButton.addEventListener("click", () => {
  currentBgIndex = (currentBgIndex - 1) % bgArray.length;
  if (currentBgIndex < 0) {
    currentBgIndex = bgArray.length - 1;
  }
  const imageUrl = `url(./assets/images/${bgArray[currentBgIndex]})`;
  topHead.style.background = imageUrl;
  topHead.style.backgroundPosition = "center";
  topHead.style.backgroundSize = "cover";
});
