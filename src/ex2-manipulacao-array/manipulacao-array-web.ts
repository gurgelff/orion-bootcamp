import lista_genios from './manipulacao-array.js';

import {
    get_name_imperative,
    get_bio_imperative,
    remove_genio_imperative,
    change_name_imperative,
    change_bio_imperative,
    change_id_imperative,
} from '../ex2-manipulacao-array/functions/GenioImperativo.js';

import {
    get_bio_functional,
    get_name_functional,
    remove_genio_functional,
    change_bio_functional,
    change_id_functional,
    change_name_functional,
  } from '../ex2-manipulacao-array/functions/GenioFuncional.js';

let root_element: HTMLDivElement | null = document.getElementById("root") as HTMLDivElement;

let titulo_h3: HTMLHeadingElement = document.createElement("h3");
titulo_h3.innerText = "Lista de Gênios";
root_element.appendChild(titulo_h3);

for (let genio of lista_genios) {
    let genio_element: HTMLDivElement = document.createElement("div");
    genio_element.classList.add("genio");

    let genio_id_element: HTMLDivElement = document.createElement("div");
    genio_id_element.classList.add("genio-id");

    let genio_name_element: HTMLDivElement = document.createElement("div");
    genio_name_element.classList.add("genio-name");

    let genio_bio_element: HTMLDivElement = document.createElement("div");
    genio_bio_element.classList.add("genio-bio");

    genio_id_element.innerText = "ID: " + genio.id.toString();
    genio_name_element.innerText = "Nome: " + genio.name;
    genio_bio_element.innerText = "Biografia: " + genio.bio;

    genio_element.appendChild(genio_id_element);    
    genio_element.appendChild(genio_name_element);
    genio_element.appendChild(genio_bio_element);

    root_element.appendChild(genio_element);
    let br_element: HTMLBRElement = document.createElement("br");
    root_element.appendChild(br_element);
}
