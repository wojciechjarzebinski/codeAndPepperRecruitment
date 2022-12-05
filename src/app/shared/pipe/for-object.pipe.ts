import { PipeTransform, Pipe } from '@angular/core';
import { entries, isNull } from 'lodash';

/**
 * Transform a literal object into array
 */
@Pipe({
  name: 'forObject',
  pure: true,
})
export class ForObjectPipe implements PipeTransform {
  transform(object: any, args?: any): any {
    if (isNull(object)) {
      return [];
    }
    return entries(object);
  }
}
