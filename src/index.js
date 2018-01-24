import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import SharedNote from './components/SharedNote'
import sharedNote from './reducers'

const store = createStore(sharedNote)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <SharedNote text="bbbb"/>,
  rootEl
)

render()
store.subscribe(render)
