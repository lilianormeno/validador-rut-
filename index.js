function validarRut(rut) {
  // Verificar que el rut no esté vacío
  if (rut === '') {
    return false;
  }

  // Eliminar puntos y guiones del rut
  rut = rut.replace(/\./g, '').replace(/-/g, '');

  // Extraer dígito verificador y número
  var digitoVerificador = rut.slice(-1).toUpperCase();
  var rutNumero = parseInt(rut.slice(0, -1));

  // Verificar que el número sea válido
  if (isNaN(rutNumero)) {
    return false;
  }

  // Calcular dígito verificador esperado
  var suma = 0;
  var multiplicador = 1;
  while (rutNumero > 0) {
    multiplicador++;
    if (multiplicador === 8) {
      multiplicador = 2;
    }
    suma += (rutNumero % 10) * multiplicador;
    rutNumero = Math.floor(rutNumero / 10);
  }

  var digitoEsperado = 11 - (suma % 11);
  if (digitoEsperado === 10) {
    digitoEsperado = 'K';
  } else if (digitoEsperado === 11) {
    digitoEsperado = '0';
  } else {
    digitoEsperado = digitoEsperado.toString();
  }

  // Comparar dígito verificador ingresado con el esperado
  return digitoVerificador === digitoEsperado;
}

// Ejemplo de uso:
var rut = '19.118.298-7';
if (validarRut(rut)) {
  console.log('El RUT es válido');
} else {
  console.log('El RUT no es válido');
}