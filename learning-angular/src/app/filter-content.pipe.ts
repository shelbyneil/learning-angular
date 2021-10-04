import { Pipe, PipeTransform } from '@angular/core';
import { Content } from 'helper-files/content-interface';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(content: Content[]) {
    return content.filter(c => c.type != null && c.type == "Crime");
  }

}
