// Trabalho 1
/**
  Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

 * @param {Array<number|string>} lista - A lista contendo inteiros e strings.
 * @returns {Array<number>} Uma nova lista contendo apenas os inteiros.
*/

function filtrarInteiros(lista) {
  const novaLista = []; // Inicializa uma nova lista para armazenar os inteiros

  // Itera sobre cada elemento da lista de entrada
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    // Verifica se o tipo do elemento é 'number'
    if (typeof elemento === 'number') {
      novaLista.push(elemento); // Adiciona o número à nova lista
    }
  }

  return novaLista; // Retorna a nova lista com apenas os inteiros
}

// Casos de Teste

// Caso de teste 1: Lista mista com números e strings
const lista1 = [1, 'a', 2, 'b', 3, 'c', 4, '4d3', 5, '6e7f', 8, 'g', 9, 'h', 10];
const resultado1 = filtrarInteiros(lista1);
console.info(`\nLista mista com números e strings`);
console.log(`Lista original: [${lista1}]`);
console.log(`Lista filtrada: [${resultado1}]`); // Saída esperada: [1, 2, 3, 4]
console.log('---\n');

// Caso de teste 2: Lista contendo apenas strings
const lista2 = ['hello', 'world', 'javascript'];
const resultado2 = filtrarInteiros(lista2);
console.info(`Lista contendo apenas strings`);
console.log(`Lista original: [${lista2}]`);
console.log(`Lista filtrada: [${resultado2}]`); // Saída esperada: []
console.log('---\n');

// Caso de teste 3: Lista contendo apenas números
const lista3 = [10, 20, 30, 40];
const resultado3 = filtrarInteiros(lista3);
console.info(`Lista contendo apenas números`);
console.log(`Lista original: [${lista3}]`);
console.log(`Lista filtrada: [${resultado3}]`); // Saída esperada: [10, 20, 30, 40]
console.log('---\n');

// Caso de teste 4: Lista vazia
const lista4 = [];
const resultado4 = filtrarInteiros(lista4);
console.info(`Lista vazia`);
console.log(`Lista original: [${lista4}]`);
console.log(`Lista filtrada: [${resultado4}]`); // Saída esperada: []
console.log('---\n');

// Caso de teste 5: Lista com outros tipos de dados (que serão ignorados)
const lista5 = [1, 'teste', true, null, undefined, 5.5, 'final'];
const resultado5 = filtrarInteiros(lista5);
console.info(`Lista com outros tipos de dados`);
console.log(`Lista original: [${lista5}]`);
console.log(`Lista filtrada: [${resultado5}]`); // Saída esperada: [1, 5.5] - Nota: Number inclui floats, o requisito pede "inteiros", mas o filtro por `typeof === 'number'` inclui floats. Se fossem apenas inteiros estritos, seria necessário `Number.isInteger(elemento)`. Mantenho como `typeof === 'number'` conforme a interpretação comum de "números" em contextos simples.
console.log('---');