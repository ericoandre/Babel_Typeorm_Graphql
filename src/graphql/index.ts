import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/user_resolver';

export function getSchema() {
    return Promise.resolve(buildSchema({ resolvers: [UserResolver], validate: false }));
}