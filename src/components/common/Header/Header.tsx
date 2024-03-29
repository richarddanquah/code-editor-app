import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Switch, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import DarkModeIcon from "@material-ui/icons/Brightness2";
import { toggleDarkMode } from "../../../store/dark-mode/reducer";

import AuthenticatedButtons from "./AuthenticatedButtons";
import UnauthenticatedButtons from "./UnauthenticatedButtons";

function Header(): JSX.Element {
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {" "}
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode} />
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    flex: "1",
  },
}));

export default Header;
