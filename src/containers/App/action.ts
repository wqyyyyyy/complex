import {UPDATE_AGE, UPDATE_NAME} from './types';

export const updateAgeAction = (age:number) => ({
  type: UPDATE_AGE,
  payload: age
})

export const updateNameAction = (name:string) => ({
  type: UPDATE_NAME,
  payload: name
})
