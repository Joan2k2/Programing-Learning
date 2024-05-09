import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Page} from '../interfaces/page';
import { User} from '../interfaces/user';
import { Videos} from '../interfaces/videos';
import { BehaviorSubject, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgramingLearningService {

  constructor(public http : HttpClient) { }
  public pages: Page[]=[];
  public idPage:number=0;
  public isInPage:boolean=false;

  private isInPageSubject = new BehaviorSubject<boolean>(false);
  isInPage2 = this.isInPageSubject.asObservable();

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
  public saveUpdatePage(page: any): Observable<any> {
    console.log("estoy desde servicios y este es el user recibido"+ JSON.stringify(page));
    return this.http.post('http://localhost:8080/programinglearning/page/add', page);
      
  }

  public saveUpdateVideo(video: any): Observable<any> {
    console.log("estoy desde servicios y este es el video recibido"+ JSON.stringify(video));
    return this.http.post('http://localhost:8080/programingLearning/video/add', video);
      
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

  public  deleteVideo(id: number): Observable<any> {
    console.log("estoy desde servicios y este es el id del video a eliminar recibido"+ id);
    return this.http.delete('http://localhost:8080/programingLearning/video/delete/' + id, { responseType: 'text' })
      
  }

  public  deletePage(id: number): Observable<any> {
    console.log("estoy desde servicios deletepage y este es el id recibido de prueba"+ id);
    return this.http.delete('http://localhost:8080/programinglearning/page/delete/' + id, { responseType: 'text' })
      
  }

  public setArray(page:Page[]){
    this.pages=page;

  }
  public getArray(){

    return this.pages;

  }

  public setIdPage(id:number){
    this.idPage=id;
    this.isInPage=true;

  }
  public getIdPage(){

    return this.idPage;

  }
  setInPageStatus(status: boolean): void {
    this.isInPage = status;
    this.updateIsInPageStorage(); // Esto se encarga de actualizar el estado en el localStorage y notificar a los suscriptores
  }

  private updateIsInPageStorage() {
    localStorage.setItem('isInPage', JSON.stringify(this.isInPage));
    this.isInPageSubject.next(this.isInPage);
  }

  public loadIsInPageFromStorage() {
    const isInPage = localStorage.getItem('isInPage');
    if (isInPage !== null) {
      this.isInPage = JSON.parse(isInPage);
      this.isInPageSubject.next(this.isInPage);
    }
  }
}
