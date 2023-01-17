import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { schema } from './Schema';
import { Users } from './Entities/User';

const main = async () => {

    const appDataSource = new DataSource({
        type: 'mysql',
        database: 'graphqlcrud',
        username: 'root',
        password: 'root',
        logging: true,
        synchronize: false,
        entities: [Users],
    });

    appDataSource.initialize();

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3001, () => console.log('Server running on port 3001'))
};

main().catch(err => console.log(err));