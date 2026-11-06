// Deuxième version de l'horloge. Utiliser le concept d'objet pour représenter les clocks.

const clocks = [
	{titre: "Les enquêteurs sont en danger !", progression: 3, longueur: 6},
	{titre: "Prout", progression: 2, longueur: 4},
]

function creerClock(ti, pr, lo) {
	const nouvClock = {titre: ti, progression: pr, longueur: lo}
	let ajoutHTML = "";
	clocks.push(nouvClock)
	for (let i = 0; i < longueur; i++) {
		ajoutHTML += `<div class="progress"></div>`;	
	}
}
