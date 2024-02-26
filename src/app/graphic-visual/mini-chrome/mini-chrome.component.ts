import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mini-chrome',
  templateUrl: './mini-chrome.component.html',
  styleUrls: ['./mini-chrome.component.scss']
})
export class MiniChromeComponent {
  @ViewChild('iframeElement') iframeElement!: ElementRef<HTMLIFrameElement>;
  @ViewChild('startMenu') startMenu!: ElementRef<any>;

  private isDragging: boolean = false;
  private initialX: number = 0;
  private initialY: number = 0;
  myName = 'Gabriel Saito';
   rick = false;
  currentUrl: string = 'https://www.google.com';

  constructor(private renderer: Renderer2) {}

  loadPage() {
    this.currentUrl = this.sanitizeUrl(this.currentUrl);
    this.iframeElement.nativeElement.src = this.currentUrl;
  }

  private sanitizeUrl(url: string): string {
    return url.trim();
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialX = event.clientX - this.startMenu.nativeElement.offsetLeft;
    this.initialY = event.clientY - this.startMenu.nativeElement.offsetTop;
  }

  rickroll(){
    this.rick = !this.rick
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const x = event.clientX - this.initialX;
      const y = event.clientY - this.initialY;

      this.renderer.setStyle(this.startMenu.nativeElement, 'left', `${x}px`);
      this.renderer.setStyle(this.startMenu.nativeElement, 'top', `${y}px`);
    }
  }
}
