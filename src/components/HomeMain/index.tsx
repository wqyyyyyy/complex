import React, {useState} from 'react';
import {Resizable} from 're-resizable';
import {makeStyles} from '@material-ui/core/styles';
import G6 from '../G6';
import Content from '../Content';
import {ui} from '../../config/uiconfig';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    left: 0,
    top: ui.headerHeight,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    "& > *": {
      height: "100%"
    }
  },
  left: {
    position: 'relative',
    width: "30%",
    minWidth: "5%",
    maxWidth: `${ui.g6width}px`
  },
  right: {
    position: "relative",
    width: "70%",
    minWidth: "30%",
    flexGrow: 1
  },
  resizebar: {
    position: "absolute",
    right: "-.1rem",
    height: "100%",
    width: ".5rem",
    // zIndex: 1000,
    backgroundColor: theme.palette.primary.dark
  }
}))

const Resize = () => {
  const classes = useStyles();
  const [width, setWidth] = useState("50%");
  return (
    <div className={classes.root}>
      <Resizable 
        className={classes.left} 
      >
        <G6/>
        <div className={classes.resizebar}/>
      </Resizable>
      <div className={classes.right}>
        <Content/>
      </div>
    </div>
  )
}

export default Resize;