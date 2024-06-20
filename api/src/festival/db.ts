import { FestivalData } from './types';
import { FESTIVALS } from './data';

export const db = {
    getAllFestivals: (): FestivalData[] => [...FESTIVALS]
};
