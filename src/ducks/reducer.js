// Action type constants
const TAB_COLOR = "TAB_COLOR";

// Action creators
export function updateTabColor(color) {
    return {
        type: TAB_COLOR,
        color
    }
}

// initialState
const initialState = {
    color: ""
}

// Reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case TAB_COLOR:
            return Object.assign({}, state, {color: action.color})
        default:
            return state;
    }

}