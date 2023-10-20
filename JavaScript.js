function obtenerGrados() {
  let Grados = document.getElementById("Grados").value;
  let G = document.getElementById("G").value;
  let Resultado = document.getElementById("Resultado");

  let Celsius, Kelvin, Fahrenheit;

  if (G === "Celsius") {
      Celsius = parseFloat(Grados);
      Kelvin = Celsius + 273.15;
      Fahrenheit = (Celsius * 9/5) + 32;
  } else if (G === "Kelvin") {
      Kelvin = parseFloat(Grados);
      Celsius = Kelvin - 273.15;
      Fahrenheit = (Celsius * 9/5) + 32;
  } else if (G === "Fahrenheit") {
      Fahrenheit = parseFloat(Grados);
      Celsius = (Fahrenheit - 32) * 5/9;
      Kelvin = Celsius + 273.15;
  }

  Resultado.textContent = `Celsius: ${Celsius}°C, Kelvin: ${Kelvin} K, Fahrenheit: ${Fahrenheit}°F`;
}







