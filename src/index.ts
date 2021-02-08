import 'reflect-metadata';
import {connecte} from './config/typeorm';

import { ApolloServer } from 'apollo-server';
import { getSchema } from './graphql'

export async function runServer() {
    const schema = await getSchema();
    const server = new ApolloServer({ schema });
    await server.listen(process.env.PORT || 4000).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}

connecte();
runServer();