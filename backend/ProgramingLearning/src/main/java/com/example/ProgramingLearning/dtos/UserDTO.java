package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable{

    private int id;
    private String email;
    private String password;
  

    
    @Override
    public String toString() {
        return "UserDTO [id=" + id + ", email=" + email + ", password=" + password + "]";
    }

        //añadir funciones necesarias
    


}
