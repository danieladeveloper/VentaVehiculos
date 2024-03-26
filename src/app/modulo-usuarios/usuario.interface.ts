export interface Usuario {
    id: number,
    nombre: string,
    apellido: string,
    password?:string,
    telefono?:string,
    email?:string
}


export interface RespuestaUsuarioApi{
    codigo:string;
    mensaje: string;
    data: Array<Usuario> | Usuario | any;
    rows:number;
    pages: number;
    records: number;
    page:number;
}
   