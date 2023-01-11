import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUser from "./features/users/AddUser";
import UserList from "./features/users/UserList";
import "./index.css";
import ErrorPage from "./features/users/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-user",
    element: <AddUser></AddUser>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);