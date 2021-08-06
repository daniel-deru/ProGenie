import { combineReducers } from "redux";
import codeReduser from "./codeReduser"

const redusers = combineReducers({
    run_button: codeReduser
})

export default redusers

export type State = ReturnType<typeof redusers>