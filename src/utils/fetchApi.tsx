import { Options } from '@/types/Api';
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options: Options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ce87d3f1ecmshcf847ea6dab43f1p1c1367jsn680157765b67',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
