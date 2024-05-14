import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramingLearningService } from '../../services/programing-learning.service';
import { Videos } from '../../interfaces/videos';
import { VideoComponent } from "../../components/video/video.component";

@Component({
    selector: 'app-videos-page',
    standalone: true,
    templateUrl: './videos-page.component.html',
    styleUrl: './videos-page.component.css',
    imports: [VideoComponent]
})
export class VideosPageComponent {
  public constructor(public service:ProgramingLearningService,private router2: Router){}
  videos: Videos[] = [];
  ngOnInit(){


    
    

      this.service.getVideospage(this.service.getIdPage()).subscribe(videos => {
        this.videos = videos;

      });
      
   

  }

}
