document.querySelector(".parametro-senha_botao");
const numeroSenha = document.querySelector(".parametro-snha_texto");

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector(".parametro-senha_botao");
botoes[0].onclick = diminuirTamanho;
botoes[0].onclick = aumentarTamanho;

console.log(botoes);

function diminuirTamanho(){
tamanhoSenha = tamanhoSenha - 1;
numeroSenha.textContent = tamanhoSenha
}

function aumentarTamanho(){
tamanhoSenha = tamanhoSenha - 1;
numeroSenha.textContent = tamanhoSenha
}