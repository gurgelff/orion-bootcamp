import { InfoGenios, InfoGenio } from "./types/Genio";

import {
  get_name_imperative,
  get_bio_imperative,
  remove_genio_imperative,
  change_name_imperative,
  change_bio_imperative,
  change_id_imperative,
} from "./functions/GenioImperativo.js";

import {
  get_bio_functional,
  get_name_functional,
  remove_genio_functional,
  change_bio_functional,
  change_id_functional,
  change_name_functional,
} from "./functions/GenioFuncional.js";

let lista: InfoGenios = new Array<InfoGenio>();

lista = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito uo primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];

const lista_copia: InfoGenios = [...lista];

const ID_NIKOLA_TESLA = 3;
const ID_COPERNICO = 4;

console.log("Name usando imperativo: ", get_name_imperative(ID_NIKOLA_TESLA, lista));
console.log("\nName usando funcional: ", get_name_functional(ID_NIKOLA_TESLA, lista));

console.log("\nBio usando imperativo: ", get_bio_imperative(ID_NIKOLA_TESLA, lista));
console.log("\nBio usando funcional: ", get_bio_functional(ID_NIKOLA_TESLA, lista));

const ID_MAQUIAVEL = 5;
const nova_bio = "Nicolau Maquiavel foi um cientista político italiano autor da famosa obra O Príncipe, que discorre sobre métodos de perpetuação de poder.";

// Funcional (não-imperativa) implica em não ter efeitos colaterais, logo retorna-se uma outra variável (nova lista)
console.log("\nMudar name usando funcional: ", change_name_functional(ID_COPERNICO, "Nicolau Maquiavel", lista));
console.log("\nMudar bio usando funcional: ", change_bio_functional(ID_COPERNICO, nova_bio, lista));
console.log("\nMudar id usando funcional: ", change_id_functional(ID_COPERNICO, ID_MAQUIAVEL, lista));

// Os seguintes métodos alteram substancialmente a lista (devido à natureza imperativa com efeitos colaterais), por isso eu exporto uma cópia (a ser usada no exercício 3)
console.log("\nMudar name usando imperativo: ", change_name_imperative(ID_COPERNICO, "Nicolau Maquiavel", lista));
console.log("\nMudar bio usando imperativo: ", change_bio_imperative(ID_COPERNICO, nova_bio, lista));
console.log("\nMudar id usando imperativo: ", change_id_imperative(ID_COPERNICO, ID_MAQUIAVEL, lista));

console.log("\nRemover usando imperativo: ", remove_genio_imperative(ID_MAQUIAVEL, lista));
const lista_sem_maquiavel = remove_genio_functional(ID_MAQUIAVEL, lista);
console.log("\nRemover usando funcional: ", lista_sem_maquiavel);

export default lista_copia; // importante para o exercício 3
