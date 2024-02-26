import { Component, Input } from '@angular/core';

interface Folder {
  name: string;
  isExpanded: boolean;
  subfolders?: Folder[];
}

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  folders: any[] = [];  
  username= localStorage.getItem('username')
  toggleFolder(folder: Folder): void {
    folder.isExpanded = !folder.isExpanded;
  }
}
