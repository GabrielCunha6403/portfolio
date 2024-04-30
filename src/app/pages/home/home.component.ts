import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Project, ProjectDetail, Skill, SkillTools, TimeLineRow } from 'src/app/models/project';
import * as data from '../../../assets/data/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('perfilImage', {static: false}) private perfilImage: ElementRef<HTMLDivElement>;
  isPerfilImageScrolledIntoView: boolean;
  projects: ProjectDetail[] = [];
  timeline: TimeLineRow[] = [];
  skills: SkillTools;
  isModalVisible: boolean = false;
  projectView: ProjectDetail = null;

  constructor() {
    this.projects = data.projects as ProjectDetail[];
    this.skills = data.skills as SkillTools;
    this.timeline = data.timeline as TimeLineRow[];
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.perfilImage){
      const rect = this.perfilImage.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isPerfilImageScrolledIntoView = topShown && bottomShown;
    }
  }

  openModal(index: number) {
    this.projectView = this.projects[index]
    this.isModalVisible = true;
  }

  closeModal(ev) {
    this.isModalVisible = ev.target;
  }

}
