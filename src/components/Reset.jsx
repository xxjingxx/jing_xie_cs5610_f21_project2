import React from 'react'
import { useDispatch } from 'react-redux'

export default function Reset (props) {
  const { text, mode } = props
  const dispatch = useDispatch()
  return (
    <span>
      <button
        onClick={() =>
          dispatch({
            type: 'NEW_GAME',
            mode: mode
          })
        }
      >
        {text}
      </button>
    </span>
  )
}
