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
  aiTurn: false
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

function clearAllBoards () {
  clearBoard(globalState.computerState)
  clearBoard(globalState.humanState)
}

//   function resetShips () {
//     for (let i = 0; i < st.shipList.length; i++) {
//       st.shipList[i].size = st.shipList[i].locations.length
//     }
//   }

function resetShips (board) {
  for (let i = 0; i < board.shipList.length; i++) {
    board.shipList[i].size = board.shipList[i].locations.length
  }
}

function generateRandomBoard (board) {
  clearBoard(board)
  resetShips(board)
  board.shipList[0].locations = [
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4]
  ]
  board.shipList[1].locations = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3]
  ]
  board.shipList[2].locations = [
    [2, 0],
    [2, 1],
    [2, 2]
  ]
  board.shipList[3].locations = [
    [1, 0],
    [1, 1],
    [1, 2]
  ]
  board.shipList[4].locations = [
    [0, 0],
    [0, 1]
  ]
  return board
}

function checkWin(x, y, board) {
    for (let i = 0; i < board.shipList.length; i++) {
        for (let j = 0; j < board.shipList[i].locations.length;j++) {
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
                  for (
                    let k = 0;
                    k < board.shipList[i].locations.length;
                    k++
                  ) {
                    board.boardState[
                        board.shipList[i].locations[k][0]
                    ][board.shipList[i].locations[k][1]] = '🛳'
                  }
                  if (board.num_of_ships == 0) {
                      if (board === globalState.computerState) {
                          globalState.computerState.hasWon = true
                        console.log('You win!')
                      } else if (board === globalState.humanState) {
                          globalState.computerState.hasWon = true
                          console.log("AI win!")
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

function generateRandomMove(board) {
    var rand = -1
    var x = -1
    var y = -1

    while(true) {
        rand = Math.floor(Math.random() * 100)
        x = Math.floor(rand / 10)
        y = Math.floor(rand % 10)
        if (board.isCheckedState[x][y] === false) {
            break
        }
    }
    console.log(rand)
    console.log(x)
    console.log(y)
    // if (globalState.aiTurn === true) {
        checkWin(x, y, board)
        // globalState.aiTurn = false
    // }
    
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
          return {...state}
      }
    if (action.boardType === 'computer') {
      if (state.computerState.isCheckedState[action.x][action.y] === false) {
          checkWin(action.x, action.y, state.computerState)
        //   state.aiTurn = true
        generateRandomMove(state.humanState)

        //   return {...state}
      }
      // computer move
      //setTimeout(()=>{checkWin(5, 5, state.humanState), 1000})
      //checkWin(5, 5, state.humanState)
      //if (state.aiTurn === true) {
          //generateRandomMove(state.humanState)
        //  return {...state}
      //}
      
      return {...state}
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

  // if (
  //   action.type === 'boardClick' &&
  //   state.isCheckedState[action.x][action.y] === false
  // ) {
  //   for (let i = 0; i < state.shipList.length; i++) {
  //     for (let j = 0; j < state.shipList[i].locations.length; j++) {
  //       if (
  //         action.x === state.shipList[i].locations[j][0] &&
  //         action.y === state.shipList[i].locations[j][1]
  //       ) {
  //         console.log('Hit')
  //         state.boardState[action.x][action.y] = '✅'
  //         state.isCheckedState[action.x][action.y] = true
  //         state.shipList[i].size -= 1
  //         if (state.shipList[i].size === 0) {
  //           console.log('You sunk a ship')
  //           state.num_of_ships = state.num_of_ships - 1
  //           for (let k = 0; k < state.shipList[i].locations.length; k++) {
  //             state.boardState[state.shipList[i].locations[k][0]][
  //               state.shipList[i].locations[k][1]
  //             ] = '🛳'
  //           }
  //           if (state.num_of_ships == 0) {
  //             console.log('You win!')
  //           }
  //           return { ...state }
  //         }
  //         return { ...state }
  //       } else if (
  //         action.x !== state.shipList[i].locations[j][0] &&
  //         action.y !== state.shipList[i].locations[j][1]
  //       ) {
  //         state.boardState[action.x][action.y] = '❌'
  //         state.isCheckedState[action.x][action.y] = true
  //         console.log('Missed')
  //       }
  //     }
  //   }
  //   return { ...state }
  // }

  if (action.type === 'NEW_GAME') {
    generateRandomBoard(globalState.computerState)
    generateRandomBoard(globalState.humanState)
    globalState.computerState.hasWon = false
    globalState.humanState.hasWon = false
    return { ...state }
  }
  return state
}
