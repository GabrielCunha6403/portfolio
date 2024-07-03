import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FloatCardComponent } from './float-card/float-card.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MenuComponent,
    FloatCardComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent
  ],
  exports:[
    MenuComponent,
    FloatCardComponent,
    CardComponent,
    ModalComponent,
    TimelineComponent
  ],
  providers: []
})
export class  ComponentsModule{}
