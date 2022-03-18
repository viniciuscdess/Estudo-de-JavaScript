//As propriedas aceitam qualquer tipo de dados
//Booleanos, number, string e array

let maquina = {
	material: "Aço inox",
	equipamentos: ['motor','freio','esteira','cilindro'],
	vaiMontada: true,
	numeroDeMotores: 1,
};

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos);

for(let i = 0; i < maquina.equipamentos; i++) {
	console.log(maquina.equipamentos[i]);
}

if(maquina.vaiMontada == false) {
	console.log("O comprador precisa montar a máquina");
}else {
	console.log("A maquina ja vem montada!");
}