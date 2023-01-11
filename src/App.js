import './App.css';
import UserList from './features/users/UserList';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,Routes, Route
} from "react-router-dom";

import AddUser from "./features/users/AddUser";
import "./index.css";
import ErrorPage from "./features/users/ErrorPage";
import EditUser from "./features/users/EditUser";

function App() {
  return (
    <div className="App container mx-auto px-2 max-w-5xl pt-10 md:pd-32">
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with REDUX</h1>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path='/add-user' element={<AddUser />}></Route>
        <Route path='/edit-user/:id' element={<EditUser />}></Route>

      </Routes>
      
    </div>
  ); 
}

export default App;
