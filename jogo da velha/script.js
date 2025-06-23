var jogador = "x";

function jogar(celula){

    //compara se a célula está vazia para assim quescrever
    if(celula.innerHTML == ""){
        
        // escreva a letra na célula
        celula.innerHTML = jogador;

        //alerta a variável jogador para a próxima jogada
        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "yellow";
        }else{
            jogador = "x"
            celula.style.backgroundColor = "blue";
        }
    }
}