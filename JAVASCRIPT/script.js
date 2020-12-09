// ---------- Barre de progression du site ---------- //
window.onload = () => {
    document.getElementById("progress").style.width = 0+"px"

    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () =>{

        var nav = document.getElementsByClassName("menu"); // Récupération de l'élément 'menu' dans la variable 'nav'
        var navPosY = nav.offsetTop;                       // Récupération de la position horizontale de 'nav' dans la variable 'navPosY'
        console.log(navPosY);                              // Affichage dans la console de la valeur de la variable 'navPosY'

        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth
        var el = document.getElementsByClassName('body')
        el = el.clientHeight
        //console.log(el)

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
    })
}
// ----------------------- Fin -----------------------  //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  //

// ---------- Boutons qui affichent le texte ---------- //
function toggleDisplay(id){
    const element = document.getElementById(id);
    if(!element) return;
    element.classList.toString().includes("hidden") ? element.classList.remove("hidden") : element.classList.add("hidden");
}






/*document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton3');
	cache.addEventListener('click', cacheTexte);
	document.getElementById('tog3').style.display = 'none';

	function cacheTexte() {
		let para = document.getElementById('tog3');
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton3').innerHTML = "Réduire l'onglet";
		} else {
      para.style.display = 'none';
      document.getElementById('bouton3').innerHTML = "La VR c'est quoi ?";
		}
	}
});*/
// ---------------------- Fin ---------------------- //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //

// -------- Savoir si un élément est sticky -------- //
//###================___EN COURS___==================// 4%
// To check when element get's position sticky
