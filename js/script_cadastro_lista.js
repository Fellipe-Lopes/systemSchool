function abrir(res){
    switch (res){
        case 1: //ficha de inscrição
            
            break;
        
        case 2: //aluno
            var verificacao = document.getElementById('aluno').classList.contains("mostrar");
            
            if(verificacao == false){
                document.getElementById('aluno').classList.add("mostrar");
                excluir("pai");
            }
            break;
        
        case 3: //pai
            var verificacao = document.getElementById('pai').classList.contains("mostrar");

            if(verificacao == false){
                document.getElementById('pai').classList.add("mostrar");
                excluir("aluno");
            }
            break; 
    }
}

function excluir(str){
    document.getElementById(str).classList.remove("mostrar");
}

