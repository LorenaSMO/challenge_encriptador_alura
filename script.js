/*Declarar váriaveis ou constantes */
let textArea = document.querySelector(".text-area1") /*entrada*/
let textArea2 = document.querySelector(".text-area2") /*saída criptografada*/

/*criar função para onclick dos botões encriptar, desencriptar e copiar */

function btnEncriptar() {
    let encriptar = textArea.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    textArea2.innerHTML = encriptar 
};

function btnDesencriptar() {
    let desencriptar = textArea.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textArea2.innerHTML = desencriptar
};

function btnCopiar() {
    let copiartexto = textArea2.value;
    navigator.clipboard.writeText(copiartexto);
}

/*usar .replace para substituir*/
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


/*criar evento para fazer a "Nenhuma mensagem encontrada" e o parágrafo desaparecer */
/*event listener... */








//substituíção global /string/g
// let a = "abacate abacate";
// let newa = a.replace(/a/g, "ai");
// console.log(newa); 