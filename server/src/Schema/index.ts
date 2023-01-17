import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER, DELETE_USER, UPDATE_USER_PASSWORD } from './Mutations/User';

const RootQueru = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUserPassword: UPDATE_USER_PASSWORD
    }
});

export const schema = new GraphQLSchema({
    query: RootQueru,
    mutation: Mutation
})