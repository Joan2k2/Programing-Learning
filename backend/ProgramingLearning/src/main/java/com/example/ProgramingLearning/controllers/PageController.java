package com.example.ProgramingLearning.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ProgramingLearning.entities.Pages;
import com.example.ProgramingLearning.services.PageService;

@RestController
@RequestMapping("/programinglearning")
public class PageController {

    @Autowired
    private PageService pageService;


    @GetMapping("/pages")
    public List<Pages> getAll(){
        return pageService.getPages();

    }
    @GetMapping("/page/{pageId}")
    public Optional<Pages> getPage(@PathVariable("pageId") int pageId){
        return pageService.getPage(pageId);

    }

    @PostMapping("/page/add")
    public void saveUpdate(@RequestBody Pages page){
        pageService.saveOrUpdate(page);

    }

    @DeleteMapping("/delete/{pageId}")
    public void delete(@PathVariable("pageId") int pageId){
        pageService.delete(pageId);

    }


}
