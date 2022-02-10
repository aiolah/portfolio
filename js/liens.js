// Si l'URL correspond à celle du lien, alors on ajout la classe active : le souligne
let links = ["https://aiolah-vaiti.fr/", "https://aiolah-vaiti.fr/?page=realisations", "https://aiolah-vaiti.fr/?page=parcours", "https://aiolah-vaiti.fr/?page=mission-de-service", "https://aiolah-vaiti.fr/?page=contact"];
let id = ["accueil", "realisations", "parcours", "mission-de-service", "contact"];

let linksNav = document.querySelectorAll("nav a");

for(let i = 0; i < links.length; i++)
{
    active(links[i], id[i]);
}

/**
 * Retire la classe active pour tous les liens, la rajoute au lien correspondant à l'url
 * @param {string} lien Url du site
 * @param {string} id Id de l'item de liste du menu
 */
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