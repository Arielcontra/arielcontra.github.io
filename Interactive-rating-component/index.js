const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const index = document.getElementById('index');
const success = document.getElementById('success');
const select = document.getElementById("select");
const btnSubmit = document.getElementById("submit");
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


function cambiarDiv() {
    index.style.display = 'none';
    success.style.display = 'flex';
};


function sendPrint(print) {
    btnSubmit.addEventListener("click", cambiarDiv);
    select.innerHTML = print;
  };

  
btn1.addEventListener("click", function() {
    sendPrint("1");
});

btn2.addEventListener("click", function() {
    sendPrint("2");
});

btn3.addEventListener("click", function() {
    sendPrint("3");
});

btn4.addEventListener("click", function() {
    sendPrint("4");
});

btn5.addEventListener("click", function() {
    sendPrint("5");
});
