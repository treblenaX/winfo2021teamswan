import axios from "axios";
import {Project} from "./Project";

export type Tile = {
  title: string,
  authorId: string,
  dateTime: Date,
  projectId: number,
  content: string
}

export const getAllTiles = ():
  Promise<Tile[]> => axios.get<Tile[]>(`/api/tile/getall`)
  .then((res) => res.data);

export const getTileById = (id: string):
  Promise<Tile> => axios.get<Tile>(`/api/tile/id/{id}`)
  .then((res) => res.data);

export const modifyProjectById = (id: string):
  Promise<null> => axios.put<null>(`/api/tile/id/{id}`)
  .then((res) => res.data);

export const createTile = (tile: Tile):
  Promise<Tile> => axios.post<Tile>(`/api/tile/createtile`)
  .then((res) => res.data);

export const deleteTile = (id: string):
  Promise<null> => axios.delete<null>(`/api/tile/id/{id}`)
  .then((res) => res.data);

export const deleteAll = ():
  Promise<null> => axios.delete<null>(`/api/tile/deleteall`)
  .then((res) => res.data);