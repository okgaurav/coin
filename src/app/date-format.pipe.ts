import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'dateFormat'
})
export default class DateFormatPipe implements PipeTransform {

  transform(value: Date | string | null): string {
    if (!value) return '';

    const date = new Date(value);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
