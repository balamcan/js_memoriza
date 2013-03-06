(function() {
    var i = 0, cache = {
        arreglocache: [],
        encontrado: null,
        capacidad: 20,
        //crea un objetocache para meterlo al arreglocache
        objetocache: function(json, catalogo, valor) {
            this.json = json;
            this.catalogo = catalogo;
            this.valor = valor;
            return this;
        },
        //Se agrega los objetos hasta la capacidad del cache
        agregar: function(objetocache) {
            if (this.arreglocache.length < this.capacidad) {
                this.arreglocache.push(objetocache);
            } else {
                this.arreglocache.pop();
                this.arreglocache.push(objetocache);
            }
        },
        //devuelve el objeto a buscar o sino lo encuentra devuelve un null
        buscar: function(catalogo, valor) {
            var retorno = null,
                    i = 0,
                    arreglotamano = this.arreglocache.length;
            for (; i < arreglotamano; i++) {
                if (this.arreglocache[i].catalogo == catalogo && this.arreglocache[i].valor == valor) {
                    retorno = this.arreglocache[i];
                }
            }
            return retorno;
        }
    };
});