import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
})
export class VideoComponent {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() linkVidedo: string = 'HNR971V-9Ek-chU';

  // Método para obtener la URL segura del video
  getVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/`+this.linkVidedo
    );
  }

  ngOnInit() {
    this.getVideoUrl();
    console.log(this.linkVidedo);
  }
}
