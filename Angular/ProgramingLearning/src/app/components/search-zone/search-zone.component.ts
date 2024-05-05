import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-zone',
  standalone: true,
  imports: [],
  templateUrl: './search-zone.component.html',
  styleUrl: './search-zone.component.css'
})
export class SearchZoneComponent {

  @Input() image : string = '';
  @Input() title : string = '';
  @Input() newsbody : string = '';
  @Input() date: string = '';

}
