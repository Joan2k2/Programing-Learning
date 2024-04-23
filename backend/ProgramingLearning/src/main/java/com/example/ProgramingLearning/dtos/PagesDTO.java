package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class PagesDTO implements Serializable {



    private int id;
    private String pageTitle;
    private String explanation;
    private String example;

    
   

    
    @Override
    public String toString() {
        return "PagesDTO [id=" + id + ", pageTitle=" + pageTitle + ", explanation=" + explanation + ", example="
                + example + "]";
    }

    

    

}
