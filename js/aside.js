// On toggle la classe open si on clique sur l'icône profil ; si on clique sur l'icône, l'image profil disparaît et l'icône croix apparaît
let container = document.querySelector("#container");
let profile = document.getElementById("profile");
let cross = document.getElementById("cross");
profile.addEventListener("click", afficheAside);
cross.addEventListener("click", afficheAside);

/**
 * Affiche ou cache l'aside au clic sur l'icône, change l'icône
 */
function afficheAside()
{
    container.classList.toggle("open");
    profile.classList.toggle("iconNonActive");
    cross.classList.toggle("iconNonActive");
    profile.classList.toggle("iconActive");
    cross.classList.toggle("iconActive");
}