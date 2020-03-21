import React, {Children} from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const SmallButton = withStyles({
  root: {
    height: "1.5rem"
  }
})(Button);

export default SmallButton;
