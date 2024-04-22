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
@Table(name="users")
public class Users {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;


    public Users() {
    }

    

}
