import { UserData } from './types';
import { USERS } from './data';

export const db = {
    getAllUsers: (): UserData[] => [...USERS]
};
