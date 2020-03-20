export interface Idependences {
  [index:string]:string;
}

export interface Inode {
  _id: string;
  vision?: string;
  label: string;
  description: string;
  dependences: Idependences;
  score: number;
  finished: boolean;
}

/**
 * 暂定
 */
export interface Icontent {
  _id: string;
  demind: string;
  skill: string;
  practices: string;
  conclusion: string;
}
