package com.swan.agora;

import org.springframework.data.annotation.Id;

public class Project {
	@Id
	private String id;

	private String title;
	private Person owner;
	private Person[] volunteers;
	private boolean acceptingVolunteers;
	private String description;

	private String thumbnailUrl;
	private String githubUrl;

	public String getTitle() {
		return title;
	}

	public Person getOwner() {
		return owner;
	}

	public Person[] getVolunteers() {
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

	public void setOwner(Person owner) {
		this.owner = owner;
	}

	public void setVolunteers(Person[] volunteers) {
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
