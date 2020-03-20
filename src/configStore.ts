import {createStore} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const configStore = (initialState:{[index:string]:any}) => {
  const store = createStore(
    rootReducer(),
    initialState,
    composeWithDevTools()
    );
  return store
} 
export default configStore;