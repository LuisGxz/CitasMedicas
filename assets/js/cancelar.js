const btnOpenDialog = document.getElementById("open-dialog1");
const btnOpenDialog2 = document.getElementById("open-dialog2");
const dialog = document.getElementById("dialog");
const confirmButton = document.getElementById("confirm-button");
const cancelButton = document.getElementById("cancel-button");
const closeButton = document.getElementById("close-button");
const contentDialog1 = document.getElementById("content-dialog1");
const contentDialog2 = document.getElementById("content-dialog2");

btnOpenDialog.addEventListener("click", function () {
  showDialog(); // muestra la ventana de diálogo existente
});
btnOpenDialog2.addEventListener("click", function () {
    showDialog(); // muestra la ventana de diálogo existente
  });
function showDialog() {
  dialog.style.display = "block";
}

function hideDialog() {
  dialog.style.display = "none";
}

confirmButton.addEventListener("click", function () {
  // Lógica de la confirmación
  // ...
  // Cierra la ventana de diálogo
  contentDialog1.style.display="none";
  hideDialog();
  
});

cancelButton.addEventListener("click", function () {
  // Cierra la ventana de diálogo
  hideDialog();
});

closeButton.addEventListener("click", function () {
  // Cierra la ventana de diálogo
  hideDialog();
});
