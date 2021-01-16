package com.swan.agora.controllers;

import com.swan.agora.repositories.TileRepository;
import com.swan.agora.models.Tile;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/tile")
public class TileController {
    @Autowired
    private TileRepository repository;
    @RequestMapping(value = "/api/getall", method = RequestMethod.GET)
    public List<Tile> getAllTiles() {
        return repository.findAll();
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.GET)
    public Tile getTileByid(@PathVariable("id") String id) {
        return repository.findByProjectId(id);
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.PUT)
    public void modifyTileByid(@PathVariable("id") String id,
                               @Validated @RequestBody Tile tile) {
        tile.setProjectId(id);
        repository.save(tile);
    }
    @RequestMapping(value = "/api/createtile", method = RequestMethod.POST)
    public Tile createTile(@Validated @RequestBody Tile tile) {
        tile.setProjectId(ObjectId.get().toString());
        LocalDateTime dateTime = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        tile.setDateTime(dateTime.format(myFormatObj));
        repository.save(tile);
        return tile;
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.DELETE)
    public void deleteTile(@PathVariable("id") String id) {
        repository.delete(repository.findByProjectId(id));
    }
    @RequestMapping(value = "/api/deleteall", method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }
    @RequestMapping(value = "/api/error")
    public String error() {
        return "there was an error here";
    }
}
