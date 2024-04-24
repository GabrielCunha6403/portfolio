import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import * as data from '../../../assets/data/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project[] = []

  constructor() {
    this.projects = data.projects as Project[];
  }

  ngOnInit(): void {
  }

}
