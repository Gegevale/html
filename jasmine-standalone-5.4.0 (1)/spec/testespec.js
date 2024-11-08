//TESTESPEC.JS VAI FICAR O TESTE


// it("Lista de Teste", function (){
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function () {
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//     })
// })

// describe("Teste de média", function() {
//     it("Resultado", function() {
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function() {
//     let nome = "Gege";
//     let sobrenome = "Vale";
//     let idade = 18;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it('Teste - Nome', function() {
//         expect("Gege").toBe(pessoa.nome())
//     })
//     it('Teste - Nome e Sobrenome', function() {
//         expect("Gege Vale").toBe(pessoa.nome_completo())
//     })
//     it('Teste - Nome, Sobrenome e idade', function() {
//         expect("Gege Vale tem a idade de 18 anos").toBe(pessoa.nome_tudo())
//     })
// })


///////////////////////////////////////////// EXERCICIOS - GEOVANA VALE MACENA //////////////////////////////////////////////

// EXERCICIO 1

//describe("Teste de multiplicação A", function() {
 // let Numero1 = 2;
 // let Numero2 = 3;
 // let Numero3 = 4;

  //let resultado = new Resultado(Numero1, Numero2, Numero3);

 // it('Deve retornar o produto dos três números', function() {
 //     expect(resultado.multiplicar()).toBe(24); // 2 x 3 x 4 = 24
 // });
//});


//describe("Teste de multiplicação B", function() {
 // let Numero1 = 1;
  //let Numero2 = 5;
  //let Numero3 = 2;

  //let resultado = new Resultado(Numero1, Numero2, Numero3);

  //it('Deve retornar o produto dos três números', function() {
  //    expect(resultado.multiplicar()).toBe(10); // 1 x 5 x 2 = 24
 // });
//});

//describe("Teste de multiplicação C", function() {
 // let Numero1 = 1;
  //let Numero2 = 0;
  //let Numero3 = 3;

  //let resultado = new Resultado(Numero1, Numero2, Numero3);

 // it('Deve retornar o produto dos três números', function() {
 //     expect(resultado.multiplicar()).toBe(0); // 1 x 0 x 3 = 0
//  });
//});


//EXERCICIO 2


//describe('Testa a função dividir questao A', function() {
  //let Numero1 = 10;
   //let Numero2 = 2;

  // it('Deve dividir 10 por 2 e retornar 5', function() {
  //   function dividir(a, b) {
   //        return a / b;
   //   }
  //     expect(dividir(Numero1, Numero2)).toBe(5);
 //});
//});

//describe('Testa a função dividir questao B', function() {
//
  // it('Deve retornar "Não é possível dividir por 0" ao tentar dividir por 0', function() {
  //     expect(dividir(7, 0)).toBe('Não foi possivel dividir por 0');
 //  });
//});

//EXERCICIO 3

//describe("Testes de conversão de temperatura", function() {

  //it("deve converter Celsius para Fahrenheit corretamente", function() {
    //  expect(celsiusFahrenheit(0)).toBe(32);       
   //   expect(celsiusFahrenheit(100)).toBe(212);    
    //  expect(celsiusFahrenheit(-40)).toBe(-40);   
 // });

  //it("deve converter Fahrenheit para Celsius corretamente", function() {
  //    expect(fahrenheitCelsius(32)).toBe(0);       
   //   expect(fahrenheitCelsius(212)).toBe(100);    
   //   expect(fahrenheitCelsius(-40)).toBe(-40);    
 // });

//});

//EXERCICIO 4

//describe("Teste de calcular Media", function() {

  //it('Deve retornar a média aritmética de três números', function() {
   // expect(calcularMedia(3, 4, 5)).toBe(4); 
   // expect(calcularMedia(10, 20, 30)).toBe(20); 
   // expect(calcularMedia(7, 8, 9)).toBe(8);
 // });

 // it('Deve funcionar com números negativos', function() {
  //  expect(calcularMedia(-3, -4, -5)).toBe(-4); 
  //});

 //it('Deve retornar 0 quando os três números forem 0', function() {
  //  expect(calcularMedia(0, 0, 0)).toBe(0); 
  //});
//});

//EXERCICIO 5

//describe("contarCaracteres", function() {
  //it("deve retornar o número de caracteres de uma string", function() {
   //   expect(contarCaracteres("hello")).toBe(5);
   //   expect(contarCaracteres("12345")).toBe(5);
 // });
//})

//EXERCICIO 6

//describe("calculadora", function() {
  //it("deve retornar 6 quando somar 4 e 2", function() {
 //   expect(calculadora(4, 2, "+")).toBe(6);
 // });

 // it("deve retornar 2 quando subtrair 4 e 2", function() {
   // expect(calculadora(4, 2, "-")).toBe(2);
  //});

 // it("deve retornar 8 quando multiplicar 4 e 2", function() {
  //  expect(calculadora(4, 2, "*")).toBe(8);
 // });

  //it("deve retornar 2 quando dividir 4 por 2", function() {
   // expect(calculadora(4, 2, "/")).toBe(2);
 // });

 // it("deve retornar erro ao dividir por zero", function() {
  //  expect(calculadora(4, 0, "/")).toBe("Erro: divisão por zero!");
 // });

//  it("deve retornar erro ao passar operador inválido", function() {
 //   expect(calculadora(4, 2, "^")).toBe("Operador inválido!");
//  });
//});
