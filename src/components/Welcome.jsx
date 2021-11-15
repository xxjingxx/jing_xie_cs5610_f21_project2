import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

export default function Welcome () {

    //const boardState = useSelector((state) => state.game)
    // const dispatch = useDispatch();
    // const gameType = useParams().gameType;

  return (
    <div class='WelcomePage'>
      {/* <button>
               <Link to={"/gameBoard"}>start game</Link> 

            </button> */}

      {/* <button onClick={()=>dispatch({
          type: 'CREATE_GAME_BOARD',
          gameType: gameType

      })}>
        <Link to={'/gameBoard/Free'}>Start free mode </Link>
      </button>

      <button>
        <Link to={'/gameBoard/AI'}>Start AI mode </Link>
      </button> */}
      {/* <button>
          <Link to={'/gameBoard'}>
          Options</Link></button> */}
    </div>
  )
}
