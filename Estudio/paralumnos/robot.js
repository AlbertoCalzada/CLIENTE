class Robot {
    nombre;
    tipo;
    estado;
    

    Espera() {
        document.write(this.nombre + " ¡Iniciando modo espera! … ¡En modo espera! <br>");
        this.estado = 0;
    }
   

    Activar() {
        document.write(this.nombre + " ¡Saliendo modo espera … Activado! <br>");
        this.estado = 1;
    }
    

    Ayuda() {
        if (this.estado == 1) {
            document.write(this.nombre + " ¡Vengo inmediatamente! <br>");
        } else if (this.estado == 0) {
            document.write(this.nombre + " Piiip");
        }
    }
    constructor(nombre, tipo, estado) 
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
}

