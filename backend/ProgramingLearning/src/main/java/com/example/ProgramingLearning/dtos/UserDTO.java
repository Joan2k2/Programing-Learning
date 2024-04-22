package com.example.ProgramingLearning.dtos;

import java.io.Serializable;

public class UserDTO implements Serializable{

    private int id;
    private String email;
    private String password;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public UserDTO(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    public UserDTO() {
    }
    
    @Override
    public String toString() {
        return "UserDTO [id=" + id + ", email=" + email + ", password=" + password + "]";
    }

    


}
