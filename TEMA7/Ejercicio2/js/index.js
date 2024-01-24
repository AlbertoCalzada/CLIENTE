function getData() {
  var nif = document.getElementById('nif').value;
  var clave = document.getElementById('clave').value;

  $.ajax({
    type: "POST",
    url: "bbdd/consulta.php",
    data: { nif: nif, clave: clave },
    success: function (response) {
      $('#resultado').html(response);
    }
  });
}

function Next() {
  var aleatorio = Math.round(Math.random() * 999999);
  var nif = document.getElementById('nif').value;

  $.ajax({
      type: "POST",
      url: "bbdd/generarClave.php",
      data: { aleatorio: aleatorio, nif: nif },
      success: function (response) {
          $('#aleatorio').html(response);
          $(".hidden").css("display", "block");
      }
  });
}


/*function Next() {
  var aleatorio = Math.round(Math.random() * 999999);
  $('#aleatorio').html(aleatorio);
}*/


