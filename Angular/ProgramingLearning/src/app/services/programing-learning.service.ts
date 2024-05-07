import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page} from '../interfaces/page';
import { User} from '../interfaces/user';
import { Videos} from '../interfaces/videos';
import { catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgramingLearningService {

  constructor(public http : HttpClient) { }
  public pages: Page[]=[];
  public idPage:number=0;

  //Recoge todas las cartas de la BBDD
  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/ProgramingLearning/users')
  }

  public getAllPages():Observable<Page[]>{
    return this.http.get<Page[]>('http://localhost:8080/programinglearning/pages')
  }

  getPageById(pageId: number): Observable<Page> {
    return this.http.get<Page>('http://localhost:8080/programinglearning/page/' + pageId);
  }

  //Recoge todas las cartas que coincidan con la busqueda de la BBDD
  public getVideospage(idPage:number | null):Observable<Videos[]>{
    return this.http.get<Videos[]>('http://localhost:8080/programingLearning/videos/'+idPage)
  }

  public saveUpdate(user: any): Observable<any> {
    console.log("estoy desde servicios y este es el user recibido"+ JSON.stringify(user));
    return this.http.post('http://localhost:8080/ProgramingLearning/user/add', user);
      
  }

  public  deleteUser(id: number): Observable<any> {
    console.log("estoy desde servicios y este es el id recibido"+ id);
    return this.http.delete('http://localhost:8080/ProgramingLearning/user/delete/' + id, { responseType: 'text' })
      
  }

  public setArray(page:Page[]){
    this.pages=page;

  }
  public getArray(){

    return this.pages;

  }

  public setIdPage(id:number){
    this.idPage=id;

  }
  public getIdPage(){

    return this.idPage;

  }
}
