import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatModifier'
})
export class FormatModifierPipe implements PipeTransform {

  transform(modifier:number): unknown {
    return (modifier >= 0) ? `+${modifier}` : `${modifier}`;
  }

}
