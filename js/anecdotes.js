// Clique ici pour découvrir quelque chose à propos de moi :)
let quotes = ["Mon IDE préféré est Visual Studio Code 📄", "Mon parfum de glace préféré est la vanille 🍦", "J'aimerais devenir développeuse web ou mobile 👩🏽‍💻", "Je sais jouer de la flûte traversière et du piano 🎹", "J'aime les films et séries d'animation japonaise 🐉", "J'adore le chocolat 🍫"];
let rank = 0;
document.getElementById("quote").addEventListener("click", changeQuote);
function changeQuote(e)
{
    if(rank == quotes.length)
    {
        rank = 0;
    }
    e.target.innerHTML = quotes[rank];
    rank++;
}