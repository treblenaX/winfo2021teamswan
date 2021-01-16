package com.swan.agora.controllers;

import com.swan.agora.constants.ApiConstants;
import com.swan.agora.models.Tile;
import com.swan.agora.repositories.TileRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping(ApiConstants.BASE_TILE_URL)
public class TileController {
    @Autowired
    private TileRepository repository;

    @RequestMapping(value = ApiConstants.GET_ALL_TILES_URL, method = RequestMethod.GET)
    public List<Tile> getAllTiles() {
        return repository.findAll();
    }

    @RequestMapping(value = ApiConstants.GET_TILES_BY_ID_URL, method = RequestMethod.GET)
    public Tile getTileByid(@PathVariable("id") String id) {
        return repository.findByProjectId(id);
    }

    // stopped here 
    @RequestMapping(value = ApiConstants.MODIFY_PERSON_URL, method = RequestMethod.PUT)
    public void modifyPersonByid(@PathVariable("id") String id,
                                       @Validated @RequestBody Tile tile) {
        tile.setProjectId(id);
        repository.save(tile);
    }

    @RequestMapping(value = ApiConstants.CREATE_PERSON_URL, method = RequestMethod.POST)
    public Tile createPerson(@Validated @RequestBody Tile tile) {
        tile.setProjectId(ObjectId.get().toString());
        LocalDateTime dateTime = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        tile.setDateTime(dateTime.format(myFormatObj));
        repository.save(tile);
        return tile;
    }

    @RequestMapping(value = ApiConstants.DELETE_TILE_URL, method = RequestMethod.DELETE)
    public void deleteTile(@PathVariable("id") String id) {
        repository.delete(repository.findByProjectId(id));
    }

    @RequestMapping(value = ApiConstants.DELETE_ALL_TILE, method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }

    @RequestMapping(value = "/tile/error")
    public String error() {
        return "there was an error here";
    }
}
