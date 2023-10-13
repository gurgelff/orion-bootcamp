# Calculadora de Vogais
Este é um simples projeto feito em Typescript que calcula a quantidade de vogais em uma palavra por meio de simples passagem de parâmetros e também a partir de um formulário.

# Dependências
Node.js
PNPM (opcional)

# Como Executar
Compile os arquivos Typescript usando o comando ```npx tsc``` na raiz do projeto. O compilador usará automaticamente o arquivo de configuração.

Também é possível usar o gerenciador PNPM, que usa uma abordagem dinâmica com links simbólicos, se tornando mais eficiente.
```sh
npm install -g pnpm # apenas para instalar pela primeira vez
pnpm exec tsc
```

# Como Usar
Abra o arquivo html do exercício (quantidade-vogais.html) pelo navegador.

O texto correspondente à chamada via parâmetro — _Quantidade de vogais (parâmetro = "Fernando"):_ — deve vir seguido pelo número de vogais da palavra Fernando, ou seja, o número 3.

Você pode calcular a quantidade de vogais de uma palavra de sua escolha. Basta digitar a palavra ou mesmo um texto inteiro na barra textual após a label _Digite um texto:_. Depois disso, basta dar um click no botão **Calcular** que a quantia desejada aparecerá no espaço reservado:  _Quantidade de vogais (formulário):_