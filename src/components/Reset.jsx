import React from 'react'
import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router'

export default function Reset (props) {
  const text = props.text
//   const { mode } = 
//   const {mode} = props.mode
  const dispatch = useDispatch()
  return (
    <span>
      <button
        onClick={() =>
          dispatch({
            type: 'NEW_GAME',
            // mode: mode
          })
        }
      >
        {text}
      </button>
    </span>
  )
}
