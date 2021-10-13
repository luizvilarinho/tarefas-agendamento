import { clickReducer } from './clickReducer';
import {otherReducer} from './otherReducer';
import {tarefas} from './tarefas';
import { combineReducers } from 'redux';


export const Reducers = combineReducers({
  clickState: clickReducer,
  otherState: otherReducer,
  tarefas:tarefas
});