// Quand on clique sur un jour de la semaine, le texte change
for(day of document.getElementsByClassName("day"))
{
    day.addEventListener("click", deplieTexte);
}

// Tableau associatif
let content = [];
// LUNDI
content["lundi"] = "<h2>👕 LUNDI 👕</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong><a href='https://www.fonsorbes.fr/annuaires-associations/secours-catholique/' target='_blank'>Secours Catholique</a> de Fonsorbes</strong></p>" +
"<p class='p-mission'>Le lundi après-midi, c'est <strong>tri de vêtements</strong> !<br><br> Je retrouve mes collègues au vestiaire (une ancienne crèche) où sont stockés tous les habits que nous possédons déjà. Là, nous recevons les nouveaux dons (vêtements et chaussures) et les trions, selon qu'ils soient pour homme, femme, enfant ou bébé. Pour ce faire, nous vérifions leur état (pas de taches ou de trous) et évaluons arbitrairement si le vêtement est encore mettable ou pas. Ensuite, nous le rangeons dans les bacs. En général, ils sont pleins... dans ce cas, nous mettons les habits " + '" à Vertex"' + ".<br><em>Vertex</em> est une association rattachée à Emmaüs qui récupère des textiles et des chaussures pour les revendre ou leur redonner une seconde vie. Les habits ne sont donc pas perdus !<br><br>" +
"<img src='images/20220124_162902.jpg' alt='Aïolah Vaïti devant les bacs de vêtements' class='img-mission'>" +
"Nous recevons aussi toute personne qui souhaite acheter des vêtements. Après avoir sélectionné les articles qui l'intéressait, nous les comptons pour fixer le prix. Ceux-ci sont réduits, par exemple un haut vaut 1€.</p>";
// MARDI
content["mardi"] = "<h2>🍎 MARDI 🍎</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong><a href='https://www.fonsorbes.fr/annuaires-associations/secours-catholique/' target='_blank'>Secours Catholique</a> de Fonsorbes</strong></p>" +
"<p class='p-mission'>Le mardi après-midi, je fais des <strong>colis alimentaires</strong> !<br><br> Au local du Secours Catholique qui jouxte l'église, nous accueillons les bénéficiaires des colis. Ils sont en moyenne 10 par semaine. Là, selon leurs besoins, nous leur préparons un colis.<br><br> Voici la composition d'un colis type : <br>" +
"<ul>" +
    "<li>Fruits et légumes frais (selon les dons d'Intermarché et Carrefour)</li>" +
    "<li>1 Conserve de légumes (<span id='exemple'>ex:</span> petit pois, petit pois et carottes, haricots verts/blancs/rouges, lentilles, flageolets, poêlée paysanne)</li>" +
    "<li>1 Conserve de viande (<span id='exemple'>ex:</span> raviolis, couscous, cassoulet, saucisses et lentilles, petit salé, gratin dauphinois)</li>" +
    "<li>1 Conserve de poisson (<span id='exemple'>ex:</span> thon, sardines, maquereaux)</li>" +
    "<li>1 Paquet de pâtes</li>" +
    "<li>1 Boîte de riz</li>" +
    "<li>1 Sauce tomate</li>" +
    "<li>1 Soupe</li>" +
"</ul>" +
"<p>Selon les goûts, les préférences et les besoins :</p>" +
"<ul>" +
    "<li>1 Paquet de café</li>" +
    "<li>1 Boîte de cacao</li>" +
    "<li>1 Boîte de céréales</li>" +
    "<li>1 Boîte de fruits au sirop</li>" +
    "<li>1 Pot de confiture</li>" +
    "<li>1 Paquet de biscuits</li>" +
    "<li>Des compotes (en pots ou en gourde)</li>" +
    "<li>Sel</li>" +
    "<li>Huile</li>" +
    "<li>Farine</li>" +
    "<li>Sucre (en morceaux ou en poudre)</li>" +
    "<li>Des produits d'hygiène (<span id='exemple'>ex:</span> dentifrice, savon, gel douche, shampooing, rasoir, gel, mousse à raser, protections féminines)" +
