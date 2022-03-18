try {
	throw new Error("Deu um error inesperado!"); //cria um erro
} catch(e) {
	console.log(e.name + ": " + e.message); //nome do erro e a mensagem
}