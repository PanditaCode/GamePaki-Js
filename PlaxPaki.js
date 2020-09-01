class pakiman {
    constructor(n, v, a) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    } {
        alert(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</stron><br/>");
        document.write("vida:" + this.vida + "<br/>");
        document.write("ataque:" + this.vida + "hr />");
    }
}