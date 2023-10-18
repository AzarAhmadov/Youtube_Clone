
import { Options } from '@/types/Api';
import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options: Options = {
  params: {
    maxResults: 100,
  },
  headers: {
    'X-RapidAPI-Key': '6f6b58adc6msha9b2268f09040bbp1f5509jsncfa9f11064fc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchApi = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};