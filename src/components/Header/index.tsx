import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from  '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {SmallButton} from '../customUI/Buttons';
import SmallToolbar from '../customUI/Toolbar';
import {ui} from '../../config/uiconfig';

const useStyles = makeStyles(theme => ({
  root: {
    height: ui.headerHeight,
    lineHeight: ui.headerHeight,
    boxShadow: "0 0 0",
    borderBottom: "1px solid " + theme.palette.primary.dark
  },
  toolbar: {
    height: "2rem",
    padding: 0
  }
}));

const Index = () => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="primary" classes={{
      root: classes.root
    }}>
      <SmallToolbar>
        <Typography variant="caption">
          News
        </Typography>
        <SmallButton color="inherit">Login</SmallButton>
      </SmallToolbar>
    </AppBar>
  )
}

export default Index;
