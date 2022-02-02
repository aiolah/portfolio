// On identifie l'url, en fonction de ça on change la balise meta description
if(window.location.href == "https://aiolah-vaiti.fr/")
{
    document.querySelector("meta[name='description']").content = "Bienvenue sur le portfolio d'Aïolah Vaïti ! Découvrez mes réalisations, mon parcours, mon expérience ainsi que ma mission de service !";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=realisations")
{
    document.querySelector("meta[name='description']").content = "Explorez mes réalisations, de simples animations CSS aux projets PHP avec moteur de template !";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=parcours")
{
    document.querySelector("meta[name='description']").content = "Voici mon parcours scolaire, universitaire et humanitaire. Apprenez-en plus sur mes stages et mon expérience professionnelle.";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=mission-de-service")
{
    document.querySelector("meta[name='description']").content = "Utilisez un emploi du temps interactif qui vous permettra d'en apprendre davantage sur ma mission de service.";
}
else if(window.location.href == "https://aiolah-vaiti.fr/?page=contact")
{
    document.querySelector("meta[name='description']").content = "Ma page de contact. Remplissez le formulaire si vous désirez m'envoyer un message 😉.";
}