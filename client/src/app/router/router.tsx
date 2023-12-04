import { Route,  Routes as ReactRouters } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

export const MyRoutes = () => {
  const isAuth = false;
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
