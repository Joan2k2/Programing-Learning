package com.example.ProgramingLearning.mapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.ProgramingLearning.dtos.UserDTO;
import com.example.ProgramingLearning.entities.Users;




@Mapper
public interface UserMapper {

    UserMapper mapper = Mappers.getMapper(UserMapper.class);
    //mapeo todas las variables
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "email", source = "email") 
    @Mapping(target = "password", source = "password") 
    Users userToUserDTO(UserDTO userDTO);
    
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "email", source = "email") 
    @Mapping(target = "password", source = "password") 
    UserDTO userDTOToUser(Users user);
}
