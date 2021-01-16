import axios from 'axios';
import {TimelineTile} from "./TimelineTile";

export type Project = {
  title: string,
  projectId: number,
  ownerId: string,
  volunteerIds: string[],
  thumbnailUrl: string,
  githubUrl: string,
  description: string,
  acceptingVolunteers: boolean,
  timeline: TimelineTile[]
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
  Promise<Project> => axios.post<Project>(`url`, params)
  .then((res) => res.data);

export const getProject = (projectId: number):
  Promise<Project> => axios.get<Project>(`url/projectId`)
  .then((res) => res.data);