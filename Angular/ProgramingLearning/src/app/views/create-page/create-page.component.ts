import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Page } from '../../interfaces/page';
import { VideoLink, Videos } from '../../interfaces/videos';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css',
})
export class CreatePageComponent {
  public constructor(
    public service: ProgramingLearningService,
    private router: Router
  ) {}
  allPages: Page[] = [];
  lastPage: Page | undefined ;
  video: Videos = {
    id: 0,
    link: "",
    pageId: 0
  };
  formAddPage = new FormGroup({
    title: new FormControl('', Validators.required),
    explanation: new FormControl('', Validators.required),
    example: new FormControl('', Validators.required),
    videosLink: new FormControl(''), // Opcional
  });

  addingPage() {
    let formAddPageValue = this.formAddPage.getRawValue();
  
    const newPage: Page = {
      id: 0,
      pageTitle: formAddPageValue.title ?? '',
      explanation: formAddPageValue.explanation ?? '',
      example: formAddPageValue.example ?? '',
    };
  
    const videoLink: VideoLink = {
      link: formAddPageValue.videosLink ?? ''
    };
  
    // Guarda la página y luego obtiene todas las páginas
    this.service.saveUpdatePage(newPage).pipe(
      switchMap(() => this.service.getAllPages())
    ).subscribe((response) => {
      this.allPages = response;
  
      // Obtén la última página agregada
      this.lastPage = this.allPages[this.allPages.length - 1];
  
      // Procesa los enlaces de video para la última página
      const allLinks: string[] = this.separateString(videoLink.link);
      allLinks.forEach(dato => {
        this.video.link = dato;
        this.video.pageId = this.lastPage?.id ?? 0;
  
        // Guarda el video
        this.service.saveUpdateVideo(this.video).subscribe((response) => {

        });
      });
  
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

  onSubmit(): void {
    if (this.formAddPage.valid) {
      // Aquí puedes enviar los datos del formulario a tu servicio o hacer lo que necesites

    } else {
      // Manejar el caso en que el formulario no sea válido

    }
  }
}
