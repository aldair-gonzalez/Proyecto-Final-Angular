import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permisos'
})
export class PermisosPipe implements PipeTransform {

  transform(rol: boolean, ...args: string[]): string {
    return rol ? `${args[0]}` : `${args[1]}`;
  }

}
