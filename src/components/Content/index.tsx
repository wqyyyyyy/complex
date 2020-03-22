import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import data from '../../mock/content';

const useStyle = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light
  }
}))

const Content = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      content
    </div>
  )
}

export default Content;
