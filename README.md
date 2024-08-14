# Challenge decodificador de texto

:blush: ![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge) :blush:

## Objetivo:
Criar um encriptador de texto a fim de aplicar os conhecimentos adquiridos em lógica de programação e desenvolvimento web.

## Linguagens utilizadas:
HTML, CSS e javascript.

## Conteúdo de apoio:

- Figma:
    - https://www.figma.com/design/tgsfq4mOYV4Lr7wIfaCCzb/Alura-Challenge---Desafio-1---L%C3%B3gica-(Copy)?node-id=0-1&t=1VCHM4fCK2yAMXXS-0
- Trello:
    - https://trello.com/b/MiA6s5pl/desafio-decodificador
- Infográfico do decodificador de texto:
    - https://caelum-online-public.s3.amazonaws.com/one-tgf/Challenge_-_Decodificador_vfinal_4.pdf

## Requisitos:
Crie um encriptador de texto, onde:

* A letra "e" é convertida para "enter"
* A letra "i" é convertida para "imes"
* A letra "a" é convertida para "ai"
* A letra "o" é convertida para "ober"
* A letra "u" é convertida para "ufat"

* Extra!
Um rodapé com os dados da pessoa que desenvolveu o site!

## Neste desafio utilizamos:

Diversas tags HTML no arquivo index.html para criação do corpo da página e sua respectivas classes, posteriormente utilizadas no arquivo style.css para a estilização da página.
Declarações de variáveis e funções no script.js.
A substituíção global /string/g para selecionar toda ocasião que determinada letra aparece e o método .replace para substituir o que foi selecionado por outro valor contido entre aspas. 

    exemplo:
        let palavraInicial = "abacate";
        let palavraNova = palavraInicial.replace(/a/g, "ai");
        console.log(palavraNova);