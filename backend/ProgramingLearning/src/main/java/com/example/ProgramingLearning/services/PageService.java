package com.example.ProgramingLearning.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ProgramingLearning.entities.Pages;
import com.example.ProgramingLearning.repositories.PageRepository;

@Service
public class PageService {

    @Autowired
    PageRepository pageRepository;


    public List<Pages> getPages(){

        return pageRepository.findAll();

    }

    public Optional<Pages> getPage(int id){

        return pageRepository.findById(id);

    }

    public void saveOrUpdate (Pages page){
        pageRepository.save(page);
    }
    public void delete (int id){
        pageRepository.deleteById(id);
    }

}
