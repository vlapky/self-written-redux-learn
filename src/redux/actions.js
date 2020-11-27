import { INCREMENT, DECREMENT, CHANGE_THEME } from './types';

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const asyncIncr = () => {
    return function(dispatch) {
        setTimeout( ()=>{
            dispatch(increment())
        }, 1500)
    }
}

export const changeTheme = () => ({
    type: CHANGE_THEME
})