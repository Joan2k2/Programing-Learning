package com.example.ProgramingLearning.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.ProgramingLearning.dtos.VideosDTO;
import com.example.ProgramingLearning.entities.Videos;


@Mapper
public interface VideoMapper {

    VideoMapper mapper = Mappers.getMapper(VideoMapper.class);
    //mapeo todas las variables
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "link", source = "link") 
    @Mapping(target = "pageId", source = "pageId") 
    Videos videoToVideoDTO(VideosDTO videoDTO);
    
    @Mapping(target = "id", source = "id") 
    @Mapping(target = "link", source = "link") 
    @Mapping(target = "pageId", source = "pageId") 
    VideosDTO videoDTOToVideo(Videos video);

}
