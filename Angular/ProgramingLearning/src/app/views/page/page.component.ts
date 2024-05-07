import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { Page } from '../../interfaces/page';
import { Videos } from '../../interfaces/videos';
import { VideoComponent } from '../../components/video/video.component';

@Component({
    selector: 'app-page',
    standalone: true,
    templateUrl: './page.component.html',
    styleUrl: './page.component.css',
    imports: [NgStyle, VideoComponent]
})
export class PageComponent {
  public constructor(public service:ProgramingLearningService,private router2: Router){}

  title: string = 'Título de la Página'; 
  explanation: string = 'Texto explicativo sobre el contenido de la página. Puedes agregar aquí cualquier información relevante que quieras compartir con tus visitantes.';
  example: string = "String[] cars = 'Volvo', 'BMW', 'Ford', 'Mazda'; for (int i = 0; i < cars.length; i++) System.out.println(cars[i]); "
  ;
  videos: Videos[] = [];
  id:number=0;

  ngOnInit(){
    
    this.service.getPageById(this.service.getIdPage()).subscribe(element=>{

      console.log("en la page");
      console.log(element);
      this.title=element.pageTitle;
      this.explanation=element.explanation;
      this.example=element.example;
      this.id=element.id;

      this.service.getVideospage(element.id).subscribe(videos => {
        this.videos = videos;
        console.log(videos);
      });
      
      

    });
    
    

    
  }

}
