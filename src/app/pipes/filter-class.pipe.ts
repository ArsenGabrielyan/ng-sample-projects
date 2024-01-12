import { Pipe, PipeTransform } from '@angular/core';
import { IFilterItem } from '../interfaces/filter-project';

@Pipe({
  name: 'filterClass'
})
export class FilterClassPipe implements PipeTransform {
  transform(arr: IFilterItem[], item: string):IFilterItem[]{
    if(item==="all") return arr;
    return arr.filter(val=>val.filter.toLowerCase().includes(item.toLowerCase()));
  }
}
