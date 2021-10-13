import { TAREFAS } from '../actions/actionTypes';


const initialState = {
    tarefas:[
        {
            id:1,
            dataEntrega:"26/07/2021",
            titulo:"ArenaCol",
            descricao:"Fazer altyeração relativas ao termo de aceite de remuneração"
        },
        {
            id:2,
            dataEntrega:"28/07/2021",
            titulo:"Django",
            descricao:"Fazer melhorias na estrutura do projeto django"
        }
        
    ]
};

export const tarefas = (state = initialState, action) => {
    console.log("action.tarefas", action.tarefas)
  switch (action.type) {
    case TAREFAS:
      return {
        ...state,
        tarefas: action.tarefas,
      };
    default:
      return state;
  }
};