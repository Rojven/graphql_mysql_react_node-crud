import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../GraphQl/Mutation";

const inputs = [
  { name: 'name' },
  { name: 'username' },
  { name: 'password' },
]

const CreateUser = () => {

  const [inputValue, setInputValue] = useState<any>({
    name: '',
    username: '',
    password: ''
  });

  const [createUser, { error }] = useMutation(CREATE_USER);

  if (error) return <div>Apollo Error</div>
  return (
    <>
      {inputs.map((input, i) => (
        <input
          type='text'
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
      <button onClick={() => {
        createUser({
          variables: {
            name: inputValue.name,
            username: inputValue.username,
            password: inputValue.password
          }
        })
      }}>Create User</button>
    </>
  )
}

export default CreateUser;