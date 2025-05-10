// Trabalho 2
/**
  Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.

 * Conta o número de vogais (a, e, i, o, u) em uma string.
 * A string de entrada contém apenas letras minúsculas e espaços.
 * @param {string} texto - A string de entrada para contagem de vogais.
 * @returns {number} O número total de vogais encontradas na string.
 */


  function contarVogais(texto) {
    let contadorVogais = 0; // Inicializa o contador de vogais
  
    // Define as vogais a serem consideradas
    const vogais = ['a', 'e', 'i', 'o', 'u'];
  
    // Itera sobre cada caractere da string de entrada
    for (let i = 0; i < texto.length; i++) {
      const caractere = texto[i];
  
      // Verifica se o caractere atual está incluído na lista de vogais
      if (vogais.includes(caractere)) {
        contadorVogais++; // Incrementa o contador se for uma vogal
      }
    }
  
    return contadorVogais; // Retorna o total de vogais contadas
  }
  
  // Casos de Teste
  
  // Caso de teste 1: Texto comum com vogais e consoantes
  const texto1 = "este e um texto de exemplo";
  const resultado1 = contarVogais(texto1);
  console.info(`Texto comum com vogais e consoantes`);
  console.log(`Texto: "${texto1}"`);
  console.log(`Número de vogais: ${resultado1}`); // Saída esperada: 9
  console.log('---\n');
  
  // Caso de teste 2: Texto contendo apenas vogais
  const texto2 = "aeiouaeiou";
  const resultado2 = contarVogais(texto2);
  console.info(`Texto contendo apenas vogais`);
  console.log(`Texto: "${texto2}"`);
  console.log(`Número de vogais: ${resultado2}`); // Saída esperada: 10
  console.log('---\n');
  
  // Caso de teste 3: Texto contendo apenas consoantes e espaços
  const texto3 = "rhythm world";
  const resultado3 = contarVogais(texto3);
  console.info(`Texto contendo apenas consoantes e espaços`);
  console.log(`Texto: "${texto3}"`);
  console.log(`Número de vogais: ${resultado3}`); // Saída esperada: 0
  console.log('---\n');
  
  // Caso de teste 4: Texto vazio
  const texto4 = "";
  const resultado4 = contarVogais(texto4);
  console.info(`Texto vazio`);
  console.log(`Texto: "${texto4}"`);
  console.log(`Número de vogais: ${resultado4}`); // Saída esperada: 0
  console.log('---\n');
  
  // Caso de teste 5: Texto com espaços
  const texto5 = "a e i o u";
  const resultado5 = contarVogais(texto5);
  console.info(`Texto com espaços`);
  console.log(`Texto: "${texto5}"`);
  console.log(`Número de vogais: ${resultado5}`); // Saída esperada: 5
  console.log('---\n');

  // Caso de teste 6: Texto com vogais repetidas
  const texto6 = "aaeeiioouu";
  const resultado6 = contarVogais(texto6);
  console.info(`Texto com vogais repetidas`)
  console.log(`Texto: "${texto6}"`)
  console.log(`Número de vogais: ${resultado6}`); // Saída esperada: 10
  console.log('---\n');

  // Caso de teste 7: Texto com vogais maiusculas, minúsculas, consoante e caracteres especiais
  const texto7 = "Aeiou@# bola $%AGATA &*()_+|~`"
  const resultado7 = contarVogais(texto7)
  console.info(`Texto com vogais maiusculas, minúsculas, consoante e caracteres especiais`)
  console.log(`Texto: "${texto7}"`)
  console.log(`Número de vogais: ${resultado7}`); // Saída esperada: 6
  console.log('---\n')