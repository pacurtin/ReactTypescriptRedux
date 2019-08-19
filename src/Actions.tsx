/*
 * action constants
 */

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';

/*
 * action types
 */

export type Todo = {
  text: string,
  completed: boolean
}

type AddTodoAction = {
  type: typeof ADD_TODO
  text: string
}

type ToggleTodoAction = {
  type: typeof TOGGLE_TODO
  index: number
}

export type ActionTypes =  AddTodoAction | ToggleTodoAction

/*
 * action creators
 */

// TypeScript infers that this function is returning SendMessageAction
export function addTodo(text: string): ActionTypes {
  return {
    type: ADD_TODO,
    text: text
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function toggleTodo(index: number): ActionTypes {
  return {
    type: TOGGLE_TODO,
    index: index
  }
}