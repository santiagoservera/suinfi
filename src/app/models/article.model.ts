export interface IArticles {
    id:          number;
    nombre:      string;
    descripcion: null;
    precio:      number;
    imagen1:     string;
    categoria:   Categoria;
}

export interface Categoria {
    id:     number;
    codigo: string;
    nombre: string;
}
