import {
  ActionTypes,
  ADD_TODO,
  Todo,
  TOGGLE_TODO
} from './Actions'
import {Reducer} from 'redux';

export type State = {
  todos: Todo[]
}

const initialState: State = {
  todos: []
};

const reducer: Reducer<State, ActionTypes> = (state: State|undefined, action: ActionTypes) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      });
    default:
      return state
  }
};

export default reducer