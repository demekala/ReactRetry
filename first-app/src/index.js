import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import SidebarRight from "./components/SidebarRight/SidebarRight";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import Notifications from "./components/Notifications/Notifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <h1>Settings</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <Sidebar name="Demetre Kalandarishvili" job="Mentor" />
    <RouterProvider router={router} />
    <SidebarRight />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
