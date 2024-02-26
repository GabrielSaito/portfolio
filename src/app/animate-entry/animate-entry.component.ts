import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-animate-entry',
  templateUrl: './animate-entry.component.html',
  styleUrls: ['./animate-entry.component.scss'],
 
})
export class AnimateEntryComponent implements OnInit {
   showTerminal: boolean = false;
  showLoading: boolean = true;
  showLogin: boolean = false;
  graphic=false;
  ngOnInit(): void {
    
    debugger

     setTimeout(() => {

      if ((localStorage.getItem('username') == '' )) {
        
         this.showLogin = true;
         this.showLoading = false;


      } else {
        this.showLogin = true;

          this.showLoading = false;
      }    
     }, 100); // Tempo de simulação (3 segundos)
  }
}
