import { GraphQLString, GraphQLID } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from '../TypeDefs/Messages';
import { Users } from '../../Entities/User';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        await Users.insert(args);
    }
};

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        await Users.delete(args.id);

        return { successful: true, message: 'Deleted!' }
    }
};

export const UPDATE_USER_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        currentPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { username, currentPassword, newPassword } = args;
        const user = await Users.findOneBy({ username });

        if (!user) {
            throw new Error('Username does not exist')
        }

        const userPassword = user?.password;

        if (currentPassword === userPassword) {
            await Users.update(
                { username },
                { password: newPassword }
            );

            return { successful: true, message: 'Password updated!' }
        } else {
            throw new Error('Passwords do not match');
        }
    }
}