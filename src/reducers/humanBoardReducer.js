// const ship1 = {
//   shipName: 'ship1',
//   size: 2,
//   locations: [
//     [-1, -1],
//     [-1, -1]
//   ]
// }

// const ship2 = {
//   shipName: 'ship2',
//   size: 3,
//   locations: [
//     [-1, -1],
//     [-1, -1],
//     [-1, -1]
//   ]
// }

// const ship3 = {
//   shipName: 'ship3',
//   size: 3,
//   locations: [
//     [-1, -1],
//     [-1, -1],
//     [-1, -1]
//   ]
// }

// const ship4 = {
//   shipName: 'ship4',
//   size: 4,
//   locations: [
//     [-1, -1],
//     [-1, -1],
//     [-1, -1],
//     [-1, -1]
//   ]
// }

// const ship5 = {
//   shipName: 'ship5',
//   size: 5,
//   locations: [
//     [-1, -1],
//     [-1, -1],
//     [-1, -1],
//     [-1, -1],
//     [-1, -1]
//   ]
// }
// const num_of_ships = 5

// const st = {
//   boardState: [
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', '', '', '']
//   ],
//   isCheckedState: [
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false]
//   ],
//   isHoveredState: [
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false],
//     [false, false, false, false, false, false, false, false, false, false]
//   ],

//   num_of_ships: num_of_ships,
//   shipList: [ship5, ship4, ship3, ship2, ship1]
// }

// function clearBoard () {
//   for (let i = 0; i < st.boardState.length; i++) {
//     for (let j = 0; j < st.boardState[i].length; j++) {
//       st.boardState[i][j] = ''
//     }
//   }
//   for (let i = 0; i < st.isCheckedState.length; i++) {
//     for (let j = 0; j < st.isCheckedState[i].length; j++) {
//       st.isCheckedState[i][j] = false
//     }
//   }
// }

// function resetShips () {
//   for (let i = 0; i < st.shipList.length; i++) {
//     st.shipList[i].size = st.shipList[i].locations.length
//   }
// }

// function generateRandomBoard () {
//   clearBoard()
//   resetShips()
//   st.shipList[0].locations = [
//     [4, 0],
//     [4, 1],
//     [4, 2],
//     [4, 3],
//     [4, 4]
//   ]
//   st.shipList[1].locations = [
//     [3, 0],
//     [3, 1],
//     [3, 2],
//     [3, 3]
//   ]
//   st.shipList[2].locations = [
//     [2, 0],
//     [2, 1],
//     [2, 2]
//   ]
//   st.shipList[3].locations = [
//     [1, 0],
//     [1, 1],
//     [1, 2]
//   ]
//   st.shipList[4].locations = [
//     [0, 0],
//     [0, 1]
//   ]
//   return st
// }

// export default function computerBoardReducer (state, action) {
//   if (state === undefined) {
//     state = generateRandomBoard()
//     return state
//   }

//   if (action.type === 'mouseEnter') {
//     state.isHoveredState[action.x][action.y] = true
//     return { ...state }
//   }

//   if (action.type === 'mouseLeave') {
//     state.isHoveredState[action.x][action.y] = false
//     return { ...state }
//   }

//   if (
//     action.type === 'boardClick' &&
//     state.isCheckedState[action.x][action.y] === false
//   ) {
//     for (let i = 0; i < state.shipList.length; i++) {
//       for (let j = 0; j < state.shipList[i].locations.length; j++) {
//         if (
//           action.x === state.shipList[i].locations[j][0] &&
//           action.y === state.shipList[i].locations[j][1]
//         ) {
//           console.log('Hit')
//           state.boardState[action.x][action.y] = '✅'
//           state.isCheckedState[action.x][action.y] = true
//           state.shipList[i].size -= 1
//           if (state.shipList[i].size === 0) {
//             console.log('You sunk a ship')
//             state.num_of_ships = state.num_of_ships - 1
//             for (let k = 0; k < state.shipList[i].locations.length; k++) {
//               state.boardState[state.shipList[i].locations[k][0]][
//                 state.shipList[i].locations[k][1]
//               ] = '🛳'
//             }
//             if (state.num_of_ships == 0) {
//               console.log('You win!')
//             }
//             return { ...state }
//           }
//           return { ...state }
//         } else if (
//           action.x !== state.shipList[i].locations[j][0] &&
//           action.y !== state.shipList[i].locations[j][1]
//         ) {
//           state.boardState[action.x][action.y] = '❌'
//           state.isCheckedState[action.x][action.y] = true
//           console.log('Missed')
//         }
//       }
//     }
//     return { ...state }
//   }

//   if (action.type === 'NEW_GAME') {
//     const st = generateRandomBoard()
//     state = st
//     return { ...state }
//   }
//   return state
// }
