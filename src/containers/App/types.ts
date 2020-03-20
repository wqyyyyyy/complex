export const UPDATE_NAME = 'APP_TEST';
export const UPDATE_AGE = 'UPDATE_AGE';

export interface Iapp {
  name: string;
  age: number;
}

export interface IupdateNameAction {
  type: typeof UPDATE_NAME;
  payload: string;
}

export interface IupdateAgeAction {
  type: typeof UPDATE_AGE;
  payload: number;
}

export type appActions = 
IupdateNameAction |
IupdateAgeAction;