import { Component } from '@angular/core';

@Component({
  selector: 'app-glitch-effect',
  templateUrl: './glitch-effect.component.html',
  styleUrls: ['./glitch-effect.component.scss']
})
export class GlitchEffectComponent {
  glitchLines = Array(5).fill(0); // Adjust the number of glitch lines as needed
}
