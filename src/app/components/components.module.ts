import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FloatCardComponent } from './float-card/float-card.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FloatCardComponent,
    CardComponent,
    ModalComponent
  ],
  exports:[
    FloatCardComponent,
    CardComponent,
    ModalComponent
  ],
  providers: []
})
export class  ComponentsModule{}
