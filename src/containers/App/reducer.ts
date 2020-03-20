import {UPDATE_AGE, UPDATE_NAME, Iapp, appActions} from './types';
import {produce} from 'immer';
const initialState:Iapp = {
  name: "",
  age: 0
}

const appReducer = (state=initialState, action:appActions) => (
    produce(state, draft => {
      switch(action.type) {
        case UPDATE_AGE:
          draft.age = action.payload;
          break;
        case UPDATE_NAME:
          draft.name = action.payload;
          break;
      }
    })
)

export default appReducer;
