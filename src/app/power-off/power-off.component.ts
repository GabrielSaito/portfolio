import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-power-off',
  templateUrl: './power-off.component.html',
  styleUrls: ['./power-off.component.scss'],
  animations: [
    trigger('powerOffState', [
      state('inactive', style({
        transform: 'rotate(0deg)',
        color: 'black'
      })),
      state('active', style({
        transform: 'rotate(90deg)',
        color: 'red'
      })),
      transition('inactive <=> active', animate('500ms ease-in-out'))
    ])
  ]
})
export class PowerOffComponent implements OnInit {
  powerOffState = 'inactive';
  blackout = false; // Flag to control the blackout effect
  loading = false; // Flag to control the loading indicator

  constructor() { }

  ngOnInit(): void {
    this.togglePower()
    localStorage.setItem('username', '');
  }
  togglePower() {
    if (this.powerOffState === 'inactive') {
      this.powerOffState = 'active';
      this.blackout = true; // Activate the blackout effect
      this.loading = true; // Activate the loading indicator
      setTimeout(() => {
        this.blackout = true; // Deactivate the blackout effect after some delay
        this.loading = false; // Deactivate the loading indicator after some delay
        this.powerOffState = 'inactive';
      }, 2000); 
  
       setTimeout(() => {
        alert('Press F5 to power on again!');
      }, 5000);
    } else {
      this.powerOffState = 'inactive';
      this.blackout = true; // Deactivate the blackout effect
      this.loading = false; // Deactivate the loading indicator
    }
  }
  
}
