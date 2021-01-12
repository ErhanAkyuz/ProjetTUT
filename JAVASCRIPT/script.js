// ------------- Barre de progression du site ------------- //
window.onload = () => {
    document.getElementById("progress").style.width = 0+"px"

    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () =>{

        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
    })
}
// -------------------------- Fin --------------------------  //


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //


// ------------- Boutons qui affichent le texte ------------- //
function toggleDisplay(id, buttonid, text){                     // La fonction toggleDisplay est lancée à chaque clic sur un bouton
    const element = document.getElementById(id);                // On récupère la section cachée par l'id renseigné
    const button = document.getElementById(buttonid);           // On récupère le bouton à l'aide de son id

    if(!element || !button) return;                             // On rentre dans la fonction seulement si les 'element' et 'button' existent
    element.classList.toString().includes("hidden") ?           // Test si la section possède la classe "hidden"
    button.innerHTML = text ?                                   // Test si le bouton comporte du texte quand il est cliqué
     text.display : "Voir moins" :                              // Si non on change le texte du bouton pour 'Voir moins'
     button.innerHTML = text ?                                  // Test si le bouton comporte du texte 
     text.hide : "Voir plus";                                   // Si non on change le texte du bouton pour 'Voir plus'

    element.classList.toString().includes("hidden") ?                       // Test si la section possède la classe "hidden"
    element.classList.remove("hidden") : element.classList.add("hidden");   // Si c'est le cas, on la supprime, sinon on la rajoute
}
// -------------------------- Fin --------------------------  //