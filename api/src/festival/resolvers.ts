import type { Festival } from './types';

const festivals: Festival[] = [
    {
        id: 1,
        name: 'First festival',
        location: 'Warsaw',
        duration: {
            end: new Date('2020-05-10').toISOString(),
            start: new Date('2020-05-12').toISOString()
        }
    },
    {
        id: 2,
        name: 'Second festival',
        location: 'London',
        duration: {
            end: new Date('2020-01-01').toISOString(),
            start: new Date('2020-01-03').toISOString()
        }
    },
    {
        id: 3,
        name: 'Third festival',
        location: 'Cracow',
        duration: {
            end: new Date('2020-06-10').toISOString(),
            start: new Date('2020-06-11').toISOString()
        }
    }
];

export const resolvers = {
    Query: {
        festivals: () => festivals,
    },
};
