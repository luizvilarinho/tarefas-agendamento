import { CLICK_UPDATE_VALUE, OTHER_UPDATE, TAREFAS } from './actionTypes';


export const clickButton = (value1, value2) => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value1,
  zubumafu:value2
});

export const otherClick = value => ({
    type: OTHER_UPDATE,
    otherValue: value
});

export const tarefas = value => ({
  type: TAREFAS,
  tarefas: value
});