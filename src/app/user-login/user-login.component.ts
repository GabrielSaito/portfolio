import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{
  username: string = '';
  password: string = '123456';
  showTerminal: boolean = false;
  showLogin: boolean = false;
  selectedCategory: string = 'home';
  showGraphic = false;
  terminal = false;
  powerOff = false;
  @HostListener('keydown', ['$event'])

ngOnInit(): void {
  debugger
    this.password = '123456';

  this.verification();
 
}

  login() {
    debugger
     if (localStorage.getItem('username') === '' || localStorage.getItem('username') === null) {
      this.showTerminal = false;
      this.showGraphic = false;
      this.showLogin = true;  
    }
    else{
      this.showTerminal = true;
      this.showGraphic = false;
      this.showLogin = true;  
    }
  }

 

  verification() {
    if (localStorage.getItem('username')=== '') {
      this.showTerminal = false;
      this.showGraphic = false;
      this.showLogin = true;
    } else {
   
      if (localStorage.getItem('graphic') === 'true') {
        this.showLogin = false;
        this.showTerminal = false;
        this.showGraphic = true;
      } else {
        this.showLogin = false;
        this.showTerminal = true;
        this.showGraphic = false;
      }
    }
  }


  handleLoginClick() {
    if (this.username === '') {
      this.showTerminal = false;
      this.showGraphic = false;
      this.showLogin = true;
    } else {
      localStorage.setItem('username', this.username);
  
      if (localStorage.getItem('graphic') === 'true') {
        this.showLogin = false;
        this.showTerminal = false;
        this.showGraphic = true;
      } else {
        this.showLogin = false;
        this.showTerminal = true;
        this.showGraphic = false;
      }
    }
  }
  
  
  closeLogin() {
     console.log('Close clicked');
  }

  power( ) {
    console.log('clickou!');
    this.selectedCategory = 'poweroff';   
    this.powerOff = true;
}

 
}
