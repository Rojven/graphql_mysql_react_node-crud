import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $name: String! 
        $username: String! 
        $password: String!
        ) {
        createUser(
            name: $name 
            username: $username 
            password: $password
        ) {
            id
            name
            username
        }
    }
`

export const DELETE_USER = gql`
    mutation deleteUser(
        $id: ID!
        ) {
        deleteUser(
            id: $id
        ) {
            message
        }
    }
`

export const UPDATE_USER_PASSWORD = gql`
    mutation updateUserPassword(
        $username: String! 
        $currentPassword: String!
        $newPassword: String!
        ) {
        updateUserPassword(
            username: $username 
            currentPassword: $currentPassword 
            newPassword: $newPassword
        ) {
            message
        }
    }
`