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
        duration: Duration!
    }
    
    type Query {
        festivals: [Festival!]!
    }
`;
