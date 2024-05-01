import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page} from '../interfaces/page';
import { User} from '../interfaces/user';
import { Videos} from '../interfaces/videos';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgramingLearningService {

  constructor(public http : HttpClient) { }

  //Recoge todas las cartas de la BBDD
  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/ProgramingLearning/users')
  }

  public getAllPages():Observable<Page[]>{
    return this.http.get<Page[]>('http://localhost:8080/programinglearning/pages')
  }

  //Recoge todas las cartas que coincidan con la busqueda de la BBDD
  public getVideospage(idPage:number | null):Observable<Videos[]>{
    return this.http.get<Videos[]>('http://localhost:8080/programingLearning/videos/'+idPage)
  }

  public addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/users/add', user)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }



  // //Recoge todas las cartas que coincidan con la busqueda de la BBDD
  // public getCardByName(name:string | null):Observable<KauriaCard[]>{
  //   return this.http.get<KauriaCard[]>('http://localhost:8000/cardName/'+name)
  // }
  // //Recoge todas las noticias de la BBDD
  // public getAllNews():Observable<KauriaNews[]>{
  //   return this.http.get<KauriaNews[]>('http://localhost:8000/allNews')
  // }
}
