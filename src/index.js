//import { createStore } from './createStore'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, changeTheme } from './redux/actions';
import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const del = document.getElementById('sub')
const async = document.getElementById('async')
const theme = document.getElementById('theme')

//middleware
// function logger(state) {
//     return function(next){
//         return function(action) {
//             console.log('prev state', state.getState())
//             console.log('action', action)
//             const newState = next(action)
//             console.log('new state', newState)
//             return newState
//         }
//     }
// }

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

add.addEventListener('click', ()=>{
    store.dispatch(increment())
})

del.addEventListener('click', ()=>{
    store.dispatch(decrement())
})

async.addEventListener('click', ()=>{
    setTimeout(()=>{
        store.dispatch(increment())
    }, 2000)
})

theme.addEventListener('click', ()=>{
    store.dispatch(changeTheme())
})

store.subscribe( ()=> {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
})

store.dispatch({type:'INIT'})