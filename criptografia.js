function criptografar(texto) {
    // Passo 1: deslocar as letras
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      let codigo = texto.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) { // letras maiúsculas
        codigo = ((codigo - 65 + 3) % 26) + 65;
      } else if (codigo >= 97 && codigo <= 122) { // letras minúsculas
        codigo = ((codigo - 97 + 3) % 26) + 97;
      }
      resultado += String.fromCharCode(codigo);
    }
  
    // Passo 2: inverter a linha
    resultado = resultado.split('').reverse().join('');
  
    // Passo 3: deslocar os caracteres a partir da metade
    let metade = Math.ceil(resultado.length / 2);
    let parte1 = resultado.substring(0, metade);
    let parte2 = resultado.substring(metade);
    resultado = parte1 + parte2.replace(/./g, function(c) {
      return String.fromCharCode(c.charCodeAt(0) - 1);
    });
  
    return resultado;
  }

  