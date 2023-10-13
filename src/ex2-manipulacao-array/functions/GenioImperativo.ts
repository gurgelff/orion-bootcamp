import { InfoGenio, InfoGenios, GenioProp } from "../types/Genio";
import { mostrar_mensagem_erro_nao_encontrado } from "./GenioUtils.js";

/**
 * Retorna uma propriedade de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param prop É a propriedade(key) que se deseja obter - ex: name, bio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna a propriedade do gênio ou uma mensagem de erro caso não encontre o gênio
 */
function get_prop_imperative (id: number, prop: GenioProp, lista_genios: InfoGenios): string {
    for (const genio of lista_genios) {
        if (genio.id == id) 
            return genio[prop] as string;
    }

    return mostrar_mensagem_erro_nao_encontrado(id);
}

/**
 * Retorna o nome de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna o nome do gênio ou uma mensagem de erro caso não encontre o gênio
 * @see get_prop_imperative
 */
export function get_name_imperative(id: number, lista_genios: InfoGenios): string {
    return get_prop_imperative(id, "name", lista_genios);
}

/**
 * Retorna a biografia de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna a biografia do gênio ou uma mensagem de erro caso não encontre o gênio
 * @see get_prop_imperative
 */
export function get_bio_imperative (id: number, lista_genios: InfoGenios): string {
    return get_prop_imperative(id, "bio", lista_genios);
}

/**
 * Remove um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma mensagem de sucesso ou uma mensagem de erro caso não encontre o gênio
 */
export function remove_genio_imperative (id: number, lista_genios: InfoGenios): string {
    let removed_element: InfoGenio | undefined;
    for (const [index, genio] of lista_genios.entries()) {
        if (genio.id == id) 
            removed_element = lista_genios.splice(index, 1)[0];
    }

    return removed_element ?
        `Gênio removido com sucesso: ${removed_element.name}`
    :
        mostrar_mensagem_erro_nao_encontrado(id);
}

/**
 * Altera uma propriedade de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param prop É a propriedade(key) que se deseja alterar - ex: name, bio
 * @param novo_valor É o novo valor que se deseja atribuir à propriedade
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma mensagem de sucesso ou uma mensagem de erro caso não encontre o gênio
 */
function change_prop_imperative (id: number, prop: GenioProp, novo_valor: string | number, lista_genios: InfoGenios): string {
    for (const genio of lista_genios) {
        
        if (genio.id === id) {

            const nome_antigo: string = genio.name;

            switch (prop) {
                case "name":
                case "bio":
                    genio[prop] = novo_valor as string;
                    break;
                case "id":
                    genio[prop] = novo_valor as number;
                    break;
            }

            return `${prop} de ${nome_antigo} alterado com sucesso para "${novo_valor}".`;
        }
        
    }

    return mostrar_mensagem_erro_nao_encontrado(id);
} 

/**
 * Altera o nome de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É o novo nome que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma mensagem de sucesso ou uma mensagem de erro caso não encontre o gênio
 * @see change_prop_imperative
 */
export function change_name_imperative (id: number, novo_valor: string, lista_genios: InfoGenios): string {
    return change_prop_imperative(id, "name", novo_valor, lista_genios);
}

/**
 * Altera a biografia de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É a nova biografia que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma mensagem de sucesso ou uma mensagem de erro caso não encontre o gênio
 * @see change_prop_imperative
 */
export function change_bio_imperative (id: number, novo_valor: string, lista_genios: InfoGenios): string {
    return change_prop_imperative(id, "bio", novo_valor, lista_genios);
}

/**
 * Altera o id de um gênio dado seu id
 * @param id É o número identificador do gênio
 * @param novo_valor É o novo id que se deseja atribuir ao gênio
 * @param lista_genios É a lista(array) de gênios
 * @returns Retorna uma mensagem de sucesso ou uma mensagem de erro caso não encontre o gênio
 * @see change_prop_imperative
 */
export function change_id_imperative (id: number, novo_valor: number, lista_genios: InfoGenios): string {
    return change_prop_imperative(id, "id", novo_valor, lista_genios);
}
