// start-menu.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss'],
})
export class StartMenuComponent {
  isMenuOpen = false;
  showConfiguration = false;
  userName = localStorage.getItem('username');
  powerOff = false;
  showTerminal = false;
  showNotepad = false;
  linkedin = localStorage.getItem('ilinkedin');
  installBluesky = localStorage.getItem('bluesky');
  installTwitter = localStorage.getItem('twitter');
  installedLinkedin = false;
  installedTwitter = false;
  installedBluesky = false;

  openSpotify() {
    const spotifyUrl = 'https://open.spotify.com';
    window.open(spotifyUrl, '_blank');
  }

ngOnInit(){


    if(this.linkedin == 'installed') {
      this.installedLinkedin = true;
    }
    else{
      this.installedLinkedin = false;
    }

    if(this.installBluesky == 'installed') {
      this.installedBluesky = true;
    }
    else{
      this.installedBluesky = false;
    }
    if(this.installTwitter == 'installed') {
      this.installedTwitter = true;
    }
    else{
      this.installedTwitter = false;
    }



}
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openNotepad(){
    this.showNotepad = !this.showNotepad;
  }

  openTerminal() {
    this.showTerminal = !this.showTerminal;
  }
  openGitHub(): void {
    const url = 'https://github.com/GabrielSaito';
    window.open(url, '_blank');  
  }

  openLinkedin(): void {
    const url = 'https://www.linkedin.com/';
    window.open(url, '_blank');  
  }

  openTwitter(): void {
    const url = 'https://www.x.com/';
    window.open(url, '_blank');  
  }

  openBluesky(): void {
    const url = 'https://bsky.app/';
    window.open(url, '_blank');  
  }

  power(){
    this.powerOff = !this.powerOff;
  }

  openConfiguration(){
    this.showConfiguration  = !this.showConfiguration;
    this.isMenuOpen = false;

   }
}
