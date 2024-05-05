import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchZoneComponent } from '../../components/search-zone/search-zone.component';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgStyle,SearchZoneComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() matchedPages : Page[]=[];

}
