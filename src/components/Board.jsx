import React from 'react';
import '../style/Board.css'
import FreeMode from './FreeMode';
import Reset from './Reset';
import { Square } from "./Square"
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
//import { Link } from 'react-router-dom';

// const globalState = {
//     computerState,
//     humanState
// }
export default function Board() {
    // document.addEventListener('DOMContenLoaded', ()=> {
    //     const ship1 = document.querySelector('grid-user')
    // })

    // const clickCount = useSelector((state) => state.clickCount)
    //const computerBoardState = useSelector((state) => state.computer)
    //const humanBoardState = useSelector((state) => state.human)
    const gameState = useSelector((state) => state.game)
    // const gameType = useParams().gameType;
    const { mode } = useParams();

    function findColor(boardType, i, j, state) {
        if (boardType === "computer") {
            if (state.isHoveredState[i][j] === true) {
                return "hover"
            }
            return "defaultColor"
        } else if (boardType === "human") {
            if (state.isHoveredState[i][j] === true) {
                return "hover"
            }
            for (let a = 0; a < state.shipList.length; a++) {
                for (let b = 0; b < gameState.humanState.shipList[a].locations.length; b++) {
                    if (gameState.humanState.shipList[a].locations[b][0] === i && 
                        gameState.humanState.shipList[a].locations[b][1] === j) {
                            return gameState.humanState.shipList[a].shipName
                        }
                }
            }
        }
    
        // for (let a = 0; a < computerBoardState.shipList.length; a++) {
        //     for (let b = 0; b < computerBoardState.shipList[a].locations.length; b++) {
        //         if (computerBoardState.shipList[a].locations[b][0] === i && 
        //             computerBoardState.shipList[a].locations[b][1] === j) {
        //                 return computerBoardState.shipList[a].shipName
        //             }
        //     }
        // }
        return "defaultColor"
    }

    // const boardComponent = [];
    function generateBoardComponent(boardType, state) {
        const boardComponent = [];
        for (let i = 0; i < state.boardState.length; i++) {
            let row = state.boardState[i];
            for (let j = 0; j < row.length; j++) {
                boardComponent.push((<Square symbol={state.boardState[i][j]} x={i} y={j} color={findColor(boardType, i, j, state)} boardType={boardType}/>))
            }
        }
        return boardComponent
    }

    // function generateBoardComponent(mode) {
    //     const boardComponent = [];
    //     if (mode === "Free") {
    //         for (let i = 0; i < computerBoardState.boardState.length; i++) {
    //             let row = computerBoardState.boardState[i];
    //             for (let j = 0; j < row.length; j++) {
    //                 boardComponent.push((<Square symbol={computerBoardState.boardState[i][j]} x={i} y={j} color={findColor(i, j)}/>))
    //             }
    //         }
    //     } else if (mode === "AI") {
    //         for (let i = 0; i < computerBoardState.boardState.length; i++) {
    //             let row = computerBoardState.boardState[i];
    //             for (let j = 0; j < row.length; j++) {
    //                 boardComponent.push((<Square symbol={computerBoardState.boardState[i][j]} x={i} y={j} color={findColor(i, j)}/>))
    //             }
    //         }
    //     }
    //     return boardComponent
    // }
    

    // for (let i = 0; i < computerBoardState.computerBoardState.length; i++) {
    //     let row = computerBoardState.computerBoardState[i];
    //     for (let j = 0; j < row.length; j++) {
    //         boardComponent.push((<Square symbol={computerBoardState.computerBoardState[i][j]} x={i} y={j} color={findShip(i, j)}/>))
    //     }
    // }

    // const dispatch = useDispatch()

    if (mode === "Free") {
        return (
                <div>
                <h3>You are in {mode} mode </h3>
                <Reset text="New Game" />
                <div class="Board">
                    {generateBoardComponent("computer", gameState.computerState)}
                </div>
                
        </div> 
        )
    } else if (mode === "AI") {
        return (
            <div>
            <h3>You are in {mode} mode</h3>
            <Reset text="New Game" />
            <div class="Container">
                <div class="Board">
                {generateBoardComponent("computer", gameState.computerState)}
                </div>
                <div class="Board">
                {generateBoardComponent("human", gameState.humanState)}
                </div>
            </div>
    </div> 
    )
    }
    return (
        <div></div>
    )
    
}