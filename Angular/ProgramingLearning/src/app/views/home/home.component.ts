import { Component } from '@angular/core';
import { Page } from '../../interfaces/page';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public constructor(public service:ProgramingLearningService,private router2: Router){}
  allPages:Page[]=[];
  inputSearch2: string="";
  matchedPages: Page[]=[];
  

  public search2(){
     this.searchPages(this.allPages,this.inputSearch2);
     this.service.setArray(this.matchedPages);
      this.inputSearch2="";
    this.router2.navigate(["/search"])
    console.log("voy a recibir el array por servicio");
    console.log(this.service.getArray());
  }
  
  /* -------------------------------------------------------------------------- */
  /*                                para matches                                */
  /* -------------------------------------------------------------------------- */


  searchPages(allPages: Page[], phrase: string) {
    console.log(allPages);
    this.matchedPages.splice(0, this.matchedPages.length);

    // Recorrer el array de páginas y agregar las páginas que tengan al menos una coincidencia
    allPages.forEach(page => {
        const matches = this.countMatches(page, phrase);
        if (matches > 0) {
            this.matchedPages.push(page); // Agregar la página al array de coincidencias
        }
    });

    // Ordenar las páginas según el número de coincidencias (opcional, si aún lo necesitas)
    this.matchedPages.sort((a, b) => this.countMatches(b, phrase) - this.countMatches(a, phrase));

    // No necesitas devolver nada ya que estás modificando directamente el array matchedPages
    console.log('aaaaaa: ', this.matchedPages);
}

private countMatches(page: Page, phrase: string): number {
    // Convertir el título de la página y la frase de búsqueda a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
    const pageTitleLower = page.pageTitle.toLowerCase();
    const phraseLower = phrase.toLowerCase();

    // Buscar la frase en el título de la página y contar las ocurrencias
    return pageTitleLower.split(phraseLower).length - 1;
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
