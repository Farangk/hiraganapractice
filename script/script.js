function abrirModal(letra) {
  const modal = document.getElementById(`modal-${letra}`);
  if (modal) {
      modal.style.display = 'flex';
  }
}

function cerrarModal(letra) {
  const modal = document.getElementById(`modal-${letra}`);
  if (modal) {
      modal.style.display = 'none';
  }
}



window.onclick = function(event){
  const modales = document.querySelectorAll('.modal');

  modales.forEach(function(modal){
    if(event.target === modal){
      modal.style.display='none';
    }
  })
}