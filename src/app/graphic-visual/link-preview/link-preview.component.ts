import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss']
})
export class LinkPreviewComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
}
