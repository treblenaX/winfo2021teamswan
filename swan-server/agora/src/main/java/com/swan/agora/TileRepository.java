package com.swan.agora;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TileRepository extends MongoRepository<Tile, String> {
    Tile findByProjectId(String projectId);

}
