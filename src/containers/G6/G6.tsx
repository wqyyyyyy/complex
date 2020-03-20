import React, {useState, useEffect} from 'react';
import G6 from '@antv/g6';
import './G6component.css';

const G6component = () => {

  const minimap = new G6.Minimap({
    size: [100, 100],
    className: "minimap",
    type: "delegate"
  })

  const graph = new G6.Graph({
    container: "root",
    layout: {
      type: "force",
      preventOverlap: true,
      linkDistance: 200
    },
    modes: {
      default: ["drag-canvas", "zoom-canvas", "drag-node"]
    },
    width: 1000,
    height: 800,
    defaultNode: {
      type: "modelRect",
      size: [150, 80],
      style: {
        fill: "rgb(31, 35, 36)",
        lineWidth: 0
      },
      labelCfg: {
        offset: 30,
        style: {
          fill: "rgb(170, 170, 170)",
          fontSize: 12
        }
      },
      descriptionCfg: {
        style: {
          fill: "rgb(119, 119, 119)"
        }
      },
      linkPoints: {
        left: true,
        right: true,
        fill: "rgb(85, 85, 85)",
        stroke: "rgb(85, 85, 85)"
      },
      preRect: {show: false},
      stateIcon: {show: false},
      logoIcon: {show: false}
    },
    defaultEdge: {
      shape: "cubic",
      style: {
        opacity: 0.6,
        stroke: "rgb(85, 85, 85)",
        lineWidth: 1
      },
      labelCfg: {
        autoRotate: true
      }
    }
  })

  graph.on("node:mouseenter", (e:any) => {
    const nodeItem = e.item;
    graph.setItemState(nodeItem, "hover", true);
  })

  graph.on("node:mouseleave", (e:any) => {
    const nodeItem = e.item;
    graph.setItemState(nodeItem, "hover", false);
  })

  graph.on("node:click", (e:any) => {
    const clickNodes = graph.findAllByState("node", "click");
    clickNodes.forEach((node:any) => {
      graph.setItemState(node, "click", false);
    })
    graph.setItemState(e.item, "click", true);
  })

  const main = async () => {
    const rep = await fetch('https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',)
    const remoteData = await rep.json();
    console.log(remoteData);
    const {nodes, edges} = remoteData;
    nodes.forEach((node:{[index:string]:any}) => {
      node.description = "description"
    //   if (!node.style) node.style = {};
      // switch (node.class) {
      //   case "c0":
      //     node.type = "circle";
      //     break;
      //   case "c1":
      //     node.type = "rect";
      //     node.size = [35, 20];
      //     break
      //   case "c2":
      //     node.type = "ellipse";
      //     node.size = [35, 20];
      //     break
      // }
    })

    // edges.forEach((edge:{[index:string]:any}) => {
    //   if (!edge.style) edge.style = {};
    //   edge.style.lineWidth = edge.weight;
    //   edge.style.opacity = 0.6;
    //   edge.style.stroke = "grey"
    // })
    graph.data(remoteData);
    graph.render();
  }
  main();

  return (
    <div id="root">
      
    </div>
  )
}

export default G6component;