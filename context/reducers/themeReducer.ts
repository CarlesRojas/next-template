import { CHANGE_ACCENT_COLOR, SWITCH_TO_DARK_MODE, SWITCH_TO_LIGHT_MODE } from "../types";

const initialState = {
    users: [],
    loading: true,
};

export default function themeReducer(state = initialState, action: any) {
    switch (action.type) {
        case SWITCH_TO_DARK_MODE:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case SWITCH_TO_LIGHT_MODE:
            return {
                loading: false,
                error: action.payload,
            };
        case CHANGE_ACCENT_COLOR:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
