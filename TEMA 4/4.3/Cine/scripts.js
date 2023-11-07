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
}

function Peliculas() {
    var peliculas = [
        {
            "pid": '1',
            "titulo": "Transformers",
            "director": "Michael Bay",
            "nacionalidad": "Americana",
            "genero": "Accion/Ciencia Ficcion",
            "clasificacion": "PG-13",
            "descripcion": "A long time ago, far away on the planet of Cybertron…",
            "duracion": "144",
            "actores": "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson",
            "link_exterior": "http://www.transformersmovie.com/intl/es/",
            "link_imagen": "imagenes/TF.jpg"
        },
        {
            "pid": '2',
            "titulo": "Joshua",
            "director": "George Ratliff",
            "nacionalidad": "Americana",
            "genero": "Thriller",
            "clasificacion": "No Apta",
            "descripcion": "The arrival of a newborn girl causes the gradual disintegration of …",
            "duracion": "130",
            "actores": "Sam Rockwell, Vera Farmiga, Celia Weston",
            "link_exterior": "http://imdb.com/title/tt0808331/",
            "link_imagen": "imagenes/JO.jpg"
        }
    ];
    return peliculas;
}

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
    true,  
    "Dolby Atmos",
    Peliculas()
    
);

function MostrarInfo() {
    document.write("<h2>" + cineMadrid.direccion + "</h2>");
    document.write("<p>Ciudad: " + cineMadrid.ciudad + "</p>");
    document.write("<p>País: " + cineMadrid.pais + "</p>");
    document.write("<p>Código Postal: " + cineMadrid.cp + "</p>");
    document.write("<p>Contacto: " + cineMadrid.contacto + "</p>");
    document.write("<p>Taquilla: " + cineMadrid.taquilla + "</p>");
    document.write("<p>Email: " + cineMadrid.email + "</p>");
    document.write("<p>Parking: " + (cineMadrid.parking ? 'Disponible' : 'No disponible') + "</p>");
    document.write("<p>Plazas de Parking: " + cineMadrid.plazas_parking + "</p>");
    document.write("<p>Acceso para minusválidos: " + (cineMadrid.acceso_minusvalido ? 'Disponible' : 'No disponible') + "</p>");
    document.write("<p>Sonido: " + cineMadrid.sonido + "</p>");
    document.write("<h3>Películas:</h3>");
    document.write("<ul>");
    cineMadrid.film.forEach(function(pelicula) {
        document.write("<li>" + pelicula.titulo + "</li>");
    });
    document.write("</ul>");
}

var navCine=document.getElementById("navCine");
navCine.innerHTML=MostrarInfo();










