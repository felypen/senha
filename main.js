document.querySelector(".parametro-senha_botao");
const numeroSenha = document.querySelector(".parametro-snha_texto");

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector(".parametro-senha_botao");
botoes[0].onclick = diminuirTamanho;
botoes[0].onclick = aumentarTamanho;

console.log(botoes);

function diminuirTamanho(){
if (tamanhoSenha < 1){
    tamanhoSenha = tamanhoSenha - 1;
}
numeroSenha.textContent = tamanhoSenha
geraSenha();
}


function aumentarTamanho(){
if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;
}
numeroSenha.textContent = tamanhoSenha
geraSenha();
}

const campoSenha + document.querySelector("#campo-senha");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;

function geraSenha(){
   for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
}

campoSenha.value = letrasMaiusculas;
}
