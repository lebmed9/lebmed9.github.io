let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
let firstNumber = slidesToShow;

const container = document.getElementById("section-participants");
const track = document.getElementById("section-participants_items");
const trackAll = document.getElementsByClassName("section-participants_item");
const item = document.getElementById("section-participants_item");
const btnNextSlide = document.getElementById("btnNextSlide");
const btnPreviousSlide = document.getElementById("btnPreviousSlide");
document.getElementById("firstNumber").textContent = firstNumber;
let secondNumber = trackAll.length;
document.getElementById("secondNumber").textContent = secondNumber;

const btnNextSlide_svg = document.getElementById("btnNextSlide_svg");
const btnPreviousSlide_svg = document.getElementById("btnPreviousSlide_svg");

const itemWidth = 412;
const movePosition = slidesToScroll * itemWidth;

const setPosition = () => {
  document.getElementById("firstNumber").textContent = firstNumber;
  track.style = `transform: translateX(-${position}px)`;
};

// const play = () => {
  
//   setPosition()
//   if (firstNumber === secondNumber) {
//     btnNextSlide.disabled = true;
//     btnPreviousSlide.disabled = false;
//     btnNextSlide_svg.style = "fill: #D6D6D6";
//   }
// }


btnPreviousSlide.disabled = true;
btnPreviousSlide_svg.style = "fill: #D6D6D6";

btnNextSlide.addEventListener("click", () => {
  position += movePosition;
  firstNumber += slidesToScroll;
  btnPreviousSlide_svg.style = "fill: #313131";
  setPosition();
  if (firstNumber === secondNumber) {
    btnNextSlide.disabled = true;
    btnPreviousSlide.disabled = false;
    btnNextSlide_svg.style = "fill: #D6D6D6";
  } else if (firstNumber > slidesToShow) {
    btnPreviousSlide.disabled = false;
  }
});

btnPreviousSlide.addEventListener("click", () => {
  position -= movePosition;
  firstNumber -= slidesToScroll;
  setPosition();
  if (firstNumber === slidesToShow) {
    btnPreviousSlide.disabled = true;
    btnNextSlide.disabled = false;
    btnPreviousSlide_svg.style = "fill: grey";
    btnNextSlide_svg.style = "fill: #313131";
  }
});

// const onload = setTimeout(setPosition, 1000);