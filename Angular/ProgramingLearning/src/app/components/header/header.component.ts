import { NgStyle, } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../../common/global-constants';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { User } from '../../interfaces/user';
import { Page } from '../../interfaces/page';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../../views/search/search.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle,FormsModule,SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  allPages:Page[]=[];
  isLoggedIn: boolean = false;
  isInPage: boolean = false;
  inputSearch: string="";
  matchedPages: Page[]=[];
  
  public constructor(public service:ProgramingLearningService,private router: Router){}

  public onclick(){

    console.log('Valor actual de isLoggedIn$: ', this.isLoggedIn);
  }
  public search(){

    console.log(this.inputSearch);
    this.searchPages(this.allPages,this.inputSearch);
    this.service.setArray(this.matchedPages);
    
    this.router.navigate(["/search"]);
  }
  public searchJava(){
    this.searchPages(this.allPages,"Java");
    
    this.service.setArray(this.matchedPages);
    
    this.router.navigate(["/search"]);
  }
  public searchTypeScript(){
    this.searchPages(this.allPages,"TypeScript");
    
    this.service.setArray(this.matchedPages);
    
    this.router.navigate(["/search"]);
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
      this.closeAdcount();
      this.service.deleteUser(parseInt(iduser)).subscribe(respose=>{
        console.log("---------------");
        console.log(respose);

      });
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
