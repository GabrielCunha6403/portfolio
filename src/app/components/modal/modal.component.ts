import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() project: ProjectDetail;
  @Input() visible: boolean;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit(false);
  }

}
