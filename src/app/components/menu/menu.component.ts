import { Component, ElementRef, ViewChild, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/pages/home/types/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuSelected: string = '';
  @Input() menuItems: MenuItem[] = [];

  @ViewChild("menu") menu: ElementRef;
  
  menuIsShown: boolean = window.innerWidth > 906;
  offset: number = 70;
  themeSelected = 0;
  styles = [
    { primary: '#FF6F61', secondary: '#005F73' },
    { primary: '#F0F1F6', secondary: '#1E3F66' },
    { primary: '#FFDC80', secondary: '#0006c1' },
    { primary: '#FF9F1C', secondary: '#2EC4B6' },
    { primary: '#FFDC80', secondary: '#833AB4' },
    { primary: '#A8DADC', secondary: '#E63946' },
    { primary: '#FFC6FF', secondary: '#6B705C' }
  ]

  constructor() {
    this.setColorScheme();
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const windowScroll = window.scrollY;
    if (windowScroll == 0) {
      document.querySelector('.menu').classList.add('fixed-top');
    } else {
      document.querySelector('.menu').classList.remove('fixed-top');
    }
  }

  setColorScheme() {
    this.themeSelected++;
    if(this.themeSelected > this.styles.length - 1) this.themeSelected = 0;
    document.documentElement.style.setProperty('--colorPrimary', this.styles[this.themeSelected].primary);
    document.documentElement.style.setProperty('--colorSecondary', this.styles[this.themeSelected].secondary);
  }

  setScroll(value: number) {
    if(window.innerWidth <= 906) {
      this.menuIsShown = false;
      this.menu.nativeElement.classList.toggle("change");
    }
    window.scrollTo({
      top: (value - this.offset),
      behavior: 'smooth'
    });
  }

  toggleMenu() {
    if(window.innerWidth <= 906)
      this.menuIsShown = !this.menuIsShown;
    else 
      this.menuIsShown = true;
  }
  
  myFunction(x) {
    x.classList.toggle("change");
    if(window.innerWidth <= 906)
      this.menuIsShown = !this.menuIsShown;
    else 
      this.menuIsShown = true;
  }

}
