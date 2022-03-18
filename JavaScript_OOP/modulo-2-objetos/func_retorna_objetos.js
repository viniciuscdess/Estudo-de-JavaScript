function criarCarro(modelo,portas,aro,tetoSolar) {
	return {
		modeloDoCarro: modelo,
		portas: portas,
		aro: aro,
		tetoSolar: tetoSolar,
		ligarCarro: function() {
			console.log("ligou");
		},
		temTetoSolar: function() {
			if(this.tetoSolar == true){
				console.log("tem tetoSolar");
			}else{
				console.log("nao tem tetoSolar");
			}
		}
	}
}

let ferrari = criarCarro("ferrari 488", 4, 20, true);

console.log(ferrari);

ferrari.ligarCarro();

ferrari.temTetoSolar();