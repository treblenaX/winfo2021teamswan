package com.swan.agora.controllers;

import com.swan.agora.constants.ApiConstants;
import com.swan.agora.models.Project;
import com.swan.agora.repositories.ProjectRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiConstants.BASE_PROJECT_URL)
public class ProjectController {
    @Autowired
    private ProjectRepository repository;
    // Allows clients to retrieve a list of all existing projects in database
    @RequestMapping(value = ApiConstants.GET_PROJECTS_URL, method = RequestMethod.GET)
    public List<Project> getAllProjects() {
        return repository.findAll();
    }
    // Allows clients to search for a specific project by a custom ID
    @RequestMapping(value = ApiConstants.GET_PROJECTS_BY_ID_URL, method = RequestMethod.GET)
    public Project getProjectbyId(@PathVariable("id") String id) {
        return repository.findByid(id);
    }
    // Allows clients to modify existing projects by a custom ID
    @RequestMapping(value = ApiConstants.MODIFY_PROJECT_URL, method = RequestMethod.PUT)
    public void modifyProjectByid(@PathVariable("id") String id,
                                  @Validated @RequestBody Project project) {
        project.setId(id);
        repository.save(project);
    }
    // Allows clients to create projects with a custom ID, can be duplicates (as the project ID is uniquely generated)
    @RequestMapping(value = ApiConstants.CREATE_PROJECT_URL, method = RequestMethod.POST)
    public Project createProject(@Validated @RequestBody Project project) {
        project.setId(ObjectId.get().toString());
        repository.save(project);
        return project;
    }
    // Allows clients to delete a specific project
    @RequestMapping(value = ApiConstants.DELETE_PROJECT_URL, method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable("id") String id) {
        repository.delete(repository.findByid(id));
    }
    // Method for deleting all projects (for devs to test custom dummy data)
    @RequestMapping(value = ApiConstants.DELETE_ALL_PROJECTS, method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }
    // Error mapping
    @RequestMapping(value = ApiConstants.ERROR_URL)
    public String error() {
        return "there was an error here for projects";
    }
}
