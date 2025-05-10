// trabalho.js

// Exercício 1
/*
  Gerador de tags de identificação

  Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. O dono irá informar nome, idade, peso, raça e se é adotado ou não.

  A tag deve ter:

    •   O nome em letras maiúsculas
    •   A raça com a primeira letra maiúscula
    •   Peso (não está sendo testado diretamente, mas pode ser útil para o futuro)
 */
const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};

// Exercício 2
/*
  Verificar se pode ser adotado

  Crie uma função que determine se um animal pode ser adotado baseado na idade e porte.
  A regra é: animais com idade igual ou superior a 1 ano e porte 'M' ou 'G' podem ser adotados.
*/
const verificarSePodeSerAdotado = (idade, porte) => {
  return idade >= 1 && (porte === 'M' || porte === 'G');
};

// Exercício 3
/*
  Calcular consumo de ração

  Crie uma função que calcule a quantidade de ração diária que um animal deve consumir.
  A fórmula é: peso (em kg) * 30.
  O resultado deve ser em gramas.
*/
const calcularConsumoDeRacao = (nome, idade, peso) => {
  return peso * 30 *10;
};

// Exercício 4
/*
  Decidir tipo de atividade por porte

  Crie uma função que retorne o tipo de atividade mais adequada para um animal baseado no seu porte.
    •   Pequeno: brincar dentro de casa
    •   Médio: passear no parque
    •   Grande: correr em campo aberto
*/
const decidirTipoDeAtividadePorPorte = (porte) => {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  } else if (porte === 'medio') {
    return 'passear no parque';
  } else if (porte === 'grande') {
    return 'correr em campo aberto';
  }
};

// Exercício 5
/*
  Buscar dado assíncrono

  Crie uma função que simule uma busca assíncrona de dados (ex: uma chamada a uma API).
  A função deve retornar uma Promise que resolve com o valor "Pipoca" após um pequeno delay (simulando o tempo de resposta da API).
*/
const buscarDadoAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100); // Um delay de 100ms para simular a assincronicidade
  });
};


export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};