function mudarFoto(foto) {
  document.getElementById("icone").src = `./_imagens/${foto}.png`;
}

function calcTotal() {
  let qtd = parseInt(document.getElementById("qtd").value)
  let total = qtd * 1500

  document.getElementById("total").value = total
}