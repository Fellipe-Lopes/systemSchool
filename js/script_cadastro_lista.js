function abrir(res){
    switch (res){
        case 1: //ficha de inscrição
            var verificacao = document.getElementById('ficha').classList.contains("mostrar");
                
            if(verificacao == false){
                document.getElementById('ficha').classList.add("mostrar");
                excluir("aluno");
                excluir("pai");
                excluir("mae");
                
            }
            break;
        
        case 2: //aluno
            var verificacao = document.getElementById('aluno').classList.contains("mostrar");
            
            if(verificacao == false){
                document.getElementById('aluno').classList.add("mostrar");
                excluir("ficha");
                excluir("pai");
                excluir("mae");
            }
            break;
        
        case 3: //pai
            var verificacao = document.getElementById('pai').classList.contains("mostrar");

            if(verificacao == false){
                document.getElementById('pai').classList.add("mostrar");
                excluir("ficha");
                excluir("aluno");
                excluir("mae");
            }
            break; 

        case 4: //mae
            var verificacao = document.getElementById('mae').classList.contains("mostrar");

            if(verificacao == false){
                document.getElementById('mae').classList.add("mostrar");
                excluir("ficha");
                excluir("aluno");
                excluir("pai");
            }
            break; 
    }
}

function excluir(str){
    document.getElementById(str).classList.remove("mostrar");
}

