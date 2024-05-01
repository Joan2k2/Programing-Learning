package com.example.ProgramingLearning.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.ProgramingLearning.entities.Users;
import com.example.ProgramingLearning.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public List<Users> getUsers(){

        return userRepository.findAll();

    }

    public Optional<Users> getUser(int id){

        return userRepository.findById(id);

    }

    public void saveOrUpdate (@RequestBody Users user){
        userRepository.save(user);
    }
    public void delete (int id){
        userRepository.deleteById(id);
    }

}
