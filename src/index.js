import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import Welcome from './components/Welcome'
import Rules from './components/Rules'
import GameOptions from './components/GameOptions'
import reducers from './reducers/reducers.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <h1>Jing's Battleship field</h1>
    <Router>
      <button>
        <Link to={'/'}>Home </Link>
      </button>

      <button>
        <Link to={'/rules'}>How to play </Link>
      </button>

      <button>
        <Link to={'/gameOptions'}>Start game </Link>
      </button>

      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/rules' element={<Rules />} />
        <Route path='/gameOptions' element={<GameOptions />}>
          <Route path=':mode' element={<Board />} />
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
)
