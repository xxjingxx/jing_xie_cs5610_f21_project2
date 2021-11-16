// computer board state
const ship1 = {
  shipName: 'ship1',
  size: 2,
  locations: [
    [-1, -1],
    [-1, -1]
  ]
}

const ship2 = {
  shipName: 'ship2',
  size: 3,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship3 = {
  shipName: 'ship3',
  size: 3,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship4 = {
  shipName: 'ship4',
  size: 4,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship5 = {
  shipName: 'ship5',
  size: 5,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}
const num_of_ships = 5

const computerState = {
  boardState: [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ],
  isCheckedState: [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ],
  isHoveredState: [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ],

  num_of_ships: num_of_ships,
  shipList: [ship5, ship4, ship3, ship2, ship1],
  hasWon: false
}

// human board state
const ship1h = {
  shipName: 'ship1',
  size: 2,
  locations: [
    [-1, -1],
    [-1, -1]
  ]
}

const ship2h = {
  shipName: 'ship2',
  size: 3,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship3h = {
  shipName: 'ship3',
  size: 3,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship4h = {
  shipName: 'ship4',
  size: 4,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}

const ship5h = {
  shipName: 'ship5',
  size: 5,
  locations: [
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1]
  ]
}
const num_of_ships_human = 5

const humanState = {
  boardState: [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '']
  ],
  isCheckedState: [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ],
  isHoveredState: [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
  ],

  num_of_ships: num_of_ships_human,
  shipList: [ship5h, ship4h, ship3h, ship2h, ship1h],
  hasWon: false
}

const globalState = {
  computerState,
  humanState,
  winner: '',
  freeMode: false
}

function clearBoard (board) {
  for (let i = 0; i < board.boardState.length; i++) {
    for (let j = 0; j < board.boardState[i].length; j++) {
      board.boardState[i][j] = ''
    }
  }
  for (let i = 0; i < board.isCheckedState.length; i++) {
    for (let j = 0; j < board.isCheckedState[i].length; j++) {
      board.isCheckedState[i][j] = false
    }
  }
}

function resetShips (board) {
  for (let i = 0; i < board.shipList.length; i++) {
    board.shipList[i].size = board.shipList[i].locations.length
  }
  board.num_of_ships = 5
}

function checkWin (x, y, board) {
  for (let i = 0; i < board.shipList.length; i++) {
    for (let j = 0; j < board.shipList[i].locations.length; j++) {
      if (
        x === board.shipList[i].locations[j][0] &&
        y === board.shipList[i].locations[j][1]
      ) {
        console.log('Hit')
        board.boardState[x][y] = '✅'
        board.isCheckedState[x][y] = true
        board.shipList[i].size -= 1
        if (board.shipList[i].size === 0) {
          console.log('You sunk a ship')
          board.num_of_ships -= 1
          for (let k = 0; k < board.shipList[i].locations.length; k++) {
            board.boardState[board.shipList[i].locations[k][0]][
              board.shipList[i].locations[k][1]
            ] = '🛳'
          }
          if (board.num_of_ships === 0) {
            if (board === globalState.computerState) {
              globalState.computerState.hasWon = true
              globalState.winner = globalState.winner + 'You win!'
              console.log('You win!')
              return { ...globalState }
            } else if (board === globalState.humanState) {
              globalState.computerState.hasWon = true
              globalState.winner = 'AI win!'
              console.log('AI win!')
              return { ...globalState }
            }
          }
          return { ...globalState }
        }
        return { ...globalState }
      } else if (
        x !== board.shipList[i].locations[j][0] &&
        y !== board.shipList[i].locations[j][1]
      ) {
        board.boardState[x][y] = '❌'
        board.isCheckedState[x][y] = true
      }
    }
  }
}

function selectDirection () {
  return Math.floor(Math.random() * 2)
}

function checkAvailable (location, board) {
  for (let i = 0; i < board.shipList.length; i++) {
    for (let j = 0; j < board.shipList[i].size; j++) {
      if (
        location[0] === board.shipList[i].locations[j][0] &&
        location[1] === board.shipList[i].locations[j][1]
      ) {
        return false
      }
    }
  }
  return true
}

function placeShip (ship, board) {
  var xIndex = -1
  var yIndex = -1
  var direction = -1
  var yLeftBound = -1
  var xUpperBound = -1
  var succeed = false
  var selectAgain = true

  while (!succeed) {
    if (selectAgain === true) {
      direction = selectDirection()
      // direction = 0
      selectAgain = false
    }
    //direction = 0
    if (direction === 0) {
      // horizontal
      xIndex = Math.floor(Math.random() * 10)
      yLeftBound = Math.floor(Math.random() * (10 - ship.size)) + 1
      for (let i = 0; i < ship.size; i++) {
        if (checkAvailable([xIndex, yLeftBound + i], board) === false) {
          selectAgain = true
          break
        }
      }
      if (selectAgain === false) {
        for (let i = 0; i < ship.size; i++) {
          ship.locations[i][0] = xIndex
          ship.locations[i][1] = yLeftBound + i
        }
        succeed = true
      }
    } else if (direction === 1) {
      // vertical
      yIndex = Math.floor(Math.random() * 10)
      xUpperBound = Math.floor(Math.random() * (10 - ship.size)) + 1
      for (let i = 0; i < ship.size; i++) {
        if (checkAvailable([xUpperBound + i, yIndex], board) === false) {
          selectAgain = true
          break
        }
      }
      if (selectAgain === false) {
        for (let i = 0; i < ship.size; i++) {
          ship.locations[i][0] = xUpperBound + i
          ship.locations[i][1] = yIndex
        }
        succeed = true
      }
    }
  }
}

function generateRandomBoard (board) {
  clearBoard(board)
  resetShips(board)
  for (let i = 0; i < board.shipList.length; i++) {
    placeShip(board.shipList[i], board)
  }
  return board
}

function generateRandomMove (board) {
  var rand = -1
  var x = -1
  var y = -1

  while (true) {
    rand = Math.floor(Math.random() * 100)
    x = Math.floor(rand / 10)
    y = Math.floor(rand % 10)
    if (board.isCheckedState[x][y] === false) {
      break
    }
  }
  checkWin(x, y, board)
}

export default function gameReducer (state, action) {
  if (state === undefined) {
    generateRandomBoard(globalState.computerState)
    generateRandomBoard(globalState.humanState)
    state = globalState
    return state
  }

  if (action.type === 'boardClick') {
    if (state.computerState.hasWon || state.humanState.hasWon) {
      return { ...state }
    }
    if (action.boardType === 'computer') {
      if (state.computerState.isCheckedState[action.x][action.y] === false) {
        checkWin(action.x, action.y, state.computerState)
        if (state.freeMode === false) {
          generateRandomMove(state.humanState)
        }
      }
      // computer move
      //setTimeout(()=>{checkWin(5, 5, state.humanState), 1000})
      //checkWin(5, 5, state.humanState)
      //if (state.aiTurn === true) {
      //generateRandomMove(state.humanState)
      //  return {...state}
      //}

      return { ...state }
    }
    return { ...state }
  }

  if (action.type === 'mouseEnter') {
    if (action.boardType === 'computer') {
      state.computerState.isHoveredState[action.x][action.y] = true
      return { ...state }
    } else if (action.boardType === 'human') {
      state.humanState.isHoveredState[action.x][action.y] = true
      return { ...state }
    }
  }

  if (action.type === 'mouseLeave') {
    if (action.boardType === 'computer') {
      state.computerState.isHoveredState[action.x][action.y] = false
      return { ...state }
    } else if (action.boardType === 'human') {
      state.humanState.isHoveredState[action.x][action.y] = false
      return { ...state }
    }
  }

  if (action.type === 'NEW_GAME') {
    if (action.mode === 'Free') {
      generateRandomBoard(state.computerState)
      generateRandomBoard(state.humanState)
      state.computerState.hasWon = false
      state.humanState.hasWon = false
      state.freeMode = true
      return { ...state }
    } else if (action.mode === 'AI') {
      generateRandomBoard(state.computerState)
      generateRandomBoard(state.humanState)
      state.computerState.hasWon = false
      state.humanState.hasWon = false
      state.freeMode = false
      return { ...state }
    }
  }
  return state
}
