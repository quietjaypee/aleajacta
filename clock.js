// Identifier les boutons + et -
// Quand je clique sur +, le prochain carré (de gauche à droite) devient rouge, quand je clique sur -, le carré précédent (de droite à gauche) redevient blanc 
let progression = 0
const segments = [];
let nbSegments = "";
const plusButton = document.getElementById("plusButton")
const minusButton = document.getElementById("minusButton")
plusButton.addEventListener("click", clockIncrease);
minusButton.addEventListener("click", clockDecrease);

//Selon le bouton cliqué, régler la clock à ce nombre de segments
function selSegments(nb) {
	nbSegments = nb;
	
	//Effacer les segments existants
	const segmentsPresents = document.querySelectorAll('div.progress')
	segmentsPresents.forEach(div => div.remove());
	segments.length = 0;
	progression = 0;

	//Créer le nombre de segments correspondant au bouton sélectionné
	for (let i = 0; i < nbSegments; i++) {
		const newSegment = document.createElement("div");
		newSegment.setAttribute("class", "progress");
		newSegment.setAttribute("id", `clock${i}`);
		segments.push(newSegment)

	//Insérer avant le bouton "+"
		const progressBar = document.getElementById("progressBar")
		progressBar.insertBefore(newSegment, plusButton)
	}
}

//Augmenter ou diminuer les segments selon le bouton cliqué
function clockIncrease() {
	if (progression < nbSegments) {
		progression++
		console.log(progression)
		for (let i = 0; i < progression; i++) {
			segments[i].style.backgroundColor= "rgb(255, 0, 0)"
		}
	}
}
function clockDecrease() {
	if (progression != 0) {
		progression--
		console.log(progression)
		for (let i = nbSegments - 1; i > progression-1; i-- ) {
			segments[i].style.backgroundColor= "rgb(255, 255, 255)"
		}
	}
}