"</ul>" +
"Avant de remplir le sac du bénéficiaire avec les articles, l'une des bénévoles consigne sur une feuille la composition du colis. Cela nous aide à préparer le colis à l'avance quand nous savons qui va passer et à vérifier que personne n'abuse du système en demandant 2 semaines d'affilé du cacao par exemple.<br><br> Les bénéficiaires ne payent pas pour leur colis.<br><br> Le Secours Catholique acquiert toutes ces denrées lors de collectes alimentaires organisées aux supermarchés du coin. J'ai pu participer à l'une d'entre elle :" +
"<img src='images/20211009_110830.jpg' alt='Collecte alimentaire' class='img-mission'>" +
"</p>";
// MERCREDI
content["mercredi"] = "<h2>☕ MERCREDI ☕</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong><a href='https://www.fonsorbes.fr/annuaires-associations/secours-catholique/' target='_blank'>Secours Catholique</a> de Fonsorbes,<br><a href='https://www.croix-rouge.fr/Annuaire/Equipe-Locale-DE-FONSORBES7' target='_blank'>Croix-Rouge</a> de Fonsorbes</strong></p>" +
"<ul  class='p-mission ul-mercredi'>" +
    "<li>" +
        "<h3>Café solidaire, Secours Catholique (1 semaine sur 2)</h3>" + 
        "<p>"+
            "Rendez-vous à la maison paroissiale près de l'église le mercredi matin ! Que vous soyez une personne seule, isolée ou simplement un visiteur en quête de compagnie, vous êtes le/la bienvenu.e. Nous vous proposerons un café, une infusion ou un chocolat accompagné de petits gâteaux.<br> Le café solidaire, c'est 2 heures de convivialité en compagnie des super membres du Secours Catholique." +
            "<img src='images/20210804_101616.jpg' alt='Café solidaire' class='img-mission'>" +
        "</p>" +
    "</li>" +
    "<li>" +
        "<h3>Colis alimentaires, Croix-Rouge : épicerie sociale (1 semaine sur 2)</h3>" + 
        "<p>Ce service ressemble à celui du mardi, à quelques détails près. Tout d'abord, il y a beaucoup plus de bénéficiaires que pour le Secours Catholique. Ils sont entre 40 et 50 chaque mercredi. Autre différence, les bénéficiaires doivent payer 1 dixième du prix total de leur colis. Concernant les produits, l'épicerie sociale propose, en plus des produits secs, des produits frais comme des oeufs, de la viande, du fromage, des yaourts et des surgelés.</p>" +
        "<img src='images/20220209_093112.jpg' alt='Épicerie sociale' class='img-mission'>" +
        "<p>C'est la Banque Alimentaire de Toulouse qui fournit les denrées de l'épicerie sociale. Les bénévoles de l'épicerie s'y rendent le mardi après-midi avec un camion pour les récupérer.</p>" +
    "</li>" +
"</ul>";
// JEUDI
content["jeudi-et-vendredi"] = "<h2>🧹 JEUDI & VENDREDI 🧹</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong><a href='https://ba31.banquealimentaire.org/' target='_blank'>Banque Alimentaire</a> de Toulouse</strong></p>" +
"<p class='p-mission'>La Banque Alimentaire (BA)</a> dispose de plusieurs entrepôts et chambres froides où elle stocke des produits secs et frais. Elle fournit diverses associations du département en denrées. Celles-ci sont obtenues grâce aux collectes alimentaires et les dons de supermarchés.<br><br> Plusieurs tâches attendent les bénévoles de la BA : " +
    "<ul>" +
        "<li>" +
            "Tri des fruits et légumes" +
            "<img src='images/20220127_143230.jpg' alt='Tri des fruits et légumes' class='img-li-mission'>" +
        "</li>" +
        "<li>Tri des produits frais selon la DLC (Date Limite de Consommation)</li>" +
        "<li>" +
            "Remplissage des glacières des associations avec les produits frais" +
            "<img src='images/20220128_130814.jpg' alt='Aliments pour les associations' class='img-li-mission'>" +
        "</li>" +
        "<li>Jeter les denrées périmées</li>" +
        "<li>Jeter les cartons dans la benne</li>" +
        "<li>" +
        
            "Nettoyage des sols au balais et/ou à la raclette" +
            "<video muted autoplay loop>" +
                "<source src='videos/20220127_144828.mp4' type='video/mp4'>" +
            "</video>" +
            "<video muted autoplay loop>" +
                "<source src='videos/20220127_145701.mp4' type='video/mp4'>" +
            "</video>" +

        "</li>" +
    "</ul>" +
"</p>";

/**
 * Supprime la classe selection pour tous les jours de la semaine, l'ajoute au jour sélectionné, affiche le texte correspondant au jour sélectionné
 * @param {event} e 
 */
function deplieTexte(e)
{
    for(day of document.getElementsByClassName("day"))
    {
        day.classList.remove("selection");
    }
    e.target.classList.add("selection");
    document.getElementById("content").innerHTML = content[e.target.id];
}