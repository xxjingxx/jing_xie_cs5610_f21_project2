import React from 'react'
import Board from './Board'
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useMatch} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

//import createHistory from 'history/createBrowserHistory'


// function componentDidMount() {
//     const history = createHistory();
//     if (history.location.state && history.location.state.transaction) {
//         let state = { ...history.location.state };
//         delete state.transaction;
//         history.replace({ ...history.location, state });
//     }
// }

function GameOptions() {
    // let {path, url} = useMatch();
    // const options = getOptions();
    // const { userID, id } = useParams();
    const dispatch = useDispatch();
    return (
        <div>
        {/* <Router>
         <button><Link to={`${url}/free`}>Free mode</Link></button>
         <button><Link to={`${url}/ai`}>AI mode</Link></button>
         
            <Routes>
             <Route exact path={path} />
             <Route path={`${path}/:mode`}/>
           </Routes> 
         </Router> */}
         
         <h2>Options</h2>
         <ul>
             <li><button><Link to="/gameOptions/Free">Free mode</Link></button></li>
             <li><button><Link to="/gameOptions/AI">AI mode</Link></button></li>
             {/* {options.map(({mode, id})=>(<li key={id}><Link to={id}>{mode}</Link></li>))} */}
         </ul>
         <hr />
         <Outlet />
        </div>
    )
}

export default GameOptions