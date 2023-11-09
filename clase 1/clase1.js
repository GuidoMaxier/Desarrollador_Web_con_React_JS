const form = document.getElementById("solicitud-form");
const valorSeguroDiv = document.getElementById("valor-seguro");
const tipoSeguroSelect = form.elements["tipo-seguro"];


function actualizarValorSeguro() {
  const tipoSeguro = tipoSeguroSelect;
  let valorSeguro = "";

  if (tipoSeguro.value === "basico") {
    valorSeguro = "500";
    valorSeguroDiv.style.color = "#999"; 
  } else if (tipoSeguro.value === "intermedio") {
    valorSeguro = "1.000";
    valorSeguroDiv.style.color = "#32CD32"; 
  } else if (tipoSeguro.value === "premium") {
    valorSeguro = "1.500";
    valorSeguroDiv.style.color = "#FFD700"; 
  }

  valorSeguroDiv.textContent = `Valor del seguro ${tipoSeguro.selectedOptions[0].textContent} es: $${valorSeguro}`;
}

tipoSeguroSelect.addEventListener("change", actualizarValorSeguro);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado con Exito");
});
