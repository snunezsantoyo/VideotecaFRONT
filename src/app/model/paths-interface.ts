export interface Directory {
    nombre:   string;
    archivos: Archivo[];
}

export interface Archivo {
    ruta:        string;
    name:        string;
    isDirectory: boolean;
    extension:   string;
}

export interface Ruta {
    url : string
}