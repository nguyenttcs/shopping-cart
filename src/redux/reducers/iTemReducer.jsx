import {FETCHING, FETCHING_SUCCESS, FETCHING_FAIL} from "../actions/ItemAction";

const initState = {
    listItems: [],
    isLoading: true,
    error: ""
}

export default function iTemAction(state=initState, actions){
    const {type, payload} = actions;
    switch (type) {
        case FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                listItems: payload,
                isLoading: false
            }
        case FETCHING_FAIL:
            return {
                ...state,
                isLoading: false,
                listItems: [],
                error: payload
            }
    
        default:
            return state;
    }
}