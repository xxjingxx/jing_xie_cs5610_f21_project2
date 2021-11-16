import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function GameOptions () {
  return (
    <div>
      <h2>Select an option to start!</h2>
      <ul>
        <li>
          <button>
            <Link to='/gameOptions/Free'>Free mode</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to='/gameOptions/AI'>AI mode</Link>
          </button>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

export default GameOptions
