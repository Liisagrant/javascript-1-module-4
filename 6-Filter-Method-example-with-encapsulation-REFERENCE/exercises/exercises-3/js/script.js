// I want cercle to bwe blue
//when i refresh the circle keeps blue

//1.select circle and BTN
const circle = document.querySelector(".circle");
const BTN = document.querySelector("#circleBTN");

//2 when clicked btn show message
const bgColor = localStorage.getItem("bgColor");
circle.style.backgroundColor = bgColor;


BTN.addEventListener("click", function(){
    localStorage.setItem("bgColor", "#f2c381")
    //3 change the backgrpund colour
    circle.style.backgroundColor = "#f2c381";
});

//local storage
//1.local storage
localStorage.setItem("name","lisa");

const name = localStorage.getItem("name");
console.log("the name is: ", name  )