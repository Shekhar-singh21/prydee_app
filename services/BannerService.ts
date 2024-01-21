import apiClient from '@/lib/apiClient';
import { Banner } from '@/types';
import { catchError } from '@/utils/catchError';

const getBanners = async (): Promise<Banner[]> => {
  try {
    console.log('Sending request to /banners');
    const { data } = await apiClient.get(`/banners`);
    console.log('Received response:', data);
    return data.data;
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw new Error(catchError(error));
  }
};


const BannerService = {
  getBanners,
};

export default BannerService;
