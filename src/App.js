import './App.css';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className="App container mx-auto px-2 max-w-5xl pt-10 md:pd-32">
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with REDUX</h1>
      <UserList />
    </div>
  ); 
}

export default App;
