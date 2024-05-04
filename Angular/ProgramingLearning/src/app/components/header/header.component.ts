import { NgStyle, } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { User } from '../../interfaces/user';
import { Page } from '../../interfaces/page';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  allPages:Page[]=[];
  isLoggedIn: boolean = false;
  isInPage: boolean = false;
  inputSearch: string="";
  
  public constructor(public service:ProgramingLearningService){}

  public onclick(){

    console.log('Valor actual de isLoggedIn$: ', this.isLoggedIn);
  }
  public search(){
    this.searchPages(this.allPages,this.inputSearch);
    console.log('aaaaaa: ', this.allPages);
  }

  /* -------------------------------------------------------------------------- */
  /*                                para matches                                */
  /* -------------------------------------------------------------------------- */


  searchPages(allPages: Page[], phrase: string): Page[] {
    console.log(allPages);
    const matchedPages: { page: Page, matches: number }[] = [];

    // Recorrer el array de páginas y contar las coincidencias
    allPages.forEach(page => {
      const matches = this.countMatches(page, phrase);
      matchedPages.push({ page, matches });
    });

    // Ordenar las páginas según el número de coincidencias
    matchedPages.sort((a, b) => b.matches - a.matches);

    // Devolver solo las páginas ordenadas
    return matchedPages.map(matchedPage => matchedPage.page);
  }

  private countMatches(page: Page, phrase: string): number {
  // Convertir el título de la página y la frase de búsqueda a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
  const pageTitleLower = page.pageTitle.toLowerCase();
  const phraseLower = phrase.toLowerCase();

  // Buscar la frase en el título de la página y contar las ocurrencias
  const matches = pageTitleLower.split(phraseLower).length - 1;
  return matches;
}

  
  


  /* -------------------------------------------------------------------------- */
  /*                               funciones crud                               */
  /* -------------------------------------------------------------------------- */

  public getAllPages():void{
    this.service.getAllPages().subscribe((response)=>{
      console.log(response);
      response.forEach(element => {
        this.allPages.push(element);
       
        
      });
    })
  }

  public deleteAdcount(){
    let iduser=localStorage.getItem("idUser");
    if(iduser!=null){
      console.log("voya a borrar el user "+ iduser);
      this.service.deleteUser(parseInt(iduser));
    }

    
  }


  public closeAdcount(){
    localStorage.clear()
    // localStorage.setItem("logged","false");
    console.log(Boolean(localStorage.getItem("logged")));
    location.reload();
  }

  ngOnInit(): void {
    this.isLoggedIn = Boolean(localStorage.getItem("logged")) ;
    this.getAllPages();
    // console.log(Boolean(localStorage.getItem("logged")));
  }
}
