import axios from "axios";
import {Project} from "./Project";

export type Tile = {
  title: string,
  authorId?: string,
  dateTime: string,
  projectId?: string,
  content: string
}

const poo = "http://localhost:3001";

export interface IServerResponseTiles {
  tiles: Tile[]
}

export const getAllTiles = ():
  Promise<IServerResponseTiles> => axios.get<Tile[]>(poo + `/api/tile/getall`)
  .then((res) => {
    const arr: Tile[] = [];

    const test: any[] = res.data;

    for (let i = 0; i < test.length; i++) {
      const e: Tile = test[i];

      const el: Tile = {
        title: e.title,
        authorId: e.authorId,
        dateTime: e.dateTime,
        projectId: e.projectId,
        content: e.content
      };

      arr.push(el);
    } 

    // for (const e of test) {
    //   const el: Tile = {
    //     title: e.title,
    //     authorId: e.authorId,
    //     dateTime: e.dateTime,
    //     projectId: e.projectId,
    //     content: e.content
    //   };

    //   console.log('PUSH: ' + el);

    //   arr.push(el);
    // }

    const final: IServerResponseTiles = {
      tiles: arr
    };

    return final;
  });

export const getTileById = (id: string):
  Promise<Tile> => axios.get<Tile>(poo + `/api/tile/id/{id}`)
  .then((res) => res.data);

export const modifyProjectById = (id: string, tile: Tile):
  Promise<null> => axios.put<null>(poo + `/api/tile/id/{id}`, tile)
  .then((res) => res.data);

export const createTile = (tile: Tile):
  Promise<Tile> => axios.post<Tile>(poo + `/api/tile/createtile`, tile)
  .then((res) => res.data);

export const deleteTile = (id: string):
  Promise<null> => axios.delete<null>(poo + `/api/tile/id/{id}`)
  .then((res) => res.data);

export const deleteAll = ():
  Promise<null> => axios.delete<null>(poo + `/api/tile/deleteall`)
  .then((res) => res.data);