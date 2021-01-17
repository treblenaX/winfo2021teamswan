import axios from 'axios';
import {Tile} from "./Tile";
import { ownerDocument } from '@material-ui/core';

export type Project = {
  title: string,
  projectId?: number,
  ownerId?: string,
  volunteerIds?: string[],
  thumbnailUrl?: string,
  githubUrl: string,
  description: string,
  acceptingVolunteers: boolean,
  timeline?: Tile[]
}

export type CreateProjectParams = {
  title: string,
  ownerId: string,
  thumbnailUrl: string,
  githubUrl: string,
  description: string,
  acceptingVolunteers: boolean
}

const poo = "http://localhost:3001";

export interface IServerResponseProjects {
  projects: Project[]
}

export const getAllProjects = ():
  Promise<IServerResponseProjects> => axios.get<Project[]>(poo + `/api/project`)
  .then((res) => {
    const arr: Project[] = [];

    const test: any[] = res.data;

    for (let i = 0; i < test.length; i++) {
      const e: any = test[i];

      const el: Project = {
        title: e.title,
        githubUrl: e.githubUrl,
        description: e.description,
        acceptingVolunteers: e.acceptingVolunteers
      };

      arr.push(el);
    }

    const final: IServerResponseProjects = {
      projects: arr
    };

    return final;
  });
// export const getAllProjects = ():
//   Promise<Project[]> => axios.get<Project[]>(poo + `/api/project`)
//   .then((res) => res.data);

export const getProjectById = (id: string):
Promise<Project> => axios.get<Project>(poo + `/api/project/id/` + id)
  .then((res) => res.data);

export const modifyProjectById = (id: string, project: Project):
  Promise<null> => axios.put<null>(poo + `/api/id/{id}`, project)
  .then((res) => res.data);

export const createProject = (project: Project):
  Promise<Project> => axios.post<Project>(poo + `/api/project/create_project`, project)
  .then((res) => res.data);

export const deleteProject = (id: string):
  Promise<null> => axios.delete<null>(poo + `/api/id/{id}`)
  .then((res) => res.data);

export const deleteAll = ():
  Promise<null> => axios.delete<null>(poo + `/api/deleteall`)
  .then((res) => res.data);