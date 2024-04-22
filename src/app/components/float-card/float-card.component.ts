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
    const rect = element.getBoundingClientRect();
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 2;
    const offsetX = ((event.clientX - middleX) / middleX) * 45; // Reduzir o multiplicador se o efeito for muito forte
    const offsetY = ((event.clientY - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX", `${offsetX}deg`);
    element.style.setProperty("--rotateY", `${-offsetY}deg`);
  }

}
