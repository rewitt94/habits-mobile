import { SET_TASKS } from "./actions";

const initialState = {
    loaded: false,
    data: null
}

export function reducer(state = initialState, action) {

    switch (action.type) {

      case SET_TASKS:

        return Object.assign({}, state, {
            habits: action.data,
            loaded: true,
        });

      default:
        return state;

    }

}