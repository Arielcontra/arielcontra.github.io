const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btnSubmit = document.getElementById("submit");
const dynamicText = document.querySelector("dynamicText");
const btnSelected = document.getElementsByClassName("button");
// const select = document.getElementById("select");


function buttonSelected() {

  for (let i = 0; i < btnSelected.length; i++) {
    btnSelected[i].classList.remove("button-selected");
  };

  this.classList.add("button-selected");
};

for (let i = 0; i < btnSelected.length; i++) {
    btnSelected[i].addEventListener("click", buttonSelected);
};



btn1.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "challenges/exercise_01/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 1 out of 5";
        
    });
    
});

btn2.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "challenges/exercise_01/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 2 out of 5";
    });
    
});

btn3.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "challenges/exercise_01/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 3 out of 5";
    });
    
});

btn4.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "challenges/exercise_01/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 4 out of 5";
    });
    
});

btn5.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "challenges/exercise_01/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 5 out of 5";
    });
    
});


// document.addEventListener("DOMContentLoaded", function() {
//     let select = document.getElementById("select");
//     select.innerHTML = " 5 ";
//   });

// function printText(){
    
//     if (btn1.checked){
//         select.innerHTML = "1"
//     } else if (btn2.checked){
//         select.innerHTML = "2"
//     } else if (btn3.checked){
//         select.innerHTML = "3"
//     } else if (btn4.checked){
//         select.innerHTML = "4"
//     } else if (btn5.checked){
//         select.innerHTML = "5"
//     } 
// }

