import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import RockScissorPaperGameMain from "./page/rock-scissor-paper-game/RockScissorPaperGameMain";

function App() {
    return (
        <>
            <RockScissorPaperGameMain/>
        </>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
