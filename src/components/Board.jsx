import React from 'react'
import '../style/Board.css'
import FreeMode from './FreeMode'
import Reset from './Reset'
import { Square } from './Square'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
//import { Link } from 'react-router-dom';

function useMediaQuery () {
  const [screenSize, setScreenSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateScreenSize () {
      setScreenSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateScreenSize)
    updateScreenSize()
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}

export default function Board () {
  const gameState = useSelector(state => state.game)
  const { mode } = useParams()
  const [width] = useMediaQuery()

  function displayWinner () {
    if (gameState.humanState.hasWon === true) {
        return <span>AI win!</span>
    } else if (gameState.computerState.hasWon === true) {
        return <span>You wins!</span>
    }
}

  function findColor (boardType, i, j, state) {
    if (state.boardState[i][j] === '✅') {
      return 'hit'
    } else if (state.boardState[i][j] === '❌') {
      return 'miss'
    }
    if (state.isHoveredState[i][j] === true) {
      return 'hover'
    }
    if (boardType === 'computer') {
      for (let a = 0; a < state.shipList.length; a++) {
        for (
          let b = 0;
          b < gameState.humanState.shipList[a].locations.length;
          b++
        ) {
          if (
            gameState.computerState.shipList[a].locations[b][0] === i &&
            gameState.computerState.shipList[a].locations[b][1] === j &&
            gameState.computerState.shipList[a].size === 0
          ) {
            return gameState.computerState.shipList[a].shipName
          }
        }
      }
    } else if (boardType === 'human') {
      for (let a = 0; a < state.shipList.length; a++) {
        for (
          let b = 0;
          b < gameState.humanState.shipList[a].locations.length;
          b++
        ) {
          if (
            gameState.humanState.shipList[a].locations[b][0] === i &&
            gameState.humanState.shipList[a].locations[b][1] === j
          ) {
            return gameState.humanState.shipList[a].shipName
          }
        }
      }
    }
    return 'defaultColor'
  }

  function generateBoardComponent (boardType, state) {
    const boardComponent = []
    for (let i = 0; i < state.boardState.length; i++) {
      let row = state.boardState[i]
      for (let j = 0; j < row.length; j++) {
        boardComponent.push(
          <Square
            symbol={state.boardState[i][j]}
            x={i}
            y={j}
            color={findColor(boardType, i, j, state)}
            boardType={boardType}
          />
        )
      }
    }
    return boardComponent
  }

  if (mode === 'Free') {
    return (
      <div>
        <h3>You are in {mode} mode </h3>
        {/* {displayWinner} */}
        <Reset text='New Game'/>
        <div class='Board'>
          {generateBoardComponent('computer', gameState.computerState)}
        </div>
      </div>
    )
  } else if (mode === 'AI') {
    return width > 600 ? (
      <div>
        <h3>You are in {mode} mode</h3>
        <Reset text='New Game'/>
        <div class='Container'>
          <div class='Board'>
            {generateBoardComponent('computer', gameState.computerState)}
          </div>
          <div class='Board'>
            {generateBoardComponent('human', gameState.humanState)}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <h3>You are in {mode} mode</h3>
        {/* <span>{`${gameState.winner}`}</span> */}
        <Reset text='New Game'/>
        <div class='MobileContainer'>
          <div class='Board'>
            {generateBoardComponent('computer', gameState.computerState)}
          </div>
          <div class='Board'>
            {generateBoardComponent('human', gameState.humanState)}
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}
