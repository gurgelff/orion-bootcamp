import lista_genios from './manipulacao-array.js';

import {
    get_name_imperative,
    get_bio_imperative,
    remove_genio_imperative,
    change_name_imperative,
    change_bio_imperative,
    change_id_imperative,
} from './functions/GenioImperativo.js';

import {
    get_bio_functional,
    get_name_functional,
    remove_genio_functional,
    change_bio_functional,
    change_id_functional,
    change_name_functional,
  } from './functions/GenioFuncional.js';
import { InfoGenios } from './types/Genio';
import { mostrar_mensagem_erro_nao_encontrado } from './functions/GenioUtils.js';

const IMPERATIVO="imperativo";
const FUNCIONAL="funcional";

var root_element: HTMLDivElement | null = document.getElementById("root") as HTMLDivElement;
var titulo_h3: HTMLHeadingElement = document.createElement("h3");


function construir_elementos_lista(lista_genios: InfoGenios, root_element: HTMLDivElement | null): HTMLDivElement {
    root_element = document.createElement('div'); // reset
    root_element.id = "root";

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
    
        root_element?.appendChild(genio_element);
        let br_element: HTMLBRElement = document.createElement("br");
        root_element?.appendChild(br_element);
    }

    return root_element;
}

function executar_manipulacoes_array(evento: MouseEvent): void {
    evento.preventDefault();
    let root_element: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

    const dropdown_paradigma: HTMLSelectElement = document.getElementById("dropdown-paradigma") as HTMLSelectElement;
    const tipo_paradigma: string = dropdown_paradigma.value ?? IMPERATIVO;

    
    const genio_id_input: HTMLInputElement = document.getElementById("input-genio-id") as HTMLInputElement;
    const genio_id: number = parseInt(genio_id_input?.value);
    const prop_element: HTMLSelectElement = document.getElementById("prop") as HTMLSelectElement;
    const prop_value: string = prop_element?.value ?? "";
    const novo_valor_input: HTMLInputElement = document.getElementById("novo-valor") as HTMLInputElement;
    const novo_valor: string = novo_valor_input?.value || "";
    const radio_deletar_genio: HTMLInputElement = document.getElementById("deletar-genio") as HTMLInputElement;
    const devo_deletar_genio: Boolean = radio_deletar_genio.checked;
    
    const erro: string = mostrar_mensagem_erro_nao_encontrado(genio_id);
    let genio_status: string = "";

    switch(tipo_paradigma) {

        case IMPERATIVO:
            // create h3
            let titulo_imperativo: HTMLHeadingElement = document.createElement("h3");
            titulo_imperativo.innerText = "Lista de Gênios - Imperativo";

            if (devo_deletar_genio) {
                genio_status = remove_genio_imperative(genio_id, lista_genios);
            } else if(prop_value == 'name') {
                genio_status = change_name_imperative(genio_id, novo_valor, lista_genios);
            } else if(prop_value == 'bio') {
                genio_status = change_bio_imperative(genio_id, novo_valor, lista_genios);
            } else if(prop_value == 'id') {
                const novo_id_numerico: number = parseInt(novo_valor);
                if (! isNaN(novo_id_numerico)) {
                    genio_status = change_id_imperative(genio_id, novo_id_numerico, lista_genios);
                } else {
                    alert("Novo valor de ID com formato inválido");
                }
            }
            
            if (genio_status !== erro) {
                root_element.innerHTML = construir_elementos_lista(lista_genios, root_element).innerHTML;
                root_element.prepend(titulo_imperativo);
            } else {
                alert(erro);
            }
            
            break;

            case FUNCIONAL:
                let titulo_funcional: HTMLHeadingElement = document.createElement("h3");
                titulo_funcional.innerText = "Lista de Gênios - Funcional";

                if (devo_deletar_genio) {
                    const nova_lista_remove = remove_genio_functional(genio_id, lista_genios);
                    root_element.innerHTML = construir_elementos_lista(nova_lista_remove, root_element).innerHTML;
                    if(JSON.stringify(nova_lista_remove) == JSON.stringify(lista_genios)) alert("Erro ao remover genio");
                    else root_element.prepend(titulo_funcional);
                }
                
                else if(prop_value == 'name') {
                    const nova_lista_nome = change_name_functional(genio_id, novo_valor, lista_genios);
                    root_element.innerHTML = construir_elementos_lista(nova_lista_nome, root_element).innerHTML;
                    if(JSON.stringify(nova_lista_nome) == JSON.stringify(lista_genios)) alert("Erro ao mudar nome");
                    else root_element.prepend(titulo_funcional);
                }
                
                else if(prop_value == 'bio') {
                    const nova_lista_bio = change_bio_functional(genio_id, novo_valor, lista_genios);
                    root_element.innerHTML = construir_elementos_lista(nova_lista_bio, root_element).innerHTML;
                    if(JSON.stringify(nova_lista_bio) == JSON.stringify(lista_genios)) alert("Erro ao mudar bio");
                    else root_element.prepend(titulo_funcional);
                }
                
                else if(prop_value == 'id') {
                    const novo_id_numerico: number = parseInt(novo_valor);

                    if (! isNaN(novo_id_numerico)) {
                        const nova_lista_id = change_id_functional(genio_id, novo_id_numerico, lista_genios);
                        root_element.innerHTML = construir_elementos_lista(nova_lista_id, root_element).innerHTML;
                        if(JSON.stringify(nova_lista_id) == JSON.stringify(lista_genios)) alert("Erro ao mudar id");
                        else root_element.prepend(titulo_funcional);
                    } 
                    
                    else {
                        alert("Novo ID tem formato inválido");
                    }
                }

                break;
        }    
        
}

