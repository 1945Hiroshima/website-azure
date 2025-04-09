document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Obter os valores dos inputs
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  // Validar se os valores são números válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  // Calcular o IMC
  const imc = peso / (altura * altura);
  let resultado = "";

  // Determinar a classificação do IMC
  if (imc < 18.5) {
    resultado = "Baixo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    resultado = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    resultado = "Obesidade Grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    resultado = "Obesidade Grau 2 (Severa)";
  } else {
    resultado = "Obesidade Grau 3 (Mórbida)";
  }

  // Exibir o resultado
  document.getElementById('resultado').innerText = Seu IMC é ${imc.toFixed(2)}. Classificação: ${resultado};
});