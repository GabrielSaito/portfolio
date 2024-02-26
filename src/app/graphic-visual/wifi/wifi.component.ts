import { Component } from '@angular/core';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent {
  wifiList = [
    { name: 'WiFi-Casa', strength: 80 },
    { name: 'Cafe-Free-WiFi', strength: 60 },
    { name: 'Work-Space-WiFi', strength: 90 },
    { name: 'Public-WiFi', strength: 50 },
    { name: 'Guest-Network', strength: 75 }
   ];
}
