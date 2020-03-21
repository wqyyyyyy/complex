import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Iprops {

}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.primary.main
  }
}))

const Index:React.FC<Iprops> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default Index;
