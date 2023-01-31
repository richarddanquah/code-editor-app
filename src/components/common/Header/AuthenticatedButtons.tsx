import { makeStyles } from '@material-ui/core';
import React from 'react'
import SignOut from '../../../auth/SignOut';

function AuthenticatedButtons() {

    const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>Open workspace</div>
        <SignOut />
      
    </div>
  )
}

const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
  }));

export default AuthenticatedButtons
