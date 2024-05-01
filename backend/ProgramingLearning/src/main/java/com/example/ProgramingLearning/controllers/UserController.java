package com.example.ProgramingLearning.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProgramingLearning.entities.Users;
import com.example.ProgramingLearning.entities.Videos;
import com.example.ProgramingLearning.services.UserService;

@RestController
@RequestMapping("/ProgramingLearning")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<Users> getAll() {
        return userService.getUsers();

    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<Users> getUser(@PathVariable("userId") int userId) {
        Users user = userService.getUser(userId).get();
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping("/user/add")
    public void saveUpdate(@RequestBody Users user) {
        userService.saveOrUpdate(user);

    }

    @DeleteMapping("/user/delete/{userId}")
    public void delete(@PathVariable("userId") int userId) {
        userService.delete(userId);

    }

}
