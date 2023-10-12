/**
 * Mostra uma mensagem de erro quando o gênio não é encontrado.
 * @param id É o número identificador do gênio
 * @returns Retorna a mensagem de erro padrão
 */
export function mostrar_mensagem_erro_nao_encontrado (id: number): string {
    return `Erro: Gênio não encontrado com o id ${id}.`;
}
