import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  setColorScheme() {
    this.themeSelected++;
    if(this.themeSelected > this.styles.length - 1) this.themeSelected = 0;
    document.documentElement.style.setProperty('--colorPrimary', this.styles[this.themeSelected].primary);
    document.documentElement.style.setProperty('--colorSecondary', this.styles[this.themeSelected].secondary);
  }

}
