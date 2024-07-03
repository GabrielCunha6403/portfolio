import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Project, ProjectDetail, Skill, SkillTools, TimeLineRow } from 'src/app/models/project';
import * as data from '../../../assets/data/data.json';
import { MenuItem } from './types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('perfilImage', {static: false}) private perfilImage: ElementRef<HTMLDivElement>;
  isPerfilImageScrolledIntoView: boolean;
  selectedSection: string = '';
  offsetTop: number = 100;
  windowY: number;
  projects: ProjectDetail[] = [];
  timeline: TimeLineRow[] = [];
  skills: SkillTools;
  isModalVisible: boolean = false;
  projectView: ProjectDetail = null;
  menuList: MenuItem[] = [
    {title: 'Bem-vindo', id: 'welcome', offsetTop: null},
    {title: 'Projetos', id: 'projects', offsetTop: null},
    {title: 'Linha do tempo', id: 'timeline', offsetTop: null},
    {title: 'Competências', id: 'skills', offsetTop: null}
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.projects = data.projects as ProjectDetail[];
    this.skills = data.skills as SkillTools;
    this.timeline = data.timeline as TimeLineRow[];
    setTimeout(() => this.setMenuListOffsets(), 100);
  }

  @HostListener("document:scroll")
  checkScroll() {
    for (let i = 0; i < this.menuList.length; i++) {
      if(this.menuList[i].offsetTop <= window.scrollY + this.offsetTop) {
        this.selectedSection = this.menuList[i].id;
      }
    }
    this.windowY = window.scrollY;
  }

  openModal(index: number) {
    this.projectView = this.projects[index]
    this.isModalVisible = true;
  }

  closeModal(ev) {
    this.isModalVisible = ev.target;
  }

  setMenuListOffsets() {
    this.menuList.forEach(item => {
      let elemento = document.getElementById(item.id);
      let bodyElement = document.querySelector('body');
      const rect = elemento.getBoundingClientRect();
      const rectBody = bodyElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      item.offsetTop = rectBody.top + rect.top;
    })
    console.log(this.menuList);
  }

}
