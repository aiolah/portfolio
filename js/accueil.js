// Menu burger : si on clique sur l'icône, le menu apparaît + icône qui change
let menuBurger = document.getElementById("menu-burger");
let menuBurgerCross = document.getElementById("menu-burger-cross");
menuBurger.addEventListener("click", afficheMenu);
menuBurgerCross.addEventListener("click", afficheMenu);
function afficheMenu()
{
    document.querySelector("nav").classList.toggle("open");
    document.querySelector("nav ul").classList.toggle("open");
    menuBurger.classList.toggle("iconNonActive");
    menuBurgerCross.classList.toggle("iconNonActive");
    menuBurger.classList.toggle("iconActive");
    menuBurgerCross.classList.toggle("iconActive");
}

// On toggle la classe open si on clique sur l'icône profil
let container = document.querySelector("#container");
document.getElementById("profil").addEventListener("click", afficheAside);
function afficheAside()
{
    container.classList.toggle("open");
    document.getElementById("profil").classList.toggle("open");
}