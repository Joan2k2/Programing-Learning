package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class VideosDTO implements Serializable{

    

    private int id;
    private String link;
    private int pageId;



    @Override
    public String toString() {
        return "VideosDTO [id=" + id + ", link=" + link + ", PageId=" + pageId + "]";
    }

    

}
