   
   function preencher(str,loc){
        let valor = document.getElementById(str).value;
        document.getElementById(loc).value = valor;
   }

   function pesquisarCep(){
     var cep = document.getElementById("cep_aluno").value;
     var url = 'https://viacep.com.br/ws/'+ cep +'/json';
     var request = new XMLHttpRequest();

     request.open('GET',url);
     
     request.onload = () =>{
          var response = JSON.parse(request.responseText);

          if(response.erro === true){
               alert("cep NAO encontrado");
          }else{
               document.getElementById("endereco_aluno").value = response.logradouro + " - " + response.bairro;
               document.getElementById("numero_aluno").value = response.logradouro;
          }
     }
     request.send();


   }
