import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent {
  public noteText: string = '';

  saveNote() {
    // Aqui você pode adicionar lógica para salvar o texto, se necessário
    console.log('Texto salvo:', this.noteText);
  }
}
