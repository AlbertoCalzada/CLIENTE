function signin(email, pass, response){      //para autenticar al usuario
    for(let i = 0; i < response.length; i += 1)
        if(response[i]["correo"] == email)
        {
            if (response[i]["contrasena"] == pass)
            {
                $(".succesSignIn").css("display", "block")
                $(".calculator").css("display", "block")
                $("#iName").text(response[i]["nomape"])
                $("#iGender").text(response[i]["sexo"])
                $("#iDate").text(response[i]["fecha"])
                $("#iCcid").text(response[i]["ccid"])
                return 1;
            }
        }
    alert("DATOS INCORRECTOS")
}

function update(email, pass, name, gender, datebirth, response)
{
    console.log("hola")
        $.ajax({
            async: false,
            data:  {"email": email, "pass": pass, "name": name, "gender": gender, "datebirth": datebirth}, //datos que se envian a traves de ajax
            url:   '../bbdd/update.php', //archivo que recibe la peticion
            type:  'post',
            success:  function (res) {
                console.log("hola")
            }
        })
}

function signup(email, pass, name, gender, datebirth)
{
    var parametros = {
        "name" : name,
        "email": email,
        "pass": pass,
        "gender": gender,
        "datebirth": datebirth
    };
    $.ajax({
            data:  parametros, //datos que se envian a traves de ajax
            url:   "../bbdd/signup.php", //archivo que recibe la peticion
            type:  'post', //método de envio
            // beforeSend: function () {
            //         $("#resultado").html("Procesando, espere por favor...");
            // },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                $json = JSON.parse(response);
                alert("Usuario registrado tu clave es: " + $json.key);
            }
    });
}

function forget(email, date, response)
{
    console.log("heyyo00");
    for(let i = 0; i < response.length; i += 1)
    if(response[i]["correo"] == email)
    {
        console.log("sionotuy" + response[i]["fecha"]);
        console.log("sionotuy" + date);
        if (response[i]["fecha"] == date)
        {
            alert(response[i]["contrasena"])
            return ;
        }
    }
    alert("DATOS INCORRECTOS")
}

function getCcid(kg, cm, activity, response){

}

function doWork(work){
    $.ajax({
        async: false,
        data:  null, //datos que se envian a traves de ajax
        url:   '../bbdd/getUser.php', //archivo que recibe la peticion
        type:  'get',
        success:  function (response) {
            next(JSON.parse(response), work)
        }
    });
}

function next(response, work){
    switch(work){
        case "signin":
            signin($('#email').val(), $('#pass').val(), response)
            break;
        case "signup":
            signup($('#rEmail').val(), $('#rPass').val(), $('#rName').val(), $('#rGender').val(), $('#rDatebirth').val())
            break;
        case 'forget':
            forget($('#fEmail').val(), $('#fDatebirth').val(), response)
            break;
        case 'update':
            update($('#uEmail').val(), $('#uPass').val(), $('#uName').val(), $('#uGender').val(), $('#uDatebirth').val(), response)
            break;
        case 'deleted':
            deleted($('#dEmail').val(), $('#dPass').val(), $('#dAdd').val(), response)
            break;
        case 'getCcid':
            getCcid($('#kg').val(), $('#cm').val(), $('#activity').val(), response)
        default:
            break;
    }
}