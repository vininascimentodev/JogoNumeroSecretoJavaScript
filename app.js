alert ('Bem vindo ao jogo do número secreto!')
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto)  {
    chute = prompt (`Digite um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) { 
       break;
    } else {
        if (chute > numeroSecreto) { 
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
    }    
    // tentativas = tentativas + 1;
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Boa! Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)




