import { useState } from 'react';
import { UPDATE_USER_PASSWORD } from '../GraphQl/Mutation';
import { useMutation } from "@apollo/client";

const inputs = [
    { name: 'username', type: 'text' },
    { name: 'currentPassword', type: 'password' },
    { name: 'newPassword', type: 'password' },
];

const UpdatePassword = () => {

    const [inputValue, setInputValue] = useState<any>({
        username: '',
        currentPassword: '',
        newPassword: ''
    });

    const [updateUserPassword, { error }] = useMutation(UPDATE_USER_PASSWORD);

    return (
        <>
            {inputs.map((input, i) => (
                <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.name}
                    key={i}
                    onChange={(e) => {
                        setInputValue({
                            ...inputValue,
                            [e.target.name]: e.target.value
                        })
                    }}
                />
            ))}
            <button
                onClick={() => updateUserPassword({
                    variables: {
                        username: inputValue.username,
                        currentPassword: inputValue.currentPassword,
                        newPassword: inputValue.newPassword
                    }
                })}
            >Update Password</button>
        </>
    )
}

export default UpdatePassword