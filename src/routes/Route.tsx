import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import Loading from "../components/common/Loading";
import Header from "../components/common/Header/Header";
import Home from "../pages/Home/home";

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return <Loading />;
  }

  // const CodeEditor = () => <div>Code Editor App</div>;

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor} component={<div>Code Editor App</div>} />
          <Route exact path={routes.home}>
            {isAuthenticated ? <Redirect to={routes.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  page: {
    height: "100%",
  },
}));

export default Routes;
