# Exercício 2 - Manipulação de Array usando os paradigmas Imperativo e Funcional
## Descrição
Dado o array:

```js
let lista = new Array<Object> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];
];
```

a) Crie uma função que retorne a bio do id passado
b) Crie uma função que retorne o name do id passado
c) Crie uma função que apague um item da lista a partir de um id passado
d) Crie uma função que altere a bio ou o name a partir de um id passado
e) Demonstre todas as funções com o paradigma funcional e com o imperativo

## Instalação
Compile os arquivos Typescript usando ```npx tsc``` ou ```pnpm exec tsc```.
Isso criará a pasta dist/ com os arquivos js prontos para ser executados.

## Como Usar
Rode os arquivos javascript usando o runtime Node ```node dist/manipulacao-array.js```.
As funções retornarão os detalhes do uso imperativo e funcional via mensagens no console.
