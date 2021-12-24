import { Route, Redirect } from "react-router-dom";

import SideBar from "../components/sidebar";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      CheckToken() ? (
        <div className="container fullpage">
          <main className="dashboardMain p-grid">
            <SideBar />
            <Component {...props} />
          </main>
        </div>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export const CheckToken = () => {
  var token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
