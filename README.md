# Challenge decodificador de texto

:blush: ![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge) :blush:

## *Objetivo*:
Criar um **encriptador de texto** a fim de aplicar os conhecimentos adquiridos em lógica de programação e desenvolvimento web.


![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## *Conteúdo de apoio*:

* *Figma*: https://www.figma.com/design/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?node-id=0-1&t=Vb0UoUOgkmeTNKRF-0
* *Trello*: https://trello.com/b/qmLsVkkq/decodificador-de-texto-alura-challenges-oracle-one
* *Infográfico do decodificador de texto*: https://caelum-online-public.s3.amazonaws.com/one-tgf/Challenge_-_Decodificador_vfinal_4.pdf

## *Requisitos*:
Crie um encriptador de texto, onde:

- [x] A letra "**e**" é convertida para "**enter**"
- [x] A letra "**i**" é convertida para "**imes**"
- [x] A letra "**a**" é convertida para "**ai**"
- [x] A letra "**o**" é convertida para "**ober**"
- [x] A letra "**u**" é convertida para "**ufat**"

- [x] Deve funcionar apenas com letras minúsculas
- [x] Não devem ser utilizados letras com acentos nem caracteres especiais  
- [x] Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

        Por exemplo:
            "gato" => "gaitober"
            gaitober" => "gato"

- [x] A página deve ter campos para inserção do texto a ser criptografado ou descriptografado.
- [x] O resultado deve ser exibido na tela.

* Extra:
    - [x] Um rodapé com os dados da pessoa que desenvolveu o site.
    - [x] Um botão que copie o texto assim como o atalho ctrl + c.


## *Neste desafio utilizamos*:

1. Diversas **tags HTML** no arquivo index.html para criação do corpo da página e sua respectivas **classes**, posteriormente utilizadas no arquivo style.css para a estilização da página.

2. Declarações de **variáveis e funções** no script.js.

3. A **substituíção global /string/g** para selecionar toda ocasião em que determinada letra aparece e o método **.replace** para substituir o que foi selecionado por outro valor contido entre aspas. 

        exemplo:
            let palavraInicial = "abacate";
            let palavraNova = palavraInicial.replace(/a/g, "ai");
            console.log(palavraNova);


4. **Regex para validação**: 

- A regex /[^a-zA-Z ]/g corresponde a todos os caracteres que não são letras (maiúsculas ou minúsculas) ou espaços. Logo, todos os outros caracteres (especiais) serão substituídos por uma string vazia.

        Referência, incluindo outros tipos de regex interessantes: https://blog.ramongomes.com.br/remover-caracteres-especiais-js/