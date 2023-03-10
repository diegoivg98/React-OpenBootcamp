import React, { createContext, useReducer } from "react";

/* Creating a context object. */
export const TaskContext = createContext();

/* A constant that is used to identify the action type. */
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const FILTER_TASK = "FILTER_TASK";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        filteredTasks: state.filteredTasks.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    case FILTER_TASK:
      const filteredTasks = state.tasks.filter((task) =>
        task.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filteredTasks };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filteredTasks: [],
  });

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const removeTask = (task) => {
    dispatch({ type: REMOVE_TASK, payload: task });
  };

  const filterTask = (query) => {
    dispatch({ type: FILTER_TASK, payload: query });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.filteredTasks.length ? state.filteredTasks : state.tasks,
        addTask,
        removeTask,
        filterTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
