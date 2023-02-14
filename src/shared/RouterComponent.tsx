import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Users from "../user/pages/Users";
import MainLayout from "./MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Users />} />
      <Route path="/places" element={<div>places</div>} />
      <Route path="/cacca" element={<div>cacca</div>} />
    </Route>
  )
);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterComponent;
