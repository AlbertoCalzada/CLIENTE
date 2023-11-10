class Cine {
    constructor(direccion, ciudad, pais, cp, contacto, taquilla, email, parking, plazas_parking, acceso_minusvalido, sonido, film) {
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.pais = pais;
        this.cp = cp;
        this.contacto = contacto;
        this.taquilla = taquilla;
        this.email = email;
        this.parking = parking;
        this.plazas_parking = plazas_parking;
        this.acceso_minusvalido = acceso_minusvalido;
        this.sonido = sonido;
        this.film = film;
    }


    MostrarInfo() {
        document.write("<p>" + this.direccion + "</p>");
        document.write("<p>Ciudad: " + this.ciudad + "</p>");
        document.write("<p>País: " + this.pais + "</p>");
        document.write("<p>Código Postal: " + this.cp + "</p>");
        document.write("<p>Contacto: " + this.contacto + "</p>");
        document.write("<p>Taquilla: " + this.taquilla + "</p>");
        document.write("<p>Email: " + this.email + "</p>");
        document.write("<p>Parking: " + (this.parking ? 'Disponible' : 'No disponible') + "</p>");
        document.write("<p>Plazas de Parking: " + this.plazas_parking + "</p>");
        document.write("<p>Acceso para minusválidos: " + (this.acceso_minusvalido ? 'Disponible' : 'No disponible') + "</p>");
        document.write("<p>Sonido: " + this.sonido + "</p>");

    }
    /* infotitulo(pelicula)  que mostrará todos los datos de la película 
    seleccionada tal y como se muestran en la Figura 3.*/
    MostrarInfoPelicula(index) {
        let pelicula = this.film[index];
        let newWin = window.open("about:blank", "hello", "width=400,height=400");
        
        newWin.document.write("<h2>" + pelicula["titulo"] + "</h2>");
        newWin.document.write("<p>Director: " + pelicula["director"] + "</p>");
        newWin.document.write("<p>Género: " + pelicula["genero"] + "</p>");
        newWin.document.write("<p>Clasificación: " + pelicula["clasificacion"] + "</p>");
        newWin.document.write("<p>Descripción: " + pelicula["descripcion"] + "</p>");
        newWin.document.write("<p>Duración: " + pelicula["duracion"] + "</p>");
        newWin.document.write("<p>Actores: " + pelicula["actores"] + "</p>");
        newWin.document.write("<img src='" + pelicula["link_imagen"] + "'></img>");

        // Agrega más información según sea necesario

        // Cierra el documento
        newWin.document.close();
    }
    
    MostrarPeliculas() {
        document.write("<h3>Películas:</h3>");
        document.write("<ul>");
        for (let i = 0; i < this.film.length; i++) {
            document.write("<li>");
            document.write("<p><a href='javascript:void(0);' onclick='cineMadrid.MostrarInfoPelicula(" + i + ")'><h4>" + this.film[i]["titulo"] + "</h4></a></p>");
            document.write("<p>Género: " + this.film[i]["genero"] + "</p>");
            document.write("<p>Nacionalidad: " + this.film[i]["nacionalidad"] + "</p>");
            document.write("<p>Clasificación: " + this.film[i]["clasificacion"] + "</p>");
            document.write("<img src='" + this.film[i]["link_imagen"] + "' alt='Imagen de la película'>");
            document.write("</li>");
        }
        document.write("</ul>");
    }

}

var peliculas = [
    {
        "pid": '1',
        "titulo": "Transformers",
        "director": "Michael Bay",
        "nacionalidad": "Americana",
        "genero": "Accion/Ciencia Ficcion",
        "clasificacion": "+13",
        "descripcion": "A long time ago, far away on the planet of Cybertron…",
        "duracion": "144",
        "actores": "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson",
        "link_exterior": "http://www.transformersmovie.com/intl/es/",
        "link_imagen": "./img/tf.png"
    },
    {
        "pid": '2',
        "titulo": "Joshua",
        "director": "George Ratliff",
        "nacionalidad": "Americana",
        "genero": "Thriller",
        "clasificacion": "+18",
        "descripcion": "The arrival of a newborn girl causes the gradual disintegration of …",
        "duracion": "130",
        "actores": "Sam Rockwell, Vera Farmiga, Celia Weston",
        "link_exterior": "http://imdb.com/title/tt0808331/",
        "link_imagen": "./img/joshua.png"
    }
];



let cineMadrid = new Cine(
    "Cine Madrid Center",
    "Calle Gran Vía, 123",
    "Madrid",
    "España",
    "28001",
    "Juan Pérez",
    "Taquilla Principal",
    "info@cine-madrid.com",
    true,
    200,
    "Dolby Atmos",
    peliculas
);











