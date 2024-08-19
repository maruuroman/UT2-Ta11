function duplicates(nums) {
  const elementosUnicos = new Set(); // Almacena los elementos únicos
  const repetidos = new Set(); // Almacena los elementos duplicados

  nums.forEach(num => {
    if (elementosUnicos.has(num)) {
      repetidos.add(num); // Si ya existe en elementosUnicos, es un duplicado
    } else {
      elementosUnicos.add(num); // Si no existe en elementosUnicos, se agrega
    }
  });

  console.log(repetidos.size); 
  return repetidos.size;
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]); //  2
