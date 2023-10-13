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

for (let genio of lista_genios) {
    let genio_element: HTMLDivElement = document.createElement("div");
    genio_element.classList.add("genio");

    let genio_id_element: HTMLDivElement = document.createElement("div");
    genio_id_element.classList.add("genio-id");

    let genio_name_element: HTMLDivElement = document.createElement("div");
    genio_name_element.classList.add("genio-name");

    let genio_bio_element: HTMLDivElement = document.createElement("div");
    genio_bio_element.classList.add("genio-bio");

    genio_id_element.innerText = genio.id.toString();
    genio_name_element.innerText = genio.name;
    genio_bio_element.innerText = genio.bio;

    genio_element.appendChild(genio_id_element);    
    genio_element.appendChild(genio_name_element);
    genio_element.appendChild(genio_bio_element);

    root_element.appendChild(genio_element);
}