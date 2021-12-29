import { Route, Redirect } from "react-router-dom";
import LayoutPage from "../components/layout";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      CheckToken() ? (
        <LayoutPage>
          <Component {...props} />
        </LayoutPage>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export const CheckToken = () => {
  var token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
};
