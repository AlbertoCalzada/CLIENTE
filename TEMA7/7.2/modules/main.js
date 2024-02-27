function consultarSaldo() {
    var nif = document.getElementById('nif').value;
    var clave = document.getElementById('clave').value;
  
    $.ajax({
      type: "POST",
      url: "consultasaldo.php",
      async: true,
      data: { nif: nif, clave: clave },
      success: function (response) {
        $('#resultado').html(response);
      }
    });
  }

function solicitarClave() {
  var solicitarClaveDiv = document.getElementById("solicitarClave");
  solicitarClaveDiv.style.display = "block";
}

function generarClave() {
  var nif = document.getElementById('nif2').value;
  var fecha = document.getElementById('dateLicense').value;

  $.ajax({
      type: "POST",
      url: "consultasaldo.php",
      async: true,
      data: { nif2: nif, dateLicense: fecha },
      success: function (response) {
          $('#nuevaClave').html(response);
      }
  });
}