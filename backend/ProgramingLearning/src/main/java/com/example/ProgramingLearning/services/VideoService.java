package com.example.ProgramingLearning.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ProgramingLearning.entities.Videos;
import com.example.ProgramingLearning.repositories.VideoRepository;

@Service
public class VideoService {

    @Autowired
    VideoRepository videoRepository;


    public List<Videos> getVideos(){

        return videoRepository.findAll();

    }

    public Optional<Videos> getVideo(int id){

        return videoRepository.findById(id);

    }

    public void saveOrUpdate (Videos video){
        videoRepository.save(video);
    }
    
    public void delete (int id){
        videoRepository.deleteById(id);
    }

}
