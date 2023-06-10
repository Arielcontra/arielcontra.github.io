const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btnSubmit = document.getElementById("submit");
const btnSelected = document.getElementsByClassName("button");
const select = document.getElementById("select");
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');


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
    div1.style.display = 'none';
    div2.style.display = 'flex';
};


btn1.addEventListener("click", function() {
    select.innerHTML = " 1 ";
});

btn2.addEventListener("click", function() {
    select.innerHTML = " 2 ";
});

btn3.addEventListener("click", function() {
    select.innerHTML = " 3 ";
});

btn4.addEventListener("click", function() {
    select.innerHTML = " 4 ";
});

btn5.addEventListener("click", function() {
    select.innerHTML = " 5 ";
});
              
btnSubmit.addEventListener("click", cambiarDiv);
