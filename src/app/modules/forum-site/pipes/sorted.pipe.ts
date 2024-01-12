import { Pipe, PipeTransform } from '@angular/core';
import {IPost} from "../../../interfaces/post";

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {
  transform(posts: IPost[]): IPost[]{
    return [...posts.sort((a,b)=> 
      a.points > b.points ? -1 : a.points+b.points
    )];
  }
}
