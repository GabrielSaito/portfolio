import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 

@Component({
  selector: 'app-graphic-visual',
  templateUrl: './graphic-visual.component.html',
  styleUrls: ['./graphic-visual.component.scss']
})


export class GraphicVisualComponent {
  isMenuVisible = false;
  currentDate = new Date();
  hour= '';
  audio= false;
  folder= false;
  browser= false;
  folders: any[] = []; 
  wifi=false;
  showStore = false;
  showTerminal=false;
  userName = localStorage.getItem('username');
  private isMouseDown: boolean = false;

  

  constructor(private renderer: Renderer2, private el: ElementRef){
    this.showTerminal=false;

    setInterval(() => {
      this.hour = new Date().toString().split(' ')[4];
    }, );
  }

  exitTest(){
    this.browser = !this.browser;

  }

  openStore() {
    this.showStore = !this.showStore;
  }

  openMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  openWifi() {
    this.wifi = !this.wifi;
  }
  openTerminal() {
    this.showTerminal = !this.showTerminal;
  }
  
  openFolder() {
    this.folder = !this.folder;
  }
  openAudio() {
    this.audio = !this.audio;
  }

  openBrowser() {
    this.browser = !this.browser;
  }
}