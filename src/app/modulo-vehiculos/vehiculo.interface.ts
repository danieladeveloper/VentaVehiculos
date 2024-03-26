


export interface Vehiculo {
    codigo?: string,
    marca?:string,
    //color?:string,
    modelo?:string,
    kilometraje?:string,
    precio?:number,
    foto?:string
    anio?:number,
    calificacion?:number
}


export interface RespuestaApi{
 codigo:string;
 mensaje: string;
 data: Array<Vehiculo> | Vehiculo | any;
 rows:number;
 pages: number;
 records: number;
 page:number;
}


// Heviculo Anterior para trabajar solo con vectores en el Service
export interface VehiculoX {
    vehiculo_id?: number,
    vehiculo_marca?:string,
    vehiculo_modelo?:string,
    vehiculo_anio?:number,
    //vehiculo_color?:string,
    vehiculo_kilometros?:number,
    vehiculo_precio?:number,
    vehiculo_calificacion?:number,
    vehiculo_foto?:string
}