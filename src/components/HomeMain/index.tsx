import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridLayout from 'react-grid-layout';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: "1.7rem",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
  },
  resizer: {
    width: ".3rem",
    height: "100%",
    backgroundColor: theme.palette.primary.dark
  },
  left: {
    width: "50%"
  }
}));

const layout = [
  {i: 'a', x: 0, y: 2, w: 1, h: 2},
  {i: 'b', x: 0, y: 2, w: 1, h: 2}
]

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a">a</div>
        <div key="b">b</div>
      </GridLayout>
    </div>
  );
}

export default Index;
