package com.example.ProgramingLearning.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Data
@AllArgsConstructor
@Entity
@Table(name="pages")
public class Pages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "page_title")
    private String pageTitle;
    @Column(name = "explanation")
    private String explanation;
    @Column(name = "example")
    private String example;


    public Pages() {
    }

}
