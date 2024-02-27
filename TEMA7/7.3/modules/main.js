function iniciarSesion() {
  var nif = $('#nif').val();
  var clave = $('#clave').val();

  if (clave.length === 10) {
      $.ajax({
          type: 'POST',
          url: 'connection.php',
          data: { nif: nif, clave: clave },
          success: function (resultado) {
              mostrarResultado(JSON.parse(resultado));
          },
          error: function () {
              alert("Error al iniciar sesión. Verifica tus credenciales.");
          }
      });
  } else {
      alert("Por favor, introduce un NIF/NIE válido y una clave de 10 caracteres.");
  }
}

function mostrarResultado(resultado) {
  var resultadoDiv = $('#resultado');
  resultadoDiv.html("<p>Nombre: " + resultado.nombre + "</p>" +
      "<p>Apellidos: " + resultado.apellidos + "</p>" +
      "<p>Grupos de Investigación: " + resultado.grupos + "</p>");
}

function registrarUsuario() {
  var nombre = $('#nombre').val();
  var apellido1 = $('#apellido1').val();
  var apellido2 = $('#apellido2').val();
  var fecha = $('#fecha').val();
  var nif = $('#nif').val();
  var nacionalidad = $('#nacionalidad').val();
  var genero = $('#genero').val();
  var adscripcion = $('#adscripcion').val();
  var categoria = $('#categoria').val();
  var entidad = $('#entidad').val();
  var email = $('#email').val();
  var telefono = $('#telefono').val();
  var movil = $('#movil').val();

  $.ajax({
      type: 'POST',
      url: '../connection.php',
      data: {
          accion: 'registro',
          nombre: nombre,
          apellido1: apellido1,
          apellido2: apellido2,
          fecha: fecha,
          nif: nif,
          nacionalidad: nacionalidad,
          genero: genero,
          adscripcion: adscripcion,
          categoria: categoria,
          entidad: entidad,
          email: email,
          telefono: telefono,
          movil: movil
      },
      success: function (respuesta) {
          $('#registro').html(respuesta);
      },
      error: function () {
          alert("Error en la solicitud de registro.");
      }
  });
}
