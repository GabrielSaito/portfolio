import { Component, ElementRef, HostListener, Renderer2, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {
  visible = true;
  @Input() pageName: string = 'Default Page Name'; // Default value is provided


   @ViewChild('Window', { static: true }) windowElement!: ElementRef;
   @ViewChild('windowRef', { static: false }) windowRef!: WindowComponent;

   @ViewChild('Window', { static: true }) Window!: ElementRef;


  isMinimized = false;
  isClosed = false;

  isResized = false;
  isDragging = false;
  startX = 0;
  startY = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(){
    

  }

  ngAfterViewInit() {
    this.adjustSizeAndPosition();
  }
 

  private adjustSize(): void {
    const nativeElement = this.el.nativeElement;
    const windowHeight = window.innerHeight;
    const offsetTop = nativeElement.getBoundingClientRect().top;
    const newHeight = windowHeight - offsetTop - 20; // You can adjust the offset as needed

    this.renderer.setStyle(nativeElement, 'height', `${newHeight}px`);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.windowElement.nativeElement.contains(event.target)) {
      this.hideComponent();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustSizeAndPosition();
  }
  closeWindow() {
    this.windowRef.closeWindow();
  }

  openWindow() {
    this.windowRef.openWindow();
  }

  private adjustSizeAndPosition(): void {
    const nativeElement = this.windowElement.nativeElement;
    const windowHeight = window.innerHeight;

    const offsetTop = nativeElement.getBoundingClientRect().top;
    const newHeight = windowHeight - offsetTop - 20; 

    this.renderer.setStyle(nativeElement, 'height', `${newHeight}px`);
    this.centerElement();
  }



  private centerElement(): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const elementWidth = this.windowElement.nativeElement.offsetWidth;
    const elementHeight = this.windowElement.nativeElement.offsetHeight;

    const newLeft = (windowWidth - elementWidth) / 2;
    const newTop = (windowHeight - elementHeight) / 2;

    this.renderer.setStyle(this.windowElement.nativeElement, 'left', `${newLeft}px`);
    this.renderer.setStyle(this.windowElement.nativeElement, 'top', `${newTop}px`);
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX - this.Window.nativeElement.getBoundingClientRect().left;
    this.startY = event.clientY - this.Window.nativeElement.getBoundingClientRect().top;
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }

    const newLeft = event.clientX - this.startX;
    const newTop = event.clientY - this.startY;

    this.renderer.setStyle(this.Window.nativeElement, 'left', `${newLeft}px`);
    this.renderer.setStyle(this.Window.nativeElement, 'top', `${newTop}px`);
  }

  minimizeWindow() {
    this.isMinimized = !this.isMinimized;
  }
  

  closedWindow() {
    this.isClosed = !this.isClosed;
  }


  resizeWindow() {
    this.isResized = !this.isResized;
  }

  onMouseUp(): void {
    this.isDragging = false;
  }
 
  private hideComponent(): void {
    if (!this.visible) {
      const nativeElement = this.windowElement.nativeElement;
      this.renderer.setStyle(nativeElement, 'display', 'none');
    }
}
}