import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastName'
})
export class LastNamePipe implements PipeTransform {

  transform(nombre:any): string {
    if(nombre){
      return nombre;
    }
    return 'No existe o Dato creado';
  }

}
