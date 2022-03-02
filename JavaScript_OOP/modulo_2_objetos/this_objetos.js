let ninja = {
	classe: "profissional",
	arma:"shuriken",
	atirarArma() {
		console.log("Atirou a " + this.arma);
	},
	atirarDuasVezes() {
		for(let i = 2; i > 0; i--) {
			this.atirarArma(); //aparece dois, pq chama a função duas vezes
		}
	}
}

let ninja2 = {
	classe: "profissional",
	arma:"kunai",
	atirarArma() {
		console.log("Atirou a " + this.arma);
	}
}

ninja.atirarArma();
ninja2.atirarArma();

ninja.atirarDuasVezes();