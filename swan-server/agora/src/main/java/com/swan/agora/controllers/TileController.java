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

    // Allows clients to access all tiles in the database (useful for creating timelines)
    @RequestMapping(value = ApiConstants.GET_ALL_TILES_URL, method = RequestMethod.GET)
    public List<Tile> getAllTiles() {
        return repository.findAll();
    }
    // Allows clients to access a specific tile by a custom ID
    @RequestMapping(value = ApiConstants.GET_TILES_BY_ID_URL, method = RequestMethod.GET)
    public Tile getTileById(@PathVariable("id") String id) {
        return repository.findByProjectId(id);
    }
    // Allows clients to modify existing tiles through a specific ID
    @RequestMapping(value = ApiConstants.MODIFY_TILE_URL, method = RequestMethod.PUT)
    public void modifyTileByid(@PathVariable("id") String id,
                                       @Validated @RequestBody Tile tile) {
        tile.setProjectId(id);
        repository.save(tile);
    }
    // Allows clients to create new tiles (with a uniquely-generated tileID)
    @RequestMapping(value = ApiConstants.CREATE_TILE_URL, method = RequestMethod.POST)
    public Tile createTile(@Validated @RequestBody Tile tile) {
        tile.setProjectId(ObjectId.get().toString());
        // Grab the date and time of creation to reformat for JSON usage
        LocalDateTime dateTime = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        tile.setDateTime(dateTime.format(myFormatObj));
        repository.save(tile);
        return tile;
    }
    // Allows clients to delete a specific tile through its custom ID
    @RequestMapping(value = ApiConstants.DELETE_TILE_URL, method = RequestMethod.DELETE)
    public void deleteTile(@PathVariable("id") String id) {
        repository.delete(repository.findByProjectId(id));
    }
    // Method to delete all tiles in the database (for devs to test dummy data)
    @RequestMapping(value = ApiConstants.DELETE_ALL_TILE, method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }
    // error mapping
    @RequestMapping(value = "/tile/error")
    public String error() {
        return "there was an error here";
    }
}
