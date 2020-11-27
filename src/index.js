//import { createStore } from './createStore'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, changeTheme, asyncIncr } from './redux/actions';
import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const del = document.getElementById('sub')
const async = document.getElementById('async')
const theme = document.getElementById('theme')

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

add.addEventListener('click', () => {
    store.dispatch(increment())
})

del.addEventListener('click', () => {
    store.dispatch(decrement())
})

async.addEventListener('click', () => {
    store.dispatch(asyncIncr())
})

theme.addEventListener('click', () => {
    store.dispatch(changeTheme())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value;

    [add, del, theme, async].forEach((btn) => {
        btn.disabled = state.theme.disabled
    })
})

store.dispatch({ type: 'INIT' })