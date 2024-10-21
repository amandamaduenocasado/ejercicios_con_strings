/* Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. */

function transformWord(word) {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
}

transformWord('Hi');
transformWord('Sweetie');

/* Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra. 

IMPORTANTE. COMO EN EL EJERCICIO 4 DEBEMOS UTILIZAR MATH.FLOOR * MATH.RANDOM. 

IMPORTANTE. PODEMOS UTILIZAR WORD.CHARAT DENTRO DEL CONSOLE.LOG PARA CONVERTIR EL NUMBERO EN CARÁCTER */

function randomWord(word) {
  const result = Math.floor(Math.random() * word.length);
  console.log(word.charAt(result));
}

randomWord('persimon');

/* Crea una función que reciba dos palabras y devuelva cuál de las dos es más larga. Si ambas palabras tienen la misma longitud, deberá indicarlo. */ 

function largestWord(wordA, wordB) {
  if (wordA.length > wordB.length) {
    return wordA + ' es más larga que ' + wordB;
  } else if (wordB.length > wordA.length) {
    return wordB + ' es más larga que ' + wordA;
  } else {
    return wordA + ' y ' + wordB + ' son iguales en longitud';
  }
} 

const largest1 = largestWord('babilonia', 'cura');
const largest2 = largestWord('puro', 'parche');
const largest3 = largestWord('tira', 'risa');

console.log(largest1);
console.log(largest2);
console.log(largest3);

/* Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras aleatorias de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". */ 

/* function generateWord(wordA, wordB, wordC) {
  const newWord = Math.random()(wordA.charAt() + wordB.charAt() + wordC.charAt());
}

const generate1 = generateWord('bimba', 'jamacuco', 'mala');
console.log(generate1);

MALA EJECUCIÓN. HAY QUE MULTIPLICAR CADA PALABRA POR SEPARADO Y DOS VECES, PORQUE SON DOS CARACTERES. IMPORTANTE! MULTIPLICAR POR WORD.LENGTH SI NO FUNCIONARÁ. IMPORTANTE! UTILIZAR MATH.FLOOR ANTES DE MATH RANDOM CASI SIEMPRE */ 

function generateWord(wordA, wordB, wordC) {
  const letterA = wordA.charAt(Math.floor(Math.random() * wordA.length)) + wordA.charAt(Math.floor(Math.random() * wordA.length));
  
  const letterB = wordB.charAt(Math.floor(Math.random() * wordB.length)) + wordB.charAt(Math.floor(Math.random() * wordB.length));
  
  const letterC = wordC.charAt(Math.floor(Math.random() * wordC.length)) + wordC.charAt(Math.floor(Math.random() * wordC.length));

  return letterA + letterB + letterC;
}

const generate1 = generateWord('bimba', 'jamacuco', 'mala');
console.log(generate1);


/* Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com". */

function receiveEmail(email) {

  const arroba = email.indexOf('@');
  const user = email.substring(0, arroba);
  const domain = email.substring(arroba + 1)

  console.log(`El usuario es ${user}`);
  console.log(`El domain es ${domain}`);
}

receiveEmail('dorian@gmail.com');

/* Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87". */


function createName(name, surname) {
  const firstLetter = name.substring(0,1);
  const number = Math.round(Math.random() * 100);
  return firstLetter + surname + number;
}

const resultName = createName('Cherry', 'Pie');
console.log(resultName);


/* Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs */ 

function mergeMayusMinus(word) {
  if (word.length !== 5) {
  }
  return (
    word[0].toLowerCase() + 
    word[1].toUpperCase() + 
    word[2].toLowerCase() + 
    word[3].toUpperCase() + 
    word[4].toLowerCase()
  );
}

const resultWord = mergeMayusMinus('adios');
console.log(resultWord);

/* Crea una función que reciba 2 verbos en infinitivo. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación". */

/* MALA EJECUCIÓN. 
  
  function guessConjugation (example1, example2) {
  const firstConjugation = example1.endsWith('ar');
  const secondConjugation = example2.endsWith('er');
  
  return `El verbo ${example1} es de la ${firstVerbConjugation} y el verbo ${example2} es de la ${secondVerbConjugation}.`;
}

const resultExample = guessConjugation('Silbar', 'Querer');
console.log(resultExample); */

function guessConjugation(example1, example2) {
  let firstConjugation = 'es de la primera conjugación'; 
  let secondConjugation = 'es de la segunda conjugación'; 

  if (example1.endsWith('ar')) {
    firstConjugation = 'es de la primera conjugación'; 
  } else if (example1.endsWith('er') || example1.endsWith('ir')) {
    firstConjugation = 'no es de la primera conjugación';
  }

  if (example2.endsWith('er')) {
    secondConjugation = 'es de la segunda conjugación';
  } else if (example2.endsWith('ar') || example2.endsWith('ir')) {
    secondConjugation = 'no es de la segunda conjugación'; 
  }

  return `El verbo ${example1} ${firstConjugation} y el verbo ${example2} ${secondConjugation}.`;
}

