## Prerequisites

- [Node.js](https://nodejs.org/en) v20

## Structure
### `api`
It contains an API for the Festivals Application. It's using [express](https://expressjs.com/) package along
with [Apollo GraphQL server](https://www.apollographql.com/docs/). It should be used for:
- logging/registration process
- data access via GraphQL

### `web`
It's the front-end part of the application built using [Next.js](https://nextjs.org/docs) framework (version 14.2.4).

## Running the app
- `api` - `npm run start:api`
- `web` - `npm run start:web`
- API tests - `npm run test:api`
- Web tests - `npm run test:web`
