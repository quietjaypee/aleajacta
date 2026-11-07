// Deuxième version de l'horloge. Utiliser le concept d'objet pour représenter les clocks.

const clocks = [
	{title: "Les enquêteurs sont en danger !", progression: 3, segments: 6},
	{title: "Prout", progression: 2, segments: 4},
]

function showClock(clock) {
	const clk = document.createElement("div")
	clk.setAttribute("class", "clock")
	const mb = document.createElement("button")
	mb.setAttribute("class", "minusButton")
	clk.append(mb)
	for (let i = 0; i < clock.segments; i++ ) {
		const seg = document.createElement("div") 
		seg.setAttribute("class", "progress")
		clk.append(seg)
	}
	const pb = document.createElement("button")
	pb.setAttribute("class", "plusButton")
	clk.append(pb)
	return clk
}	
