import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer,
        userState: userReducer
    }
)