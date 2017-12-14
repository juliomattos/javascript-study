//instanciando todas as tabelas com a classe .paciente

var pacientes = document.querySelectorAll(".paciente");

//função para calculcar o IMC
function calculaImc(peso, altura){

	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}

// looping passando por todos os pacientes existentes na tabela
for (var i = 0; i < pacientes.length; i++) {

	//adicionando o valor de pacientes variavel devido as varias tabelas existentes a variavel paciente

	paciente = pacientes[i];	

	//pegando o valor contido na tabela peso e jogando na variavel
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
    
    //pegando o valor contido na tabela altura e jogando na variavel 
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	
	var tdImc = paciente.querySelector(".info-imc");

	//validando o peso e a altura
	var  pesoCorreto = true;
	var  alturaCorreto = true; 

	if(peso <= 0 || peso >= 500){
		console.log("Valor inválido!");
		tdImc.textContent = "Peso inválido!";
		pesoCorreto = false;
		//classList adiciona uma classe no html através do javscript
		paciente.classList.add("campo-invalido");

	}

	if(altura <= 0 || altura > 3.00){
		console.log("Altura inválida!");
		tdImc.textContent = "Altura inválida!";
		alturaCorreto = false;
		paciente.classList.add("campo-invalido");

	}
	//Caso tudo esteja correto o IMC é calculado nessa hora
	if(pesoCorreto && alturaCorreto){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}



