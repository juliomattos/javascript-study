//Criando novos pacientes na tabela
var button = document.querySelector("#adicionar-paciente");
button.addEventListener("click", function(){
	
	// comando para não atualizar a pagina no momento de enviar os dados
	event.preventDefault();

	// instanciando o formulário, pegando o valor de cada campo e adicionando as respectivas variaveis
	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteDoForm(form);

    var pacienteTd = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0 ) {
    	var mensagemErro = document.querySelector("#mensagem-erro")
    	mensagemErro.textContent = erros;
    	return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTd);

    form.reset();

//criando uma função que cria objeto paciente
function obtemPacienteDoForm(form){

	var paciente = {

	nome : form.nome.value,
	peso : form.peso.value,
	altura : form.altura.value,
	gordura : form.gordura.value,
	imc : calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

//funcção para montar a tabela 
function montaTr(paciente){

	//criando uma nova tabela e adicionando as classes 
	var pacienteTd = document.createElement("tr");
	pacienteTd.classList.add("paciente");

	//puxar a função de montar as TDs e inputar dentro da tabela
	pacienteTd.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTd.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTd.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTd.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTd.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTd;
}

//função de motar as TDs
function montaTd(dado,classe){

	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

return td;
}

//validando o pacinte para monstrar o erro antes de adicionar
function validaPaciente(paciente){

	erro = [];

	if (!validaPeso(paciente.peso)) {
		erro.push("Peso inválido!")
	}
	if (!validaAltura(paciente.altura)) {
		erro.push("Altura inválida!")
	}

	return erro;
}

	console.log(paciente);

});






