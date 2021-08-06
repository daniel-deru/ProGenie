import { createStore, applyMiddleware } from "redux";
import redusers from "./redusers/mainReduser"
import thunk from "redux-thunk"

export const store = createStore(
    redusers,
    {},
    applyMiddleware(thunk)
)

export * as runActionCreator from "./actions/runActions"

