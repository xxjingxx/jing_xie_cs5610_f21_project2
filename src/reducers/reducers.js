import { combineReducers } from 'redux'
import clickReducer from './clickReducer'
import computerBoardReducer from './computerBoardReducer'
import humanBoardReducer from './humanBoardReducer'
import gameReducer from './gameReducer'
//import shipReducer from './shipReducer'

export default combineReducers({
 
  game: gameReducer

  // clickCount: clickReducer
  // ship: shipReducer
})
 // computer: computerBoardReducer,
  // human: humanBoardReducer,