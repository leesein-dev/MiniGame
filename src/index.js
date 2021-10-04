import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.scss';
import RockScissorPaperGameMain from "./page/rock-scissor-paper-game/RockScissorPaperGameMain";
import RandomDiceGame from "./page/random-dice-game/RandomDiceGame";


function App() {
    return (
        <>
            <Switch>
                <Route exact path={"/"} component={RockScissorPaperGameMain}/>
                <Route path={"/dice"} component={RandomDiceGame}/>
            </Switch>
        </>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
