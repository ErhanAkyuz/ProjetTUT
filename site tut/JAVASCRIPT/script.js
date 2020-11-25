// ---------- Barre de progression du site ---------- //
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
        var el = document.getElementsByClassName('body')
        el = el.clientHeight
        console.log(el)

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
window.addEventListener('load', horloge);

function horloge() {
	let d = new Date();
	document.getElementById('heure').innerHTML = d.toLocaleTimeString();
	setTimeout(horloge, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
	let cache = document.getElementById('bouton');
	cache.addEventListener('click', cacheHorloge);
	document.getElementById('tog').style.display = 'block';

	function cacheHorloge() {
		let para = document.getElementById('tog');
		if (para.style.display == 'block') {
			para.style.display = 'none';
		} else {
			para.style.display = 'block';
		}
	}
});

// ---------------------- Fin ---------------------- //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //

// -------- Savoir si un élément est sticky -------- //
//#==================___EN COURS___==================// 2% t nul
//to check when element get's position sticky
