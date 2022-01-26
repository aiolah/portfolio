// Quand on clique sur un jour de la semaine, le texte change
for(day of document.getElementsByClassName("day"))
{
    day.addEventListener("click", deplieTexte);
}

// Tableau associatif
let content = [];
// LUNDI
content["lundi"] = "<h2>👕 LUNDI - Secours catholique 👕</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong>Fonsorbes</strong></p>" +
"<p>Le lundi après-midi, c'est <strong>tri de vêtements</strong> !<br><br> Je retrouve mes collègues au vestiaire (une ancienne crèche) où sont stockés tous les habits que nous possédons déjà. Là, nous recevons les nouveaux dons (vêtements et chaussures) et les trions, selon qu'ils soient pour homme, femme, enfant ou bébé. Pour ce faire, nous vérifions leur état (pas de taches ou de trous) et évaluons arbitrairement si le vêtement est encore mettable ou pas. Ensuite, nous le rangeons dans les bacs. En général, ils sont pleins... dans ce cas, nous mettons les habits " + '" à Vertex"' + ".<br><em>Vertex</em> est une association rattachée à Emmaüs qui récupère des textiles et des chaussures pour les revendre ou leur redonner une seconde vie. Les habits ne sont donc pas perdus !<br><br> Nous recevons aussi toute personne qui souhaite acheter des vêtements. Après avoir sélectionné les articles qui l'intéressait, nous les comptons pour fixer le prix. Ceux-ci sont réduits, par exemple un haut vaut 1€.</p>";
// MARDI
content["mardi"] = "<h2>🍎 MARDI - Secours catholique 🍎</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong>Fonsorbes</strong></p>" +
"<p>Le mardi après-midi, je fais des <strong>colis alimentaires</strong> !<br><br> Au local du secours catholique qui jouxte l'église, nous accueillons les bénéficiaires des colis. Ils sont en moyenne 10 par semaine. Là, selon leurs besoins, nous leur préparons un colis.<br><br> Voici la composition d'un colis type : <br>" +
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
"Avant de remplir le sac du bénéficiaire avec les articles, l'une des bénévoles consigne sur une feuille la composition du colis. Cela nous aide à préparer le colis à l'avance quand nous savons qui va passer et à vérifier que personne n'abuse du système en demandant 2 semaines d'affilé du cacao par exemple.<br><br> Les bénéficiaires ne payent pas pour leur colis.<br><br> Le Secours catholique acquiert toutes ces denrées lors de collectes alimentaires organisées aux supermarchés du coin. J'ai pu participer à l'une d'entre elle :</p>";
// MERCREDI
content["mercredi"] = "<h2>☕ MERCREDI - Secours catholique/Croix-Rouge ☕</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong>Fonsorbes</strong></p>" +
"<ul>" +
    "<li>" +
        "<h3>Café solidaire, Secours catholique (1 semaine sur 2)</h3>" + 
        "<p>Rendez-vous à la maison paroissiale près de l'église le mercredi matin ! Que vous soyez une personne seule, isolée ou simplement un visiteur en quête de compagnie, vous êtes le/la bienvenu.e. Nous vous proposerons un café, une infusion ou un chocolat accompagné de petits gâteaux.<br> Le café solidaire, c'est 2 heures de convivialité en compagnie des super membres du secours catholique.</p>" +
    "</li>" +
    "<li>" +
        "<h3>Colis alimentaires, Croix-Rouge : épicerie sociale (1 semaine sur 2)</h3>" + 
        "<p>Ce service ressemble à celui du mardi, à quelques détails près. Tout d'abord, il y a beaucoup plus de bénéficiaires que pour le Secours catholique. Ils sont entre 40 et 50 chaque mercredi. Autre différence, les bénéficiaires doivent payer 1 dixième du prix total de leur colis. Concernant les produits, l'épicerie sociale propose, en plus des produits secs, des produits frais comme des oeufs, de la viande, du fromage, des yaourts et des surgelés.<br><br> C'est la banque alimentaire de Toulouse qui fournit les denrées de l'épicerie sociale. Les bénévoles de l'épicerie s'y rendent le mardi après-midi avec un camion pour les récupérer.</p>" +
    "</li>" +
"</ul>";
// JEUDI
content["jeudi-et-vendredi"] = "<h2>🧹 JEUDI & VENDREDI - Banque Alimentaire (BA) 🧹</h2>" +
"<p class='localisation'><img src='images/marqueur.png' alt='Marqueur' id='marqueur'><strong>Toulouse</strong></p>" +
"<p>La Banque Alimentaire dispose de plusieurs entrepôts et chambres froides où elle stocke des produits secs et frais. Elle fournit diverses associations du département en denrées. Celles-ci sont obtenues grâce aux collectes alimentaires et les dons de supermarchés.<br><br> Plusieurs tâches attendent les bénévoles de la BA : " +
    "<ul>" +
        "<li>Tri des fruits et légumes</li>" +
        "<li>Tri des produits frais selon la DLC (Date Limite de Consommation)</li>" +
        "<li>Remplissage des glacières des associations avec les produits frais</li>" +
        "<li>Jeter les denrées périmées</li>" +
        "<li>Jeter les cartons dans la benne</li>" +
        "<li>Nettoyage des sols au balais ou à la raclette</li>" +
    "</ul>" +
"</p>";

function deplieTexte(e)
{
    for(day of document.getElementsByClassName("day"))
    {
        day.classList.remove("selection");
    }
    e.target.classList.add("selection");
    document.getElementById("content").innerHTML = content[e.target.id];
}