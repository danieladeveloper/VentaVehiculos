import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehiculoEstrellas'
})
export class VehiculoEstrellasPipe implements PipeTransform {

  transform(calificacion: any, ...args: unknown[]): any {
    let estrellas:string = "";
    if (calificacion){
      for(let i = 0; i< calificacion; i++){
        estrellas += '<i class="bi bi-star-fill"></i>';
     
      }
    }

    return estrellas;


  }

}
