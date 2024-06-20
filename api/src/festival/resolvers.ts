import { db } from './db';

export const resolvers = {
    Query: {
        festivals: () => db.getAllFestivals(),
    },
};
