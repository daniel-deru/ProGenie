

type Action = {
    type: RunButton.CLICKED,
    payload: string,
}

export enum RunButton {
    CLICKED = "run"
}

const reduser = (state: string = "hello", action: Action) => {
    switch (action.type){
        case RunButton.CLICKED:
            return action.payload
        default:
            return state
    }
}

export default reduser