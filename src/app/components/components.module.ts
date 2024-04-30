import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FloatCardComponent } from './float-card/float-card.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FloatCardComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent
  ],
  exports:[
    FloatCardComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent
  ],
  providers: []
})
export class  ComponentsModule{}
