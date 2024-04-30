import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  title: string = 'Título de la Página'; 
  explanation: string = 'Texto explicativo sobre el contenido de la página. Puedes agregar aquí cualquier información relevante que quieras compartir con tus visitantes.';
  example: string = "String[] cars = 'Volvo', 'BMW', 'Ford', 'Mazda'; for (int i = 0; i < cars.length; i++) System.out.println(cars[i]); "
  ;
  videos: string = '';

}
