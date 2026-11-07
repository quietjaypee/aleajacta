// Deuxième version de l'horloge. Utiliser le concept d'objet pour représenter les clocks.

const clocks = [
	{title: "Les enquêteurs sont en danger !", progress: 3, segments: 6},
	{title: "Prout", progress: 2, segments: 4},
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

function clockIncrease(clock) {
	if (clock.progression < clock.segments) {
		clock.progression++
		console.log(clock.progression)
		for (let i = 0; i < clock.progression; i++) {
			segments[i].style.backgroundColor= "rgb(255, 0, 0)"
		}
	}
}

function clockDecrease(clock) {
	if (clock.progression != 0) {
		clock.progression--
		console.log(clock.progression)
		for (let i = clock.segments - 1; i > clock.progression-1; i-- ) {
			segments[i].style.backgroundColor= "rgb(255, 0, 0)"
		}
	}
}

	
