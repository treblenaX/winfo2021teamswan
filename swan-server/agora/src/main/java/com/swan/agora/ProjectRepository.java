package com.swan.agora;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.swan.agora.models.Project;

public interface ProjectRepository extends MongoRepository<Project, String> {
    Project findByProjectId(String projectId);
}
