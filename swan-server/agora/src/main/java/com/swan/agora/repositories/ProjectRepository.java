package com.swan.agora.repositories;

import com.swan.agora.models.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.swan.agora.models.Project;

public interface ProjectRepository extends MongoRepository<Project, String> {
    Project findByid(String projectId);
}
