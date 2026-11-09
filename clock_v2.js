// Deuxième version de l'horloge. Utiliser le concept d'objet pour représenter les clocks.

const clocks = [
	{title: "Les enquêteurs sont en danger !", progress: 3, segments: 6},
	{title: "Prout", progress: 2, segments: 4},
]

function showClock(clock) {
	const clk = document.createElement("div")
	clk.setAttribute("class", "clock")
	const txt = document.createElement("input")
	txt.setAttribute("type", "text")
	clk.append(txt)
	const mb = document.createElement("button")
	mb.setAttribute("class", "minusButton")
	clk.append(mb)
	const pb = document.createElement("button")
	pb.setAttribute("class", "plusButton")
	clk.append(pb)
	const pr = document.createElement("progress")
	pr.setAttribute("value", clock.progress)
	pr.setAttribute("max", clock.segments)
	return clk
}

function progIncrease(clock) {
	if (clock.progress < clock.segments) clock.progress++
}

function progDecrease(clock) {
	if (clock.progress != 0) clock.progress--
}

