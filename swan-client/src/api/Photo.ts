import axios from 'axios';

const poo = "http://localhost:3001";

export const getPhotoById = (id: string):
    Promise<any> => axios.get(poo + `/api/photos/get/` + id, { responseType: `arraybuffer`})
    .then((res) => Buffer.from(res.data, 'binary').toString('base64'))