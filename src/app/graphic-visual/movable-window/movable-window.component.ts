import { Component, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-movable-window',
  templateUrl: './movable-window.component.html',
  styleUrls: ['./movable-window.component.scss']
})
export class MovableWindowComponent {
  @ViewChild('movableWindow', { static: true }) movableWindow!: ElementRef;


  isDragging = false;
  startX = 0;
  startY = 0;
  windowLeft = 0;
  windowTop = 0;

  constructor(private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.movableWindow.nativeElement.contains(event.target)) {
       this.hideComponent();
    }
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX - this.movableWindow.nativeElement.getBoundingClientRect().left;
    this.startY = event.clientY - this.movableWindow.nativeElement.getBoundingClientRect().top;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }

    const newLeft = event.clientX - this.startX;
    const newTop = event.clientY - this.startY;

    this.renderer.setStyle(this.movableWindow.nativeElement, 'left', `${newLeft}px`);
    this.renderer.setStyle(this.movableWindow.nativeElement, 'top', `${newTop}px`);
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  private hideComponent(): void {
    // Lógica para esconder o componente, por exemplo, defina uma propriedade visível para false
    // this.visible = false;
  }
}
