import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramingLearningService } from '../../services/programing-learning.service';

@Component({
  selector: 'app-search-zone',
  standalone: true,
  imports: [],
  templateUrl: './search-zone.component.html',
  styleUrl: './search-zone.component.css',
})
export class SearchZoneComponent {
  public constructor(public service:ProgramingLearningService,private router2: Router){}
  @Input() id: number = 0;
  @Input() title: string = 'Título del Resultado de Búsqueda';
  @Input() explanation: string =
    'Descripción corta del resultado de búsqueda. Esto es lo que se mostrará debajo del título en los resultados de búsqueda. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nisl eros, nec suscipit nulla vestibulum eget.';

  goToPage() {
    this.service.setIdPage(this.id);
    localStorage.setItem("isInPage","true");
    this.router2.navigate(["/page"])
  }
  ngOnInit() {
    console.log(this.id);
  }
}
