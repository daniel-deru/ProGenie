import { Dispatch } from "redux"
import { RunButton } from "../redusers/codeReduser"

export const runCode = (code: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: RunButton.CLICKED,
            payload: code
        })
    }
}