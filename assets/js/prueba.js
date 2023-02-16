const btnOpenDialogConfirm = document.getElementById('open-dialog-confirm');
const dialogConfirm = document.getElementById('dialog-confirm');
const confirmButtonConfirm = document.getElementById('confirm-button-confirm');
const cancelButtonConfirm = document.getElementById('cancel-button-confirm');
const closeButtonConfirm = document.getElementById('close-button-confirm');

btnOpenDialogConfirm.addEventListener("click", function() {
  showDialogConfirm();
});

function showDialogConfirm() {
  dialogConfirm.style.display = 'block';
}

function hideDialogConfirm() {
  dialogConfirm.style.display = 'none';
}

confirmButtonConfirm.addEventListener('click', function() {
  // Lógica de confirmación
  // ...
  // Cierra la ventana de diálogo
  hideDialog();
});

cancelButtonConfirm.addEventListener('click', function() {
  // Cierra la ventana de diálogo
  hideDialog();
});