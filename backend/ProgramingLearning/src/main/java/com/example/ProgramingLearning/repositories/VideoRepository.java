package com.example.ProgramingLearning.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProgramingLearning.entities.Videos;

@Repository
public interface VideoRepository extends JpaRepository<Videos,Integer> {

}
