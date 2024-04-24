import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() project: ProjectDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
