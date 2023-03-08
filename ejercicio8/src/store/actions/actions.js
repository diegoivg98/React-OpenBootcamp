let nextTodoID = 0;

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoID++,
      text,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      filter,
    },
  };
};
