package com.swan.agora;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
    Project findByProjectId(String projectId);
}
