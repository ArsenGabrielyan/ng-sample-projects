import { NgModule } from '@angular/core';
import { FilterClassPipe } from 'src/app/pipes/filter-class.pipe';

@NgModule({
  declarations: [FilterClassPipe],
  exports: [FilterClassPipe]
})
export class PipesModule { }
