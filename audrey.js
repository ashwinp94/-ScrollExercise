let audrey = document.querySelector("#audrey")

document.addEventListener("scroll", function (event) {
  if (window.scrollY < 100){
    audrey.style.width = 100;
    audrey.style.height = 100;
    } else {
    if (window.scrollY >= 100)
    audrey.style.width = (window.scrollY) / 3 + "px"
    audrey.style.height = (window.scrollY) / 4 +"px"
    }
  })