import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BTN, ENABLE_BTN } from './types';

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const asyncIncr = () => {
    return function(dispatch) {
        dispatch(disableBtn())
        setTimeout( ()=>{
            dispatch(increment())
            dispatch(enableBtn())
        }, 1500)
    }
}

export const disableBtn = () =>( {
    type: DISABLE_BTN
})

export const enableBtn = () =>( {
    type: ENABLE_BTN
})

export const changeTheme = () => ({
    type: CHANGE_THEME
})