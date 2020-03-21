import {Inode} from '../types/node';
const nodes:Inode[] = [
  {
    _id: "001",
    title: "variable",
    label: "what is variable?",
    description: "",
    score: 65,
    finished: false,
    dependences: {}
  },
  {
    _id: "002",
    title: "If statement",
    label: "if else",
    description: "",
    score: 70,
    finished: true,
    dependences: {
      "variable": "001",
      "compute": "003"
    }
  },
  {
    _id: "003",
    title: "compute",
    label: "plus minus",
    description: "",
    score: 80,
    finished: true,
    dependences: {
      "variable": "001"
    }
  },
  {
    _id: "004",
    title: "while statement",
    label: "while loop",
    description: "",
    score: 90,
    finished: false,
    dependences: {
      "If statement": "003"
    }
  },
]

export default {
  data: nodes
}