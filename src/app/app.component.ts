import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('analogStick') analogStick!: ElementRef;
  @ViewChild('thumb') thumb!: ElementRef;
  title = 'portfolio';
  selectedDirection: string = '';
  terminal = false;
  currentDirectory: string = 'C:\\Users\\Guest';
  commands: string[] = ['echo Hello, World!', 'dir', 'npm install angular'];


  private analogStickCenter: { x: number, y: number } = { x: 0, y: 0 };
  private isDragging = false;
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    if(localStorage.getItem('userName') != ''){
      this.terminal = true;
    }
  }
  onDirectionClick(direction: string): void {
    this.selectedDirection = direction;
  }
 
  
  
}


