function Desenvolvedor(nome,anosExperiencia,linguagem) {
	this.nome = nome;

	this.anosExperiencia = anosExperiencia;

	this.linguagem = linguagem;

	this.salario = 0;

	this.calculaExperiencia = function() {
		if(this.anosExperiencia <= 2) {
			console.log("Você é um programador é Junior.");
		}else if(this.anosExperiencia <= 5) {
			console.log("Você é um programador é Pleno.");
		}else {
			console.log("Você é um programador é Senior.");
		}
	}

	this.calculaSalario = function() {
		this.salario = (this.anosExperiencia * 600);
		console.log("A média do seu salario como programador é " + this.salario + " reais.");
	}

	this.descricaoProgramador = function() {
		console.log("O " + this.nome + ", é um programador " + this.linguagem + " e sua média salarial é " + this.salario);
	}
}

let programador = new Desenvolvedor("Vinicius Carvalho",6,"PHP");

programador.calculaSalario();

programador.calculaExperiencia();

programador.descricaoProgramador();
