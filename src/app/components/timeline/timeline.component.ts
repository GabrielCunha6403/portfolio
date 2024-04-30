import { Component, Input, OnInit } from '@angular/core';
import { TimeLineRow } from 'src/app/models/project';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() data: TimeLineRow[];

  constructor() { }

  ngOnInit(): void {
  }

}
