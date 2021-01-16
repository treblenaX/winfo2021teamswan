package com.swan.agora.repositories;

import com.swan.agora.models.Tile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TileRepository extends MongoRepository<Tile, String> {
    Tile findByProjectId(String projectId);

}
