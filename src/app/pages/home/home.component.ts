import { Component, OnInit } from '@angular/core';
import { Project, ProjectDetail } from 'src/app/models/project';
import * as data from '../../../assets/data/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: ProjectDetail[] = []
  isModalVisible: boolean = false;
  projectView: ProjectDetail = null;

  constructor() {
    this.projects = data.projects as ProjectDetail[];
  }

  ngOnInit(): void {
  }

  openModal(index: number) {
    this.projectView = this.projects[index]
    this.isModalVisible = true;
  }

  closeModal(ev) {
    this.isModalVisible = ev.target;
  }

}
