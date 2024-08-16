# Challenge decodificador de texto

:blush: ![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge) :blush:

## Objetivo:
Criar um **encriptador de texto** a fim de aplicar os conhecimentos adquiridos em lógica de programação e desenvolvimento web.

## Linguagens utilizadas:
HTML, CSS e javascript.

## Conteúdo de apoio:

- Figma:
    - https://www.figma.com/design/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?node-id=0-1&t=Vb0UoUOgkmeTNKRF-0
- Trello:
    - https://trello.com/b/qmLsVkkq/decodificador-de-texto-alura-challenges-oracle-one
- Infográfico do decodificador de texto:
    - https://caelum-online-public.s3.amazonaws.com/one-tgf/Challenge_-_Decodificador_vfinal_4.pdf

## Requisitos:
Crie um encriptador de texto, onde:

* A letra "**e**" é convertida para "**enter**"
* A letra "**i**" é convertida para "**imes**"
* A letra "**a**" é convertida para "**ai**"
* A letra "**o**" é convertida para "**ober**"
* A letra "**u**" é convertida para "**ufat**"

- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais  
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

        Por exemplo:
            "gato" => "gaitober"
            gaitober" => "gato"

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
- O resultado deve ser exibido na tela.


* Extra:
    * Um rodapé com os dados da pessoa que desenvolveu o site.
    * Um botão que copie o texto (ctrl + c).


## Neste desafio utilizamos:

1. Diversas **tags HTML** no arquivo index.html para criação do corpo da página e sua respectivas **classes**, posteriormente utilizadas no arquivo style.css para a estilização da página.

2. Declarações de **variáveis e funções** no script.js.

3. A **substituíção global /string/g** para selecionar toda ocasião em que determinada letra aparece e o método **.replace** para substituir o que foi selecionado por outro valor contido entre aspas. 

    exemplo:
        let palavraInicial = "abacate";
        let palavraNova = palavraInicial.replace(/a/g, "ai");
        console.log(palavraNova);


4. **Regex para validação**: 

- A regex /[^a-zA-Z ]/g corresponde a todos os caracteres que não são letras (maiúsculas ou minúsculas) ou espaços. Todos os outros caracteres serão substituídos por uma string vazia.

Fonte: 
- https://blog.ramongomes.com.br/remover-caracteres-especiais-js/