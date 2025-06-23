document.querySelector(".parametro-senha_botao");
const numeroSenha = document.querySelector(".parametro-snha_texto");

let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector(".parametro-senha_botao");
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@#$%¨&*?/=+-_'

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

const campoSenha = document.querySelector("#campo-senha");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz" ;
const numeros = ("0123456789") ;
const simbolos = ("@!#$%¨&*?/+") ;

function geraSenha(){
   for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = letrasMaiusculas;
}
const checkbox = document.querySelectorAll(".checkbox");
for (i=0; < i checkbox.length;++){
    checkbox[i].onclick = geraSenha;
}
console.log(checkbox);

const forcaSenha = document.querySelectorAll(".forca");
 
function classificaSenha(){
    forcaSenha.classiList.remove('fraca', 'media', 'forte');
    if(tamanho > 11){
    forcaSenha.classiList.add('forte');
 }else if (tamanhoSenha> 5 && tamanhoSenha < 12){
forcaSenha.classiList.add('media');
 }else if (tamanhoSenhac < 6){
forcaSenha.classiList.add('fraca');
}
}