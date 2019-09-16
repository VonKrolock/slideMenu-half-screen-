var left = document.querySelector(".left");
var right = document.querySelector(".right");
var container = document.querySelector(".container");
var text = document.getElementById("text");
var textTwo = document.getElementById("textTwo");
var button = document.querySelectorAll(".button")[0];
var buttonTwo = document.querySelectorAll(".button")[1];

button.addEventListener("mouseenter", change);
button.addEventListener("mouseleave",changeBack);

buttonTwo.addEventListener("mouseenter", changeRight);
buttonTwo.addEventListener("mouseleave",changeRightBack);

function change(){
    
    text.style.textShadow = "3px 2px 2px black";
}

function changeBack(){
    text.style.textShadow = "none";
}

function changeRight(){
    
    textTwo.style.textShadow = "3px 2px 2px black";
}

function changeRightBack(){
    
    textTwo.style.textShadow = "none";
}

left.addEventListener("mouseenter", moveLeft); 

function moveLeft(){
  container.classList.add("hover-left");
  
 
};

left.addEventListener("mouseleave", removeLeft);

function removeLeft(){
  container.classList.remove("hover-left");
  
};

right.addEventListener("mouseenter", moveRight) 

function moveRight(){
  container.classList.add("hover-right");
};

right.addEventListener("mouseleave", removeRight) 

function removeRight(){
  container.classList.remove("hover-right");
};