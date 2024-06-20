import { randomUUID } from 'node:crypto';
import { FestivalData } from './types';

export const FESTIVALS: FestivalData[] = [
    {
        id: randomUUID(),
        name: 'First festival',
        location: 'Warsaw',
        price: 150.00,
        duration: {
            end: new Date('2020-05-12').toISOString(),
            start: new Date('2020-05-10').toISOString()
        }
    },
    {
        id: randomUUID(),
        name: 'Second festival',
        location: 'London',
        price: 300.00,
        duration: {
            end: new Date('2020-01-03').toISOString(),
            start: new Date('2020-01-01').toISOString()
        }
    },
    {
        id: randomUUID(),
        name: 'Third festival',
        location: 'Cracow',
        price: 200.00,
        duration: {
            end: new Date('2020-06-11').toISOString(),
            start: new Date('2020-06-10').toISOString()
        }
    }
];
