import axios from 'axios';

export const getPhotoById = (id: string):
    Promise<any> => axios.get(`http://localhost:3001/api/photos/get/` + id, { responseType: `arraybuffer`})
    .then((res) => Buffer.from(res.data, 'binary').toString('base64'))