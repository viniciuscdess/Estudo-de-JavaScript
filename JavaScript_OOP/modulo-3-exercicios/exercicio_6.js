function comparar(obj1, obj2) {
	if(obj1 instanceof obj2) {
		console.log("O objeto " + obj1.nome + " é uma instancia de " + obj2.name);
	} else {
		console.log("O objeto " + obj1.nome + " não é uma instancia de " + obj2.name);
	}
}

// objetos
function Ninja(nome,quantidade) {
	this.nome = nome;
	this.quantidade = quantidade;

	this.atirar = function() {
		console.log("O " + this.nome + " atirou uma kunai");
	},

	this.atirouKunai = function(inimigo) {
		if(this.quantidade > 0) {
			console.log("O ninja atirou kunai");
			this.quantidade = (this.quantidade - 1);
			inimigo.vivo = false;
		}else{
			console.log("O ninja não pode mais atirar kunais");
		}
	}
}

function Inimigo(nome) {
	this.nome = nome;
	this.vivo = true;
}

let rocklee = new Inimigo("rocklee");

let naruto = new Ninja("naruto", 5);

comparar(naruto, Ninja);
comparar(rocklee, Ninja);
comparar(naruto, Inimigo);

