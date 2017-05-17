/**
 * Created by Ederson on 17/05/2017.
 */
function iniciaJogo() {
    var url = window.location.search;

    var nivel_jogo = url.replace("?", "");

    var tempo_segundos = 0;

    // 1 fácil -> 120 segundos
    if (nivel_jogo == 1){
        tempo_segundos = 120;

    }

    // 2 normal -> 60 segundos
    if (nivel_jogo == 2){
        tempo_segundos = 60;

    }

    // 3 difícil -> 30 segundos
    if (nivel_jogo == 3){
        tempo_segundos = 30;

    }

    //Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    //Quantidade de balões
    var qtde_baloes = 10;

    cria_baloes(qtde_baloes);

    //Imprimir a quantidade de balões inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    
    //Imprimir a quantidade de balões estourados
    document.getElementById('baloes_estourados').innerHTML = 0;
    
}

function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++){

        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao);
    }
}