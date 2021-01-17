package com.swan.agora.models;

import org.springframework.data.annotation.Id;

public class Project {
	@Id
	private String id;
	private String title;
	private Account owner;
	private Account[] volunteers;
	private boolean acceptingVolunteers;
	private String description;
	private String thumbnailUrl;
	private String githubUrl;
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}

	public Account getOwner() {
		return owner;
	}

	public Account[] getVolunteers() {
		return volunteers;
	}

	public boolean isAcceptingVolunteers() {
		return acceptingVolunteers;
	}

	public String getDescription() {
		return description;
	}

	public String getThumbnailUrl() {
		return thumbnailUrl;
	}

	public String getGithubUrl() {
		return githubUrl;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setOwner(Account owner) {
		this.owner = owner;
	}

	public void setVolunteers(Account[] volunteers) {
		this.volunteers = volunteers;
	}

	public void setAcceptingVolunteers(boolean acceptingVolunteers) {
		this.acceptingVolunteers = acceptingVolunteers;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setThumbnailUrl(String thumbnailUrl) {
		this.thumbnailUrl = thumbnailUrl;
	}

	public void setGithubUrl(String githubUrl) {
		this.githubUrl = githubUrl;
	}
}
