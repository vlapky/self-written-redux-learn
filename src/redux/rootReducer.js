import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BTN, ENABLE_BTN } from './types';

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return ++state
    } else if (action.type === DECREMENT) {
        return --state
    }
    return state
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            const reverseTheme = state.value === 'light' ? 'dark' : 'light'
            return { ...state, value: reverseTheme }
        case ENABLE_BTN:
            return { ...state, disabled: false }
        case DISABLE_BTN:
            return { ...state, disabled: true }
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})