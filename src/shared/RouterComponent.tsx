import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NewPlace from "../places/pages/NewPlace";
import UpdatePlace from "../places/pages/UpdatePlace";
import UserPlaces from "../places/pages/UserPlaces";
import Auth from "../user/pages/Auth";
import ProtectedRoutes from "../user/pages/ProtectedRoutes";
import Users from "../user/pages/Users";
import MainLayout from "./MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Users />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/:userId" element={<ProtectedRoutes />}>
        <Route path="places" element={<UserPlaces />} />
        <Route path="places-new" element={<NewPlace />} />
        <Route path="places/:placeId" element={<UpdatePlace />} />
      </Route>
    </Route>
  )
);

const RouterComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterComponent;
