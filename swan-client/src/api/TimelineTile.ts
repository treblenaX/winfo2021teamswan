import axios from "axios";
import {Project} from "./Project";

export type TimelineTile = {
  title: string,
  authorId: string,
  dateTime: Date,
  projectId: number,
  content: string
}

export const getTimeline = ():
  Promise<TimelineTile[]> => axios.get<TimelineTile[]>(`url/timeline`)
  .then((res) => res.data);