let placarAmigo = 0
let placarInimigos = 0
let rodada = 1

function aleatorio(){
    let aleatorio = Math.floor(Math.random() * 3);
    switch(aleatorio){
        case 0:
            return 'pedra'

        case 1:
            return 'papel'

        case 2:
            return 'tesoura'

    }
}


function escolha(x){
    let placar = document.getElementById('vitorias')
    let placarInimigo = document.getElementById('vitoriasInimigas')
    let rodad = document.getElementById('rodada')
    placar.innerHTML = placarAmigo
    placarInimigo.innerHTML = placarInimigos
    rodad.innerHTML = rodada

    let guardarValor = aleatorio();

    if(x == guardarValor){
        rodada += 1
    }else if(x == 'pedra' && guardarValor == 'tesoura'){
        placarAmigo += 1
        rodada += 1
    }else if(x == 'papel' && guardarValor == 'pedra'){
        placarAmigo += 1
        rodada += 1
    }else if(x == 'tesoura' && guardarValor == 'papel'){
        placarAmigo += 1
        rodada += 1
    }else{
        placarInimigos += 1
        rodada += 1
    }
    
    let eu = document.getElementById('vc');
    let computer = document.getElementById('computador')
    computer.innerHTML = guardarValor
    eu.innerHTML = x

    placar.innerHTML = placarAmigo
    placarInimigo.innerHTML = placarInimigos
    rodad.innerHTML = rodada

    if(rodada == 10){
        if(placarAmigo > placarInimigos){
            alert('Você Venceu!')
        }else if(placarAmigo == placarInimigos){
            alert('Empate')
        }else{
            alert('você perdeu!')
        }
        window.location.href = './index.html'
    }
}
