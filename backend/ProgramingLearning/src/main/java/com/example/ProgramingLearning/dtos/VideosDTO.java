package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

public class VideosDTO implements Serializable{


    private int id;
    private String link;
    private int PageId;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    public int getPageId() {
        return PageId;
    }
    public void setPageId(int pageId) {
        PageId = pageId;
    }
    public VideosDTO(int id, String link, int pageId) {
        this.id = id;
        this.link = link;
        PageId = pageId;
    }
    public VideosDTO() {
    }
    @Override
    public String toString() {
        return "VideosDTO [id=" + id + ", link=" + link + ", PageId=" + PageId + "]";
    }

    

}
