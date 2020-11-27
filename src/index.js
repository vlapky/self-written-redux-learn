//import { createStore } from './createStore'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement } from './redux/actions';
import './styles.css'

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const del = document.getElementById('sub')
const async = document.getElementById('async')
const theme = document.getElementById('theme')

const store = createStore(rootReducer, 0)

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

})

store.subscribe( ()=> {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type:'INIT'})