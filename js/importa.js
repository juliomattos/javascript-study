var botaoImporta = document.querySelector(".bto-importa");

botaoImporta.addEventListener("click", function(){
  
  console.log("fui clicado")

  var xhr = new XMLHttpRequest(); // criando codigo de requisiçao

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abrindo conexão com a api
  xhr.addEventListener("load", function(){
  	var erroAjax = document.querySelector("#erro-ajax");

  	if (xhr.status == 200) {
  	erroAjax.classList.add("invisivel");	
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta);//convertendo as informações para json
    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente);
    })

    console.log(pacientes);
	}else{
		erroAjax.classList.remove("invisivel");
	}
  });
  
  xhr.send();

});