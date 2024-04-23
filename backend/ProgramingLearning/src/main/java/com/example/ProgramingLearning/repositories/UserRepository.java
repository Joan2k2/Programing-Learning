package com.example.ProgramingLearning.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ProgramingLearning.entities.Users;
@Repository
public interface UserRepository extends JpaRepository<Users,Integer>{

}
