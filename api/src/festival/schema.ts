import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Duration {
        end: String!
        start: String!
    }
    
    type Festival {
        id: ID!
        name: String!
        location: String!
        price: Float!
        duration: Duration!
    }
    
    type Query {
        festivals: [Festival!]!
    }
`;
