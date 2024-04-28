//infinite scroll of wallpapers

import axios from 'axios';
import {WallpaperApiResponseT} from '../../types';

// @ts-ignore
import {API_KEY} from '@env';

const PIXABAY_API_URL = `https://pixabay.com/api/?key=${process.env.API_KEY}&orientation=vertical`;

export const fetchWallpapers = async ({
  category,
  page = 1,
  per_page = 4,
  order = 'popular',
  q,
}: {
  category?: string;
  page?: number;
  per_page?: number;
  q?: string;
  order?: 'latest' | 'popular';
}) => {
  const queryParams: GenericObject = {page, per_page, order};
  if (category) queryParams['category'] = category;
  if (q && q.length && q.trim().length)
    queryParams['q'] = q.trim().replace(/\s+/g, ' ');
  const params = Object.keys(queryParams)
    .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join('&');

  console.log({params});
  return axios.get<WallpaperApiResponseT>(`${PIXABAY_API_URL}/&${params}`);
};
