let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let topHead = document.querySelector(".topHead");
let h2 = document.querySelector("h2");
let headerP = document.querySelector("header p");
const bgArray = [
  "mobile-image-hero-1.jpg",
  "mobile-image-hero-2.jpg",
  "mobile-image-hero-3.jpg",
];
const h2Array = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
const pArray = [
  "We provide unmatched quality, comfort, and style for property owners     across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

let i = 0;
const headerChangeLeft = () => {
  i = (i + 1) % 3;

  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];

  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];

  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  topHead.style.backgroundPosition = "center";
  topHead.style.backgroundSize = "cover";
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];
  console.log(i);
};

const headerChangeRight = () => {
  i = (i - 1) % 3;
  if (i < 0) {
    i = 3 - 1;
  }
  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];

  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  topHead.style.backgroundPosition = "center";
  topHead.style.backgroundSize = "cover";
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];

  topHead.style.background = `url(./assets/images/${bgArray[i]})`;
  h2.textContent = h2Array[i];
  headerP.textContent = pArray[i];
  console.log(i);
};

leftButton.addEventListener("click", () => {
  headerChangeLeft();
});
rightButton.addEventListener("click", () => {
  headerChangeRight();
});


