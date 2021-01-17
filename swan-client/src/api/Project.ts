import axios from 'axios';
import {Tile} from "./Tile";

export type Project = {
  title: string,
  projectId: number,
  ownerId: string,
  volunteerIds: string[],
  thumbnailUrl: string,
  githubUrl: string,
  description: string,
  acceptingVolunteers: boolean,
  timeline: Tile[]
}

export type CreateProjectParams = {
  title: string,
  ownerId: string,
  thumbnailUrl: string,
  githubUrl: string,
  description: string,
  acceptingVolunteers: boolean
}



export const getAllProjects = ():
  Promise<Project[]> => axios.get<Project[]>(`/api/getall`)
  .then((res) => res.data);

export const getProjectById = (id: string):
  Promise<Project> => axios.get<Project>(`/api/id/{id}`)
  .then((res) => res.data);

export const modifyProjectById = (id: string, project: Project):
  Promise<null> => axios.put<null>(`/api/id/{id}`, project)
  .then((res) => res.data);

export const createProject = (project: Project):
  Promise<Project> => axios.post<Project>(`/api/createproject`)
  .then((res) => res.data);

export const deleteProject = (id: string):
  Promise<null> => axios.delete<null>(`/api/id/{id}`)
  .then((res) => res.data);

export const deleteAll = ():
  Promise<null> => axios.delete<null>(`/api/deleteall`)
  .then((res) => res.data);