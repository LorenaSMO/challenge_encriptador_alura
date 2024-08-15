/*Declarar váriaveis ou constantes dos dois campos textarea */
let textArea = document.querySelector(".text-area1") /*entrada*/
let textArea2 = document.querySelector(".text-area2") /*saída criptografada*/

/*criar funções para onclick dos botões encriptar, desencriptar e copiar */

function btnEncriptar() {
    let encriptar = textArea.value.replace(/[^a-zA-Z ]/g, '').replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    textArea2.innerHTML = encriptar
    esconderMensagens() 
};

function btnDesencriptar() {
    let desencriptar = textArea.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textArea2.innerHTML = desencriptar
};

function btnCopiar() {
    let copiartexto = textArea2.value;
    navigator.clipboard.writeText(copiartexto);
}

// Criar função para que as mensagens e a imagem desapareçam após o clique

const tituloh6 = document.querySelector(".titulo-text-area2")
const paragrafo = document.querySelector(".p-text-area2")
const imagem = document.querySelector(".imagem")

function esconderMensagens() {
    tituloh6.style.display = "none"
    paragrafo.style.display = "none"
    imagem.style.display = "none"
    esconderbtn.style.display = "block"
}

const esconderbtn = document.querySelector(".btn-copiar")
function esconderBtnCopiar() {
    esconderbtn.style.display = "none"
}
esconderBtnCopiar()