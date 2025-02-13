let btn1 = document.querySelector(`#btn1`)
let btn2 = document.querySelector(`#btn2`)

function moreless() {
  let dots = document.querySelector(".dot");
  let moreText = document.querySelector(".more");
  let btnText = btn1;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "less"; 
    moreText.style.display = "inline";
  }
}
function moreless2() {
    let dots = document.querySelector(".dot2");
    let moreText = document.querySelector(".more2");
    let btnText = btn2;
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "less"; 
      moreText.style.display = "inline";
    }
  }

btn1.addEventListener('click',moreless)
btn2.addEventListener('click',moreless2)
