import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Suits from "./pages/Suits";
import Shoes from "./pages/Shoes";
import AdminDashboardPage from "./admin/pages/AdminDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "suits", Component: Suits },
      { path: "shoes", Component: Shoes },
    ],
  },
  {
    path: "/admin",
    Component: AdminDashboardPage,
  },
]);
