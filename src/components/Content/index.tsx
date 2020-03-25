import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography} from '@material-ui/core';
import data from '../../mock/content';

const useStyle = makeStyles(theme => ({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.white
  },
  overhead: {
    boxSizing: "border-box",
    width: "100%",
    // borderTop: ".1rem solid black",
    borderBottom: ".05rem solid black",
    // padding: theme.spacing(.5)
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

const Content = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="caption" display="block" className={classes.overhead}>info</Typography>
        <Typography variant="h6" align="center" className={classes.title}>
          {data.title}
          <br/>
        </Typography>
        <div>
          <Typography variant="body1">
            {data.demind}
          </Typography>
          <br/>
        </div>
        <div>
          <Typography variant="body1">
            {data.skill}
          </Typography>
          <br/>
        </div>
        <div>
          <Typography variant="body1">
            {data.practices}
          </Typography>
          <br/>
        </div>
        <div>
          <Typography variant="body1">
            {data.conclusion}
          </Typography>
          <br/>
        </div>
        
      </Container>
    </div>
  )
}

export default Content;
