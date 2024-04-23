package com.example.ProgramingLearning.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.ProgramingLearning.dtos.PagesDTO;
import com.example.ProgramingLearning.entities.Pages;

@Mapper
public interface PageMapper {


    PageMapper mapper = Mappers.getMapper(PageMapper.class);
    //mapeo todas las variables
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "pageTitle", source = "pageTitle") 
    @Mapping(target = "explanation", source = "explanation")
    @Mapping(target = "example", source = "example") 
    Pages pageToPageDTO(PagesDTO pageDTO);
    
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "pageTitle", source = "pageTitle") 
    @Mapping(target = "explanation", source = "explanation")
    @Mapping(target = "example", source = "example") 
    PagesDTO pageDTOToPage(Pages page);
}
