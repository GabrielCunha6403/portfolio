import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FloatCardComponent } from './float-card/float-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FloatCardComponent
  ],
  exports:[
    FloatCardComponent
  ],
  providers: []
})
export class  ComponentsModule{}
