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
@Table(name="Videos")
public class Videos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "link")
    private String link;
    @Column(name = "page_id")
    private int PageId;



    public Videos() {
    }

}
