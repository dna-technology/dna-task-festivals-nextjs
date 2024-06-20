import { UserData } from './types';
import { randomUUID } from 'node:crypto';

export const USERS: UserData[] = [
    {
        id: randomUUID(),
        name: 'John',
        email: 'test@example.com',
        password: 'my_secret_password'
    },
];
