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

export const createProject = (params):
  Promise<Project> => axios.post<Project>(`url`, params)
  .then((res) => res.data)
  .catch((err) => {
    throw axiosErrorHandler(err);
  });