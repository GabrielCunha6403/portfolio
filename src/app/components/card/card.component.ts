import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

  getIconClass(topic: string) {
    switch(topic.toUpperCase()) {
      case "DOCKER":
        return "fab fa-docker color-blue";
      case "ANGULAR":
        return "fab fa-angular color-red";
      case "VUE":
        return "fab fa-vuejs color-green";
      case "SPRING":
        return "fas fa-leaf color-green";
      case "JAVA":
        return "fab fa-java color-orange";
      case "JAVASCRIPT":
        return "fab fa-js color-yellow";
      case "HTML":
        return "fab fa-html5 color-blue";
      case "CSS":
        return "fab fa-css3-alt color-orange";
    }
  }

}
