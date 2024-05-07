import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchZoneComponent } from '../../components/search-zone/search-zone.component';
import { Page } from '../../interfaces/page';
import { ProgramingLearningService } from '../../services/programing-learning.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgStyle,SearchZoneComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  matchedPages : Page[]=[];
  public constructor(public service:ProgramingLearningService){}

   ngOnInit(){

    this.matchedPages= this.service.getArray();

console.log("imprimo págians");
    console.log(this.matchedPages);
  }

}
