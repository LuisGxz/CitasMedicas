const btnOpenDialog = document.getElementById('open-dialog');
const dialog = document.getElementById('dialog');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');
const closeButton = document.getElementById('close-button');

for (let i = 1; i <= 5; i++) {
    const btnOpenDialog = document.getElementById(`open-dialog${i}`);
    btnOpenDialog.addEventListener("click", function() {
      showDialog(); // muestra la ventana de diálogo existente
    });
  }

function showDialog() {
  dialog.style.display = 'block';
}

function hideDialog() {
  dialog.style.display = 'none';
}


confirmButton.addEventListener('click', function() {
  // Lógica de la confirmación
  // ...
  // Cierra la ventana de diálogo
  hideDialog();
});

cancelButton.addEventListener('click', function() {
  // Cierra la ventana de diálogo
  hideDialog();
});

closeButton.addEventListener('click', function() {
  // Cierra la ventana de diálogo
  hideDialog();
});

const btnOpenDialogConfirm = document.getElementById('confirm-button');
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
  hideDialogConfirm();
});

cancelButtonConfirm.addEventListener('click', function() {
  // Cierra la ventana de diálogo
  hideDialogConfirm();
});
closeButtonConfirm.addEventListener('click', function() {
    // Cierra la ventana de diálogo
    hideDialogConfirm();
});

//Cancelar citas medicas