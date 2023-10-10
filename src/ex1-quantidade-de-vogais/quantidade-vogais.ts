// só para agilizar o debug
function log(texto: string): void {
    console.log(texto);
}

// a) função com texto passado via parâmetro
function calcula_quantidade_vogais(texto: string): number {
    const vogais: string[] = ['a', 'e', 'i', 'o', 'u', 'á', 'ã', 'â', 'é', 'ẽ', 'ê', 'ó', 'õ', 'ô', 'ú', 'ũ', 'û'];
    const texto_array: string[] = texto.split('');

    const vogais_no_texto: string[] = texto_array.filter((letra) => vogais.includes(letra.toLocaleLowerCase()));  
    return vogais_no_texto.length;
}

// b) pegar dados do input
function calcula_quantidade_vogais_form(evento: MouseEvent): void {
    evento.preventDefault();
    const texto_input: HTMLInputElement | null = document.getElementById("texto") as HTMLInputElement;
    const texto: string = texto_input?.value || "";

    const quantidade_vogais_form: number = calcula_quantidade_vogais(texto);
    const quantidade_vogais_span: HTMLSpanElement | null = document.getElementById("quantidade-vogais-form");

    if(quantidade_vogais_span) {
        quantidade_vogais_span.innerText = String(quantidade_vogais_form);
    }
}

// executa via parâmetro
const quantidade_vogais_param: number = calcula_quantidade_vogais("Fernando");
const quantidade_vogais_span: HTMLSpanElement | null = document.getElementById("quantidade-vogais-param");
if (quantidade_vogais_span) {
    quantidade_vogais_span.innerText = String(quantidade_vogais_param);
}

// executa via input
const botao_texto: HTMLElement | null = document.getElementById("botao-calcular-texto");
botao_texto?.addEventListener('click', (evento: MouseEvent) => calcula_quantidade_vogais_form(evento));