function buscar_genio(evento: MouseEvent): void {
    evento.preventDefault();
    const buscar_genio_input: HTMLInputElement = document.getElementById("buscar-genio") as HTMLInputElement;
    const genio_id: number = parseInt(buscar_genio_input?.value);

    if(! isNaN(genio_id)) {
        const root_busca: HTMLDivElement = document.getElementById("root-busca") as HTMLDivElement;
        const titulo_busca: HTMLHeadingElement = document.createElement("h4");

        const tipo_paradigma: string = (document.getElementById("dropdown-paradigma") as HTMLSelectElement).value ?? IMPERATIVO;
        titulo_busca.innerText = "Resultado da busca - " + tipo_paradigma;

        let genio: InfoGenios = [];
        let genio_status: string = "";
        let erro: string = mostrar_mensagem_erro_nao_encontrado(genio_id);

        switch(tipo_paradigma) {
            case IMPERATIVO:
                genio_status = get_name_imperative(genio_id, lista_genios);
                if (genio_status !== erro) {
                    genio.push({id: genio_id, name: genio_status, bio: get_bio_imperative(genio_id, lista_genios)});
                    root_busca.innerHTML = construir_elementos_lista(genio, root_busca).innerHTML;
                    root_busca.prepend(titulo_busca);
                } else {
                    alert(erro);
                }
                break;

            case FUNCIONAL:
                genio_status = get_name_functional(genio_id, lista_genios);
                if (genio_status !== erro) {
                    genio.push({id: genio_id, name: genio_status, bio: get_bio_functional(genio_id, lista_genios)});
                    root_busca.innerHTML = construir_elementos_lista(genio, root_busca).innerHTML;
                    root_busca.prepend(titulo_busca);
                } else {
                    alert(erro);
                }
                break;
        }


    }

}

const botao_manipular_array: HTMLButtonElement = document.getElementById("botao-manipular-array") as HTMLButtonElement;
botao_manipular_array.addEventListener("click", (evento: MouseEvent) => executar_manipulacoes_array(evento));

const botao_buscar_genio: HTMLButtonElement = document.getElementById("botao-buscar-genio") as HTMLButtonElement;
botao_buscar_genio.addEventListener("click", (evento: MouseEvent) => buscar_genio(evento));


titulo_h3.innerText = "Lista de Gênios Original";
root_element.innerHTML = construir_elementos_lista(lista_genios, root_element).innerHTML;
root_element.prepend(titulo_h3);
