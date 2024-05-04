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

  public saveUpdate(user: any): Observable<any> {
    console.log("estoy desde servicios y este es el user recibido"+ JSON.stringify(user));
    return this.http.post('http://localhost:8080/ProgramingLearning/user/add', user)
      .pipe(
        catchError(error => {
          throw error; // Propagar el error
        })
      );
  }

  public  deleteUser(id: number): Observable<any> {
    console.log("estoy desde servicios y este es el id recibido"+ id);
    return this.http.delete('http://localhost:8080/ProgramingLearning/user/delete/' + id, { responseType: 'text' })
      .pipe(
        map(response => response),
        catchError(error => {
          console.log("hay un error");
          throw error;
        })
      );
  }
}
