import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../style/Square.css';

export function Square(props) {
    const color = props.color
    const symbol = props.symbol;
    const boardType = props.boardType
    const dispatch = useDispatch();

    // useEffect(() => {
    //     alert(symbol + "just played")
    // }, [symbol])

    return (<div 
        onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
            boardType: boardType,
        }
    )}
    onMouseEnter={() => dispatch(
        {
            type: 'mouseEnter',
            x: props.x,
            y: props.y,
            boardType: boardType,
        }
    )}
    onMouseLeave={() => dispatch(
        {
            type: 'mouseLeave',
            x: props.x,
            y: props.y,
            boardType: boardType,
        }

    )}
    class="square" id={color}>
        {symbol}
    </div>);
}