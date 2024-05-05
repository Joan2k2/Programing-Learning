import { Component } from '@angular/core';
import { Page } from '../../interfaces/page';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public constructor(public service:ProgramingLearningService){}
  allPages:Page[]=[];
  matchedPages: { page: Page, matches: number }[] = [];
  inputSearch: string="";
  
  /* -------------------------------------------------------------------------- */
  /*                                para matches                                */
  /* -------------------------------------------------------------------------- */
  public search(){
    this.searchPages(this.allPages,this.inputSearch);
  }

  searchPages(allPages: Page[], phrase: string) {
    console.log(allPages);
    this.matchedPages.splice(0,this.matchedPages.length);

    // Recorrer el array de páginas y contar las coincidencias
    allPages.forEach(page => {
        const matches = this.countMatches(page, phrase);
        if (matches > 0) { // Solo agregar las páginas con al menos una coincidencia
            this.matchedPages.push({ page, matches });
        }
    });

    // Ordenar las páginas según el número de coincidencias
    this.matchedPages.sort((a, b) => b.matches - a.matches);

    // Devolver solo las páginas ordenadas
     this.matchedPages.map(matchedPage => matchedPage.page);
     console.log('aaaaaa: ', this.matchedPages);
}


  private countMatches(page: Page, phrase: string): number {
  // Convertir el título de la página y la frase de búsqueda a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
  const pageTitleLower = page.pageTitle.toLowerCase();
  const phraseLower = phrase.toLowerCase();

  // Buscar la frase en el título de la página y contar las ocurrencias
  const matches = pageTitleLower.split(phraseLower).length - 1;
  return matches;
}


public getAllPages():void{
  this.service.getAllPages().subscribe((response)=>{
    console.log(response);
    response.forEach(element => {
      this.allPages.push(element);
     
      
    });
  })
}

ngOnInit(): void {
  this.getAllPages();
  // console.log(Boolean(localStorage.getItem("logged")));
}

}
