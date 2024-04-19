import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-card',
  templateUrl: './float-card.component.html',
  styleUrls: ['./float-card.component.css'],
})
export class FloatCardComponent implements OnInit {

  @Input() id: string;
  card: HTMLElement;

  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(ev) {
    const element = document.querySelector("#" + this.id);
    this.rotateCard(ev, element);
  }

  rotateCard(event, element) {
    const x = event.clientX;
    const y = event.clientY;
    const middleX = /*window.innerWidth*/ element.style.width / 2; //element.offsetWidth
    const middleY = /*window.innerHeight*/  element.style.height / 2; //element.offsetHeight
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -offsetY + "deg");
  }

}
