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
// ---------------------- Fin ---------------------- //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //

// ---------- Bouton qui affiche le texte ---------- //
/*
function toggle_text() {
    var span = document.getElementById("span_txt");
    if(span.innerHTML != "") {
      span.innerHTML = "";
    } else {
      //span.innerHTML = "Test (JS)";
        span.innerHTML = "<p class='article'> <strong>Le handicap psychique</strong> est une catégorie de handicap souvent confondue avec le handicap mental.Ce handicap touche plus de 80% des handicapés français et tocuhera 1/3 de la population dans sa vie. Ses manifestations sont nombreuses, allant de <strong>phobies</strong>,<strong>traumatismes</strong>,<strong>troubles mentaux</strong> et <strong>encore depressions.</strong></br><strong>L'handicap psychique</strong> est la conséquence de maladies mentales (à ne pas confondre avec le handicap mental) entrainant un déficit relationnel, desdifficultés de concentration, une grande variabilité dans la possibilité d'utilisation des capacités alors que la personne garde des facultés intellectuelles dites normales.La reconnaissance du handicap psychique s’effectue souvent par l’observation des conséquences de la maladie mentale dans le vécu de la personne. Celles-ci peuvent donc être extrêmement variées en fonction des individus et de leur pathologie. De fait, il n’existe pas de définition arrêtée du handicap psychique.</br>Voici quelque exemple : <ul><li>les troubles graves de la personnalité (personnalité borderline, par exemple)</li><li>certains troubles névrotiques graves comme les TOC (troubles obsessionnels compulsifs);</li><li>les Troubles du Spectre Autistique (TSA) ou troubles du développement (TDE);</li><li>les psychoses&nbsp;: altération de la perception du rapport à la réalité. Exemple&nbsp;: schizophrénie;</li><li>les troubles de l’humeur&nbsp;: maladies de l’affect. Exemple&nbsp;: dépression ou troubles bipolaires;</li></ul></p>";
      // Ca fonctionne mais le code est pas beau
        document.getElementById("span_button").style.position = "absolute";
        document.getElementById("span_button").style.top = "800px";
        document.getElementById("span_button").style.left = "1050px";
    }
  }
*/

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

// ---------------------- Fin ---------------------- //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //

// -------- Savoir si un élément est sticky -------- //
//#==================___EN COURS___==================// 2%
//to check when element get's position sticky
