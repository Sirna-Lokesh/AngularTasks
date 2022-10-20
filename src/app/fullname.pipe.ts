import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): unknown {
    return firstName + ' ' + lastName;

}
}
