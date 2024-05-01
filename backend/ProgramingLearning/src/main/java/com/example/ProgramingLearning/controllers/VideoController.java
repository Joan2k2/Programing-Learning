package com.example.ProgramingLearning.controllers;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProgramingLearning.entities.Videos;
import com.example.ProgramingLearning.services.VideoService;


@RestController
@RequestMapping("/programingLearning/")
public class VideoController {


    @Autowired
    private VideoService videoService;



    @GetMapping("/videos")
    public List<Videos> getAll(){
        return videoService.getVideos();

    }

    @GetMapping("/videos/{pageId}")
    public List<Videos> getVideosPage(@PathVariable("pageId") int id) {

        List<Videos> videos=videoService.getVideos();
        List<Videos> filteredVideos=new ArrayList<>();

        for (Videos video : videos) {
            if(video.getPageId()==id){
                filteredVideos.add(video);
            }
            
        }
        return filteredVideos;
    
    }


    // @GetMapping("/videos/{videoId}")
    // public Optional<Videos> getVideo(@PathVariable("videoId") int videoId){
    //     return videoService.getVideo(videoId);

    // }
    @PostMapping("/video/add")
    public void saveUpdate(@RequestBody Videos video){
        videoService.saveOrUpdate(video);

    }

    @DeleteMapping("/delete/{videoId}")
    public void delete(@PathVariable("videoId") int videoId){
        videoService.delete(videoId);

    }

}
