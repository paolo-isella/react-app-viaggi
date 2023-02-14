import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NewPlace from "../places/pages/NewPlace";
import UserPlaces from "../places/pages/UserPlaces";
import Users from "../user/pages/Users";
import MainLayout from "./MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="/places/new" element={<NewPlace />} />
    </Route>
  )
);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterComponent;
