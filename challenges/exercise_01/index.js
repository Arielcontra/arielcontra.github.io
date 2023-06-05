const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btnSubmit = document.getElementById("submit");
const dynamicText = document.querySelector("dynamicText");
const btnSelected = document.getElementsByClassName("button");


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
        window.location.href = "/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 1 out of 5";
        
    });
    
});

btn2.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "/desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 2 out of 5";
    });
    
});

btn3.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 3 out of 5";
    });
    
});

btn4.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 4 out of 5";
    });
    
});

btn5.addEventListener("click", function() {
    btnSubmit.addEventListener("click",function(){
        window.location.href = "desktop-thank-you-state.html";
        dynamicText.innerHTML = "You selected 5 out of 5";
    });
    
});