const resultExample = guessConjugation('oler', 'amar');
console.log(resultExample); 


/* Crea una función que reciba una palabra de 4 letras y devuelva la palabra invertida. Por ejemplo, si recibe "casa", deberá devolver "asac". */

function returnWord (word) {
  const firstLetter = word.charAt(0);
  const secondLetter = word.charAt(1);
  const thirdLetter = word.charAt(2);
  const fourLetter = word.charAt(3);

  return fourLetter + thirdLetter + secondLetter + firstLetter;
}

const resultSwitch = returnWord('PASA');
console.log(resultSwitch);


/* Crea una función que reciba 3 palabras y calcule cuántos caracteres tienen en total. Por ejemplo, si recibe "Hola", "Mundo" y "Javascript", deberá imprimir 17. */ 

function countCharacters(wordA, wordB, wordC) {
  const totalCharacters = wordA.length + wordB.length + wordC.length;
  return totalCharacters;
}

const resultCount = countCharacters('el', 'gato', 'azul');
console.log(resultCount);


/* Crea una función que reciba una frase y devuelva la frase con el formato de título, es decir, que cada palabra comience con mayúscula. Por ejemplo, "hola mundo" se convertiría en "Hola Mundo". */

function transformLetter(wordA, wordB) {
  const firstCapitalLetter = wordA.charAt(0).toUpperCase() + wordA.substring(1);
  const secondCapitalLetter = wordB.charAt(0).toUpperCase() + wordB.substring(1);
  return firstCapitalLetter + ' ' + secondCapitalLetter; 
}

const resultCapital = transformLetter('perro', 'salchicha');
console.log(resultCapital); 

/* Crea una función que reciba un nombre y un apellido y devuelva las iniciales en mayúsculas. Por ejemplo, si recibe "Carlos Pérez", deberá devolver "C.P.". */

function initialLetter(wordA, wordB) {
  const firstInitialLetter = wordA.charAt(0).toUpperCase() + wordA.substring(5);
  const secondInitalLetter = wordB.charAt(0).toUpperCase() + wordB.substring(9);
  return firstInitialLetter + '.' + secondInitalLetter + '.';
}

const resultInitial = initialLetter('perro', 'salchicha');
console.log(resultInitial);

/* Crea una función que reciba 3 palabras y calcule el promedio de la longitud de esas palabras. Por ejemplo, si recibe "hola", "adiós" y "mundo", el promedio sería 4.67. */

function averageWord(wordA, wordB, wordC) {
  const totalAverage = (wordA.length + wordB.length + wordC.length) / 3;
  return totalAverage;
}

const resultAverage = averageWord('merluza', 'centollo', 'rodaballo');
console.log(resultAverage);

/* Crea una función que reciba un número de teléfono de 10 dígitos (como "1234567890") y lo formatee de la siguiente manera: "(123) 456-7890". */

function formatNumber(numberA, numberB, numberC) {
  const totalNumber = `(${numberA}) ${numberB}-${numberC}`;
  return totalNumber;
}

const resultNumber = formatNumber(123,456,7890);
console.log(resultNumber);

/*  Crea una función que reciba una palabra de 4 letras y la devuelva en orden inverso, duplicando cada letra. Por ejemplo, si recibe "hola", devolvería "aalloohh". */

function strangeWord (word) {
  const firstLetter = word.charAt(0) + word.charAt(0);
  const secondLetter = word.charAt(1) + word.charAt(1);
  const thirdLetter = word.charAt(2) + word.charAt(1);
  const fourLetter = word.charAt(3) + word.charAt(1);

  return fourLetter + thirdLetter + secondLetter + firstLetter;
}

const resultStrange = strangeWord('PASA');
console.log(resultStrange);

/* Crea una función que reciba un número de dos dígitos y devuelva true si ambos dígitos son pares. Por ejemplo, si recibe 24, devolvería true, pero si recibe 23, devolvería false. */ 

function evenNumber(number) {
  const firstDigit = Math.floor(number / 10); 
  const secondDigit = number % 10; 

  return firstDigit % 2 === 0 && secondDigit % 2 === 0;
}

const resultEven = evenNumber(24);
console.log(resultEven);

/* Crea una función que reciba dos palabras de 4 letras y verifique si contienen las mismas letras en diferente orden, por ejemplo "amor" y "mora" SIN RESOLVER */


/* Crea una función que reciba un string y un número n, y devuelva los primeros n caracteres del string (puedes usar el método slice). */

function getFirstNCharacters(word, number) {
  return word.slice(0, number);
}

const result = getFirstNCharacters('Mona Chita', 4);
console.log(result); 

/* Crea una función que reciba una frase y una palabra, y te diga si la palabra está o no en la frase */

function isWordInPhrase(phrase, word) {
  return phrase.includes(word);
}

const resultPhrase = isWordInPhrase('Me gustan las gambas', 'gambas');
console.log(resultPhrase);