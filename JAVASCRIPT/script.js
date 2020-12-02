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

document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton');
	cache.addEventListener('click', cacheTexte);
   document.getElementById('tog1').style.display = 'none';
   
	function cacheTexte() {
		let para = document.getElementById('tog1');
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton').innerHTML = 'Voir moins';
		} else {
      para.style.display = 'none';
      document.getElementById('bouton').innerHTML = 'Voir plus';
		}
	}
});

/* TEST D'UN AUTRE BOUTON*/                     /* POUR CREER UN NOUVEAU BOUTON IL SUFFIT DE CHANGER LES ID DANS LE HTML ET LE JS*/
document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton2'/*ICI*/);
	cache.addEventListener('click', cacheTexte);
	document.getElementById('tog2'/*ICI*/).style.display = 'none';

	function cacheTexte() {
		let para = document.getElementById('tog2'/*ET ICI*/);
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton2').innerHTML = 'Voir moins';
		} else {
      para.style.display = 'none';
      document.getElementById('bouton2').innerHTML = 'Voir plus';
		}
	}
});



document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton3'/*ICI*/);
	cache.addEventListener('click', cacheTexte);
	document.getElementById('tog3'/*ICI*/).style.display = 'none';

	function cacheTexte() {
		let para = document.getElementById('tog3'/*ET ICI*/);
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton3').innerHTML = "Réduire l'onglet";
		} else {
      para.style.display = 'none';
      document.getElementById('bouton3').innerHTML = "La VR c'est quoi ?";
		}
	}
});



document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton4'/*ICI*/);
	cache.addEventListener('click', cacheTexte);
	document.getElementById('tog4'/*ICI*/).style.display = 'none';

	function cacheTexte() {
		let para = document.getElementById('tog4'/*ET ICI*/);
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton4').innerHTML = 'Voir moins';
		} else {
      para.style.display = 'none';
      document.getElementById('bouton4').innerHTML = 'Voir plus';
		}
	}
});

document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton5'/*ICI*/);
	cache.addEventListener('click', cacheTexte);
	document.getElementById('tog5'/*ICI*/).style.display = 'none';

	function cacheTexte() {
		let para = document.getElementById('tog5'/*ET ICI*/);
		if (para.style.display == 'none') {
      para.style.display = 'block';
      document.getElementById('bouton5').innerHTML = "Réduire l'onglet";
		} else {
      para.style.display = 'none';
      document.getElementById('bouton5').innerHTML = "Quelques exemples ?";
		}
	}
});
// ---------------------- Fin ---------------------- //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //

// -------- Savoir si un élément est sticky -------- //
//###================___EN COURS___==================// 4%
// To check when element get's position sticky
