import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'añosTotal'
})
export class AñosTotalPipe implements PipeTransform {

  transform(value: Date): String {

  }

}
