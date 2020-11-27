import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CHANGE_THEME } from './types';

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return ++state
    } else if (action.type === DECREMENT) {
        return --state
    }
    return state
}

const initialThemeState = {
    value: 'light'
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            const reverseTheme = state.value === 'light' ? 'dark' : 'light'
            return { ...state, value: reverseTheme }
            
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})