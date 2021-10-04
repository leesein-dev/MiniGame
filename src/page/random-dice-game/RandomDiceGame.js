import './RandomDiceGame.scss';
import logo from '../../image/random-dice/logo.png';
import blue1 from '../../image/random-dice/dice-blue-1.svg';
import blue2 from '../../image/random-dice/dice-blue-2.svg';
import blue3 from '../../image/random-dice/dice-blue-3.svg';
import blue4 from '../../image/random-dice/dice-blue-4.svg';
import blue5 from '../../image/random-dice/dice-blue-5.svg';
import blue6 from '../../image/random-dice/dice-blue-6.svg';
import red1 from '../../image/random-dice/dice-red-1.svg';
import red2 from '../../image/random-dice/dice-red-2.svg';
import red3 from '../../image/random-dice/dice-red-3.svg';
import red4 from '../../image/random-dice/dice-red-4.svg';
import red5 from '../../image/random-dice/dice-red-5.svg';
import red6 from '../../image/random-dice/dice-red-6.svg';
import {useState} from "react";

function RandomDiceGame() {

    const MY_DICE = '나';
    const OTHER_DICE = '상대';

    let myDiceList = [blue1, blue2, blue3, blue4, blue5, blue6];
    let otherDiceList = [red1, red2, red3, red4, red5, red6];

    let [myDice, setMyDice] = useState(myDiceList[0]);
    let [otherDice, setOtherDice] = useState(otherDiceList[0]);

    let [myDiceScore, setMyDiceScore] = useState(0);
    let [otherDiceScore, setOtherDiceScore] = useState(0);

    let [myDiceRecord, setMyDiceRecord] = useState('');
    let [otherDiceRecord, setOtherDiceRecord] = useState('');

    return(
        <div id={"dice-background"}>
            <div id={"title-area"}>
                <img src={logo} alt={"로고"}/>
                <p>주사위 게임</p>
            </div>
            <div id={"play-area"}>
                <button>던지기</button>
                <button>처음부터</button>
            </div>
            <div id={"result-area"}>
                <DiceResult
                    image={myDice}
                    who={MY_DICE}
                    score={myDiceScore}
                    record={myDiceRecord}/>
                <DiceResult
                    image={otherDice}
                    who={OTHER_DICE}
                    score={otherDiceScore}
                    record={otherDiceRecord}/>
            </div>
        </div>
    );
}

function DiceResult(props) {
    return(
        <div>
            <div>
                <p>{props.who}</p>
                <img src={props.image} alt={`${props.who} 주사위`}/>
            </div>
            <div>
                <p>총점</p>
                <p className={"dice-result-text"}>{props.score}</p>
            </div>
            <div>
                <p>기록</p>
                <p className={"dice-result-text"}>{props.record}</p>
            </div>
        </div>
    )
}


export default RandomDiceGame;