import CreateUser from './components/CreateUser';
import UpdatePassword from './components/UpdatePassword';
import UserList from './components/UserList';


const App = () => {
  return (
    <>
      <CreateUser />
      <UserList />
      <UpdatePassword />
    </>
  );
};

export default App;