// Si l'URL correspond à celle du lien, alors on ajout la classe active
let links = ["https://aiolah-vaiti.fr/", "https://aiolah-vaiti.fr/?action=realisations", "https://aiolah-vaiti.fr/?action=parcours", "https://aiolah-vaiti.fr/?action=mission-de-service", "https://aiolah-vaiti.fr/?action=contact"];
let id = ["accueil", "realisations", "parcours", "mission-de-service", "contact"];

let linksNav = document.querySelectorAll("nav a");

for(let i = 0; i < links.length; i++)
{
    active(links[i], id[i]);
}


function active(lien, id)
{
    if(window.location.href == lien)
    {
        for(let i = 0; i < linksNav.length; i++)
        {
            linksNav[i].classList.remove("active");
        }
        document.getElementById(id).classList.add("active");
    }
}