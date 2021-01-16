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
  timeline: TimelineTile
}