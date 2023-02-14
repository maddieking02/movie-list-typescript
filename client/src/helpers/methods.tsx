import axios from 'axios';

type Binary = 0 | 1;

interface Movies {
  title: string;
  watched?: Binary;
}

export const getData = () => {
  axios.get('/api/movies')
    .then((res: any) => {
      console.log('successful retrieval of movies')
      // setMaster(response.data)
    })
    .catch((err: unknown) => {
      console.log('failure to retrieve movies')
    })
}

export const postData = (entry: Movies) => {
  axios.post('/api/movies', entry)
    .then((res: any) => {
      console.log('movie successfully added')
      getData();
    })
    .catch((err: unknown) => {
      console.log('failed to add movie')
    })
}

export const patchData = (entry: Movies) => {
  axios.patch('/api/movies', entry)
    .then((res: any) => {
      console.log('movie successfully patched')
      getData();
    })
    .catch((err: unknown) => {
      console.log('movie failed to patch')
    })
}