import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from  '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ui} from '../../../config/uiconfig';

const SmallToolbar = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: ui.headerHeight,
    lineHeight: ui.headerHeight
  }
})(AppBar)

export default SmallToolbar;
