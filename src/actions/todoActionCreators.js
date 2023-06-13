import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO } from "./todoActionTypes";

export const addTodo = (todoToAdd) => {
    return {
    type: ADD_TODO,
        payload: todoToAdd,}
};