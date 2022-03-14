const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   function authorBornIn1947(array) {
//     // escreva aqui o seu código
//     const find = array.find((array) => array.author.birthYear === 1947).author.name;
//     return find;
//   }

//   console.log(authorBornIn1947(books));

  function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.forEach((book) => {
        if(!nameBook || nameBook.length > book.name.length){
            nameBook = book.name;
        }
    })
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
console.log(smallerName());
  
  function getNamedBook() {
    // escreva seu código aqui
    const namedBook = books.find(book => book.name.length === 26);
    return namedBook;
  }

  console.log(getNamedBook());

  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return books.sort((a, b) => b.releaseYear - a.releaseYear);
  }
  console.log(booksOrderedByReleaseYearDesc());

  function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    return books.every((book) => book.author.birthYear>1901);
  }
  console.log(everyoneWasBornOnSecXX());

  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return books.some((book) => book.releaseYear> 1980);
  }
  console.log(someBookWasReleaseOnThe80s());

  function authorUnique() {
    // escreva seu código aqui
    // retorna todos livros 
    return books.every((book) =>
    //por ele voltar true utiliza-se o !books para ele voltar false caso encontrar 
    !books.some((bookSome) =>
    //essa condição de que o bookSome.author.birthYear for igual ao do array book original
    //e o nome do autor for diferente 
      (bookSome.author.birthYear === book.author.birthYear) 
      && (bookSome.author.name !== book.author.name)));
  }
  console.log(authorUnique());