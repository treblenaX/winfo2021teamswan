package com.swan.agora;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Project {
    private String title;
    @Id private String projectId;
    private String ownerId;
    private String thumbnailUrl;
    private String githubUrl;
    private String description;
    private boolean acceptingVolunteers;
    private List<Tile> timeline;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isAcceptingVolunteers() {
        return acceptingVolunteers;
    }

    public void setAcceptingVolunteers(boolean acceptingVolunteers) {
        this.acceptingVolunteers = acceptingVolunteers;
    }

//    public Tile[] getTimeline() {
//        return timeline;
//    }
//
//    public void setTimeline(Tile[] timeline) {
//        this.timeline = timeline;
//    }
}
