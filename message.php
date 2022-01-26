<?php

ini_set( 'display_errors', 1 );
error_reporting( E_ALL );

// Définit le fuseau horaire à appliquer sur les fonctions dates du script (Paris !!)
date_default_timezone_set('Europe/Paris');

if(isset($_POST['prenom']) && isset($_POST['nom']) && isset($_POST['mail']) && isset($_POST['message']))
{
    // Envoi du mail avec les infos et le message
    $objet = "Nouveau message de " . $_POST['prenom'] . " " . $_POST['nom'];
    $message = "
    <html>
    <body>
        <p>De : " . $_POST['prenom'] . " " . $_POST['nom'] . ", " . $_POST['mail'] ."</p>
        <p>". $_POST['message'] ."</p>
    </body>
    </html>";
    
    $destinataire = "aiolah.vaiti@gmail.com";
    $headers = "Content-Type: text/html; charset=\"utf-8\"\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Date: " . date(DateTime::RFC2822) . "\n";
    $headers .= "From: \"Me\"<aiolah.vaiti@gmail.com>\n";
    $headers .= "Reply-To: aiolah.vaiti@gmail.com";
    
    mail($destinataire, $objet, $message, $headers);
    header('Location: https://aiolah-vaiti.fr/?action=contact&message=envoye');
}
else
{
    header('Location: https://aiolah-vaiti.fr/?action=contact&message=erreur');
}

?>