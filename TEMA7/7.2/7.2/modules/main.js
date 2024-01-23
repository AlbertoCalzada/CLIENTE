function consultarSaldo() {
    var nif = document.getElementById('nif').value;
    var clave = document.getElementById('clave').value;
  
    $.ajax({
      type: "POST",
      url: "consultasaldo.php",
      data: { nif: nif, clave: clave },
      success: function (response) {
        $('#resultado').html(response);
      }
    });
  }