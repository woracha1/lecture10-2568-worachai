import { createBrowserRouter } from "react-router";
import TodolistPage from "./pages/TodolistPage";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import RandomUserPage from "./pages/RandomUserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <TodolistPage /> },
      { path: "randomuserpage", element: <RandomUserPage /> },
    ],
  },
]);
