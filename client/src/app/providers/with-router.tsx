import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: () => JSX.Element) => () =>
  (
    <BrowserRouter >
      <Component />
    </BrowserRouter>
  );
