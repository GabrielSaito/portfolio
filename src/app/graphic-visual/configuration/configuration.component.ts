import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  selectedTheme: string = 'light';
  fontSize: number = 16;
  powerOff = false;
  saveSettings(): void {
    console.log('Configurações salvas:', { theme: this.selectedTheme, fontSize: this.fontSize });
  }

  uninstallProgram() {
    localStorage.setItem('graphic', 'false');
    alert("Uninstalling graphic card display was successful.");    
    location.reload();

    this.powerOff = true;   
  }
}
