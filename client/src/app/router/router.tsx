import { Route,  Routes as ReactRouters } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "~/app/store";
import { authRoutes, publicRoutes } from "./routes";


export const MyRoutes = () => {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);
  return (
    <ReactRouters>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
    </ReactRouters>
  );
};
