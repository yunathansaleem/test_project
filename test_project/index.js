let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".header .navbar")

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}


  
  const boxContainer = document.querySelector('.box-container');

  boxContainer.style.display = 'grid';
  boxContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
  boxContainer.style.gap = '3rem';
  boxContainer.style.padding = '50px';

  
