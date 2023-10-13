import { GenioProp, InfoGenio, InfoGenios } from "../types/Genio";
import { mostrar_mensagem_erro_nao_encontrado } from "./GenioUtils.js";

/**
 * Retorna uma propriedade de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param prop É a propriedade(key) que se deseja obter - ex: name, bio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna a propriedade do gênio ou uma mensagem de erro caso não encontre o gênio
 */
function get_prop_functional (id: number, prop: GenioProp, lista_genios: InfoGenios): string {
    const genio: InfoGenio | undefined = lista_genios.find( genio => genio.id == id);
    
    return genio ?
    genio[prop] as string 
    : 
    mostrar_mensagem_erro_nao_encontrado(id);
}

/**
 * Retorna o nome de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna o nome do gênio ou uma mensagem de erro caso não encontre o gênio
 * @see get_prop_functional
 */
export function get_name_functional (id: number, lista_genios: InfoGenios): string {
    return get_prop_functional(id, "name", lista_genios);
}

/**
 * Retorna a biografia de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna a biografia do gênio ou uma mensagem de erro caso não encontre o gênio
 * @see get_prop_functional
 */
export function get_bio_functional (id: number, lista_genios: InfoGenios): string {
    return get_prop_functional(id, "bio", lista_genios);
}

/**
 * Remove um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma nova lista de gênios sem o gênio selecionado ou uma mensagem de erro caso não encontre o gênio
 * 
 */
export function remove_genio_functional (id: number, lista_genios: InfoGenios): InfoGenios {
    return lista_genios.filter(genio => genio.id !== id);

}

/**
 * Altera uma propriedade de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param prop É a propriedade(key) que se deseja alterar - ex: name, bio
 * @param novo_valor É o novo valor que se deseja atribuir à propriedade
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma nova lista de gênios com a propriedade tendo seu novo valor ou uma mensagem de erro caso não encontre o gênio
 */
function change_prop_functional (id: number, prop: GenioProp, novo_valor: string | number, lista_genios: InfoGenios): InfoGenios {
    const genio: InfoGenio | undefined = lista_genios.find(genio => genio.id === id);
    const novo_genio: InfoGenio | undefined = genio? {...genio, [prop]: novo_valor} : undefined;
    
    return novo_genio ?
    [ ...lista_genios.filter(genio_antigo => genio_antigo.id !== id), novo_genio ]
    :
    lista_genios;
}

/**
 * Altera o nome de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É o novo nome que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma nova lista de gênios com o novo nome ou uma mensagem de erro caso não encontre o gênio
 * @see change_prop_functional
 */
export function change_name_functional (id: number, novo_valor: string, lista_genios: InfoGenios): InfoGenios {
    return change_prop_functional(id, "name", novo_valor, lista_genios);
}

/**
 * Altera a biografia de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É a nova biografia que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma nova lista de gênios com a nova biografia ou uma mensagem de erro caso não encontre o gênio 
 */
export function change_bio_functional (id: number, novo_valor: string, lista_genios: InfoGenios): InfoGenios {
    return change_prop_functional(id, "bio", novo_valor, lista_genios);
}

/**
 * Altera o id de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É o novo id que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma nova lista de gênios com o novo id ou uma mensagem de erro caso não encontre o gênio
 * @see change_prop_functional
 */
export function change_id_functional (id: number, novo_valor: number, lista_genios: InfoGenios): InfoGenios {
    return change_prop_functional(id, "id", novo_valor, lista_genios);
}
