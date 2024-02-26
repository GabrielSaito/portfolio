import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-app',
  templateUrl: './store-app.component.html',
  styleUrls: ['./store-app.component.scss']
})
export class StoreAppComponent implements OnInit{

  installL = '';
  installB ='';
  installT= '';

  constructor(){

  }
  
  ngOnInit(): void {
    this.installLinkedin() ;
    this.installBluesky();
    this.installTwitter();
  }
  
  installLinkedin(){
 
    if(localStorage.getItem('ilinkedin') == ''){
      localStorage.setItem('ilinkedin','installed');

      this.installL  = 'Uninstall' 
    }
      else{
          this.installL = 'Install';
          localStorage.setItem('ilinkedin','');

      }

    }

  installBluesky(){    
    if(localStorage.getItem('bluesky') == ''){
      localStorage.setItem('bluesky','installed');

      this.installB  = 'Uninstall' 
       }
      else{
          this.installB = 'Install';
          localStorage.setItem('bluesky','');

      }    
  }
  installTwitter(){

    if(localStorage.getItem('twitter') == ''){
       localStorage.setItem('twitter','installed');

      this.installT  = 'Uninstall' 
       }
      else{
          this.installT = 'Installs';
          localStorage.setItem('twitter','');

      }   
  }
}
