import { GET_ALL_USERS } from "../GraphQl/Queries";
import { DELETE_USER } from "../GraphQl/Mutation";
import { useQuery, useMutation } from "@apollo/client";

const UserList = () => {

    const { data, error, loading } = useQuery(GET_ALL_USERS);

    const [deleteUser, { }] = useMutation(DELETE_USER);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Fetch error...</div>
    return (
        <>
            {data && (
                data.getAllUsers.map((user: any, i: number) => {
                    return <div key={i}>
                        {user.name} / {user.username}
                        <button onClick={() => deleteUser({
                            variables: {
                                id: user.id
                            }
                        })}>delete user</button>
                    </div>
                })
            )}
        </>
    )
}

export default UserList