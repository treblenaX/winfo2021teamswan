package com.swan.agora;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    private ProjectRepository repository;
    @RequestMapping(value = "/api/getall", method = RequestMethod.GET)
    public List<Project> getAllProjects() {
        return repository.findAll();
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.GET)
    public Project getProjectbyId(@PathVariable("id") String id) {
        return repository.findByProjectId(id);
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.PUT)
    public void modifyProjectByid(@PathVariable("id") String id,
                                  @Validated @RequestBody Project project) {
        project.setProjectId(id);
        repository.save(project);
    }
    @RequestMapping(value = "/api/createproject", method = RequestMethod.POST)
    public Project createProject(@Validated @RequestBody Project project) {
        project.setProjectId(ObjectId.get().toString());
        repository.save(project);
        return project;
    }
    @RequestMapping(value = "/api/id/{id}", method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable("id") String id) {
        repository.delete(repository.findByProjectId(id));
    }
    @RequestMapping(value = "api/deleteall", method = RequestMethod.DELETE)
    public void deleteAll() {
        repository.deleteAll();
    }
    @RequestMapping(value = "api/error")
    public String error() {
        return "there was an error here for projects";
    }
}
