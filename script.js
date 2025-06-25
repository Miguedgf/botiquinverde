
const recetas = [
  {
    nombre: "Agua caliente con sal marina y limón",
    ingredientes: "Agua caliente, sal marina, limón",
    beneficios: "Mejora la digestión, desintoxica, estimula la circulación",
    intensidad: "Leve",
    nota: "Tomar en ayunas para mejores resultados."
  },
  {
    nombre: "Batido Detox Extremo",
    ingredientes: "Espinaca, pepino, manzana verde, jengibre, cúrcuma, limón, agua de coco",
    beneficios: "Quema grasa, reduce inflamación, da energía",
    intensidad: "Moderada",
    nota: "Tomar en la mañana como parte de un plan detox."
  },
  {
    nombre: "Té de jengibre, cúrcuma y limón",
    ingredientes: "Jengibre, cúrcuma, limón, agua",
    beneficios: "Refuerza defensas, antiinflamatorio, mejora digestión",
    intensidad: "Leve",
    nota: "Ideal en ayunas."
  }
];

const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");

function mostrarRecetas(data) {
  results.innerHTML = "";
  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${r.nombre}</h3>
      <p><strong>Ingredientes:</strong> ${r.ingredientes}</p>
      <p><strong>Beneficios:</strong> ${r.beneficios}</p>
      <p><strong>Intensidad:</strong> ${r.intensidad}</p>
      <p><strong>Nota:</strong> ${r.nota}</p>`;
    results.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = recetas.filter(r =>
    r.nombre.toLowerCase().includes(term) ||
    r.ingredientes.toLowerCase().includes(term) ||
    r.beneficios.toLowerCase().includes(term)
  );
  mostrarRecetas(filtered);
});

mostrarRecetas(recetas);
