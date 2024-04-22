package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

public class PagesDTO implements Serializable {



    private int id;
    private String pageTitle;
    private String explanation;
    private String example;

    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getPageTitle() {
        return pageTitle;
    }
    public void setPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
    }
    public String getExplanation() {
        return explanation;
    }
    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }
    public String getExample() {
        return example;
    }
    public void setExample(String example) {
        this.example = example;
    }
    public PagesDTO(int id, String pageTitle, String explanation, String example) {
        this.id = id;
        this.pageTitle = pageTitle;
        this.explanation = explanation;
        this.example = example;
    }
    public PagesDTO() {
    }
    
    @Override
    public String toString() {
        return "PagesDTO [id=" + id + ", pageTitle=" + pageTitle + ", explanation=" + explanation + ", example="
                + example + "]";
    }

    

    

}
