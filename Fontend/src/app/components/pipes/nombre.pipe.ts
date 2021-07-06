import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: string): string {

     value= value.toLowerCase();
     let nombres= value.split(' ');
     debugger
     if(value){
      nombres = nombres.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
       })
     }
     
 

      console.log(nombres);
    return nombres.join(' ');
  }
}
