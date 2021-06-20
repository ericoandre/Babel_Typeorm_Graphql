import 'reflect-metadata';
import { createConnection } from "typeorm";

import { ApolloServer } from 'apollo-server';
import { getSchema } from './graphql'

import path from 'path';

const main = async () => {
    await createConnection(
        {
            type: "sqlite",
            database: path.join(__dirname, "../", "db.sqlite3"),
            synchronize: true,
            entities: [path.join(__dirname, "./entity", "*")],
        }
    );

    const schema = await getSchema();
    const server = new ApolloServer({ schema });

    await server.listen(process.env.PORT || 4000).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
};

main();