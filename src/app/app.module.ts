import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { AnimateEntryComponent } from './animate-entry/animate-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { PowerOffComponent } from './power-off/power-off.component';
import { CanvasBoxComponentComponent } from './canvas-box-component/canvas-box-component.component';
import * as THREE from 'three';
import { GlitchEffectComponent } from './glitch-effect/glitch-effect.component';
import { SpaceShooterComponent } from './space-shooter/space-shooter.component';
import { GraphicVisualComponent } from './graphic-visual/graphic-visual.component';
import { StartMenuComponent } from './graphic-visual/start-menu/start-menu.component';
import { MiniChromeComponent } from './graphic-visual/mini-chrome/mini-chrome.component';
import { LinkPreviewComponent } from './graphic-visual/link-preview/link-preview.component';
import { ExplorerComponent } from './graphic-visual/explorer/explorer.component';
import { WindowsAudioComponent } from './graphic-visual/windows-audio/windows-audio.component';
import { WifiComponent } from './graphic-visual/wifi/wifi.component';
import { ConfigurationComponent } from './graphic-visual/configuration/configuration.component';
import { MovableWindowComponent } from './graphic-visual/movable-window/movable-window.component';
import { WindowComponent } from './graphic-visual/window/window.component';
import { BlackHoleComponent } from './graphic-visual/black-hole/black-hole.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NotepadComponent } from './graphic-visual/notepad/notepad.component';
import { StoreAppComponent } from './graphic-visual/store-app/store-app.component';
 
  @NgModule({
  declarations: [
    AppComponent,
     TerminalComponent,
     AnimateEntryComponent,
     UserLoginComponent,
     PowerOffComponent,
     CanvasBoxComponentComponent,
     GlitchEffectComponent,
     SpaceShooterComponent,
     GraphicVisualComponent,
     StartMenuComponent,
     MiniChromeComponent,
     LinkPreviewComponent,
     ExplorerComponent,
     WindowsAudioComponent,
     WifiComponent,
     ConfigurationComponent,
     MovableWindowComponent,
     WindowComponent,
     BlackHoleComponent,
     NotepadComponent,
     StoreAppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,BrowserAnimationsModule, 
 
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
