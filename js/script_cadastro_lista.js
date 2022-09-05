function abrir(res){


switch (res){
    case 1:
        
        break;
    
    case 2:
        var verificacao = document.getElementById('aluno').classList.contains("mostrar");
        
        if(verificacao == false){
            document.getElementById('aluno').classList.add("mostrar");
            document.getElementById('pai').classList.remove("mostrar");
        }
        break;
    
    case 3:
        var verificacao = document.getElementById('pai').classList.contains("mostrar");
        
        if(verificacao == false){
            document.getElementById('aluno').classList.remove("mostrar");
            document.getElementById('pai').classList.add("mostrar");
        }
        
        break;
    
}

}

