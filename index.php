<?php 

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

require_once ("moteur_template.php");

if(isset($_GET['action']))
{
    $action = $_GET['action'];
    switch($action) {

        case "realisations" :

            echo $twig->render('realisations.html.twig', array());

        break;
        case "parcours" :

            echo $twig->render('parcours.html.twig', array());

        break;
        case "mission-de-service" :

            echo $twig->render('mission_de_service.html.twig', array("mission"=>true));

        break;
        case "contact" :

            echo $twig->render('contact.html.twig', array());

        break;
        case "mentions-legales" :

            echo $twig->render('mentions_legales.html.twig', array());

        break;
    }
}
else
{
    echo $twig->render('accueil.html.twig', array("accueil"=>true));
}


?>