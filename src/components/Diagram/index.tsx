import React, {useRef} from 'react';
import go from 'gojs';
import {ReactDiagram} from 'gojs-react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    right: ".5rem"
  },
  diagram: {
    height: "100%",
    width: "100%"
  }
}))

const nodeDataArray = [
  {key: "Alpha", loc: "100 100"},
  {key: "Beta", loc: "100 120"},
  {key: "Delta"},
  {key: "Gamma"}
]

const Diagram = () => {
  const classes = useStyles();

  const $ = go.GraphObject.make;
  const initDiagram = () => {
    const myDiagram = $(go.Diagram);
    myDiagram.add(
      $(go.Node, "Auto",
        $(go.Shape, "RoundedRectangle", {fill: "lightblue"}),
        $(go.TextBlock, "Hello", {margin: 5})
      )
    )
    return myDiagram;
  }

  const onModelChange = (change:any) => {
    console.log(change);
  }

  return (
    <div className={classes.root}>
      <ReactDiagram 
        nodeDataArray={nodeDataArray}
        initDiagram={initDiagram}
        divClassName={classes.diagram}
        onModelChange={onModelChange}
        skipsDiagramUpdate={true}
      />
    </div>
  )
}

export default Diagram;