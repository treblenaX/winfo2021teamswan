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

export const createProject = (params: CreateProjectParams):
  Promise<Project> => axios.post<Project>(`/api/`, params)
  .then((res) => res.data);

export const getProject = (projectId: number):
  Promise<Project> => axios.get<Project>(`/api/`)
  .then((res) => res.data);