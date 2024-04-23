package com.example.ProgramingLearning.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProgramingLearning.entities.Pages;

@Repository
public interface PageRepository extends JpaRepository<Pages,Integer>{

}
