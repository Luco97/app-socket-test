import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newName'
})
export class NewNamePipe implements PipeTransform {

  transform(nombre: any): string {
    if(nombre) {
      return nombre;
    }
    return 'No existe o Dato eliminado'
  }

}
