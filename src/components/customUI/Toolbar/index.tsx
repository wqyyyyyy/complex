import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from  '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const SmallToolbar = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "1.7rem",
    lineHeight: "1.7rem"
  }
})(AppBar)

export default SmallToolbar;
