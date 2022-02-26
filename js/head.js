// On redirige vers m.aiolah-vaiti.fr si on est sur un portable
if(window.innerWidth <= 480)
{
    window.location.href = "https://m.aiolah-vaiti.fr";
}

// On identifie l'url, en fonction de ça on change la balise meta description et la balise title
if(window.location.href == "https://aiolah-vaiti.fr/" || window.location.href == "https://m.aiolah-vaiti.fr/")
{
    document.querySelector("meta[name='description']").content = "Bienvenue sur le portfolio d'Aïolah Vaïti ! Découvrez mes réalisations, mon parcours, mon expérience ainsi que ma mission de service !";
    document.querySelector("title").innerHTML = "Accueil - Aïolah Vaïti";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=realisations" || window.location.href == "https://m.aiolah-vaiti.fr/?page=realisations")
{
    document.querySelector("meta[name='description']").content = "Explorez mes réalisations, de simples animations CSS aux projets PHP avec moteur de template !";
    document.querySelector("title").innerHTML = "Mes réalisations - Aïolah Vaïti";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=parcours" || window.location.href == "https://m.aiolah-vaiti.fr/?page=parcours")
{
    document.querySelector("meta[name='description']").content = "Voici mon parcours scolaire, universitaire et humanitaire. Apprenez-en plus sur mes stages et mon expérience professionnelle.";
    document.querySelector("title").innerHTML = "Mon parcours - Aïolah Vaïti";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=mission-de-service" || window.location.href == "https://m.aiolah-vaiti.fr/?page=mission-de-service")
{
    document.querySelector("meta[name='description']").content = "Utilisez un emploi du temps interactif qui vous permettra d'en apprendre davantage sur ma mission de service.";
    document.querySelector("title").innerHTML = "Ma mission de service - Aïolah Vaïti";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=contact" || window.location.href == "https://m.aiolah-vaiti.fr/?page=contact")
{
    document.querySelector("meta[name='description']").content = "Ma page de contact. Remplissez le formulaire si vous désirez m'envoyer un message 😉.";
    document.querySelector("title").innerHTML = "Contact - Aïolah Vaïti";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=mentions-legales" || window.location.href == "https://m.aiolah-vaiti.fr/?page=mentions-legales")
{
    document.querySelector("meta[name='description']").content = "La page des mentions légales, tout simplement.";
    document.querySelector("title").innerHTML = "Mentions légales - Aïolah Vaïti";
}