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
        console.log("Borrando videos asociados a la página.");
        const deleteVideoPromises = videos.map(video => this.service.deleteVideo(video.id).toPromise());
        Promise.all(deleteVideoPromises).then(() => {

          console.log("Todos los videos han sido eliminados correctamente.");
          // Realizar cualquier otra lógica después de eliminar los videos, si es necesario
        }).catch(error => {

          console.error("Error al eliminar los videos:", error);
         
        });
      } else {

        console.log("No hay videos asociados a la página. No se necesita realizar ninguna acción.");
      }
    }, error => {
      console.error("Error al obtener los videos asociados a la página:", error);
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
        console.log('Video guardado:', response);
      });
    });

    // Guarda la página y luego obtiene todas las páginas
    this.service.saveUpdatePage(thePage).subscribe((response) => {

      console.log("se habría hecho todo y aqui se guarda la página");
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
    console.log(this.service.getIdPage());
    
    this.service.getPageById(this.service.getIdPage()).subscribe((page: Page) => {
      this.service.getVideospage(page.id).subscribe(videos => {
        this.videos = videos;
  
        console.log(videos);
  
        // Llamar a combineLinksVideos después de que los videos se carguen
        this.combineLinksVideos(this.videos);
  
        this.page = page;
        console.log("voy a imprimir la page");
        console.log(page);
        console.log("voy a imprimir el videostring");
        console.log(this.videoString);
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
      console.log(this.formEditPage.value);
    } else {
      // Manejar el caso en que el formulario no sea válido
      console.log('El formulario no es válido');
    }
  }

}
