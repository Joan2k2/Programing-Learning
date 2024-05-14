import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { Page } from '../../interfaces/page';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { VideoLink, Videos } from '../../interfaces/videos';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  public constructor(
    public service: ProgramingLearningService,
    private router: Router
  ) {}
    page: Page | undefined ;
    videos: Videos[] = [];

    video: Videos = {
      id: 0,
      link: "",
      pageId: 0
    };

    videoString:string="";
    formEditPage = new FormGroup({
    title: new FormControl('', Validators.required),
    explanation: new FormControl('', Validators.required),
    example: new FormControl('', Validators.required),
    videosLink: new FormControl(''), // Opcional
  });

  combineLinksVideos(videos: Videos[]): void {
    videos.forEach((video, index) => {
      this.videoString += video.link;
      if (index < videos.length - 1) {
        this.videoString += ',';
      }
    });
  }
  
  editPage() {
    let formEditPageValue = this.formEditPage.getRawValue();
    //borrar los videos a la página asociada
    this.service.getVideospage(this.service.getIdPage()).subscribe(videos => {
      // Verificar si hay videos asociados
      if (videos.length > 0) {
        // Si hay videos asociados, eliminar cada uno de ellos

        const deleteVideoPromises = videos.map(video => this.service.deleteVideo(video.id).toPromise());
        Promise.all(deleteVideoPromises).then(() => {

          // Realizar cualquier otra lógica después de eliminar los videos, si es necesario
        }).catch(error => {

         
        });
      } else {

      }
    }, error => {

      // Manejar el error de obtención de videos, si es necesario
    });

    
  
    const thePage: Page = {
      id: this.service.getIdPage(),
      pageTitle: formEditPageValue.title ?? '',
      explanation: formEditPageValue.explanation ?? '',
      example: formEditPageValue.example ?? '',
    };
  
    const videoLink: VideoLink = {
      link: formEditPageValue.videosLink ?? ''
    };
  
    const allLinks: string[] = this.separateString(videoLink.link);
    allLinks.forEach(dato => {
      this.video.link = dato;
      this.video.pageId = this.service.getIdPage();

      // Guarda el video
      this.service.saveUpdateVideo(this.video).subscribe((response) => {

      });
    });

    // Guarda la página y luego obtiene todas las páginas
    this.service.saveUpdatePage(thePage).subscribe((response) => {


      // Realizar la redirección después de completar todas las operaciones
       window.location.href = 'http://localhost:4200/home';
    });

    



  }

  public separateString(stringDatos: string): string[] {
    // Dividir el string en elementos individuales utilizando la coma como separador
    const datosSeparados = stringDatos.split(',');

    // Retornar el array resultante
    return datosSeparados;
}

  ngOnInit() {

    
    this.service.getPageById(this.service.getIdPage()).subscribe((page: Page) => {
      this.service.getVideospage(page.id).subscribe(videos => {
        this.videos = videos;
  

  
        // Llamar a combineLinksVideos después de que los videos se carguen
        this.combineLinksVideos(this.videos);
  
        this.page = page;

        // Asignar los valores recibidos a los controles del formulario
        this.formEditPage.patchValue({
          title: page.pageTitle,
          explanation: page.explanation,
          example: page.example,
          videosLink: this.videoString
        });
      });
    });
  }
  
  
  onSubmit(): void {
    if (this.formEditPage.valid) {
      // Aquí puedes enviar los datos del formulario a tu servicio o hacer lo que necesites

    } else {
      // Manejar el caso en que el formulario no sea válido

    }
  }

}
