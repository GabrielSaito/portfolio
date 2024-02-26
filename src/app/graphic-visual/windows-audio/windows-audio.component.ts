import { Component } from '@angular/core';

@Component({
  selector: 'app-windows-audio',
  templateUrl: './windows-audio.component.html',
  styleUrls: ['./windows-audio.component.scss']
})
export class WindowsAudioComponent {


  audio: HTMLAudioElement;
  volume: number;

  constructor() {
    this.audio = new Audio();
    this.volume = 0.5; // Valor inicial do volume (entre 0 e 1)
    this.audio.volume = this.volume;
  }

  updateVolume() {
    this.audio.volume = this.volume / 100;
  }
  

  toggleMute() {
    this.audio.volume = this.audio.volume === 0 ? this.volume : 0;
  }

 
}
