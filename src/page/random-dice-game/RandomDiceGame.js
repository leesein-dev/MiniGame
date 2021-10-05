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

    const DICE_GAME_START = () => {

        const MY_RANDOM_DICE = Math.floor(Math.random() * (6 - 0)) + 0;
        let OTHER_RANDOM_DICE = Math.floor(Math.random() * (6 - 0)) + 0;
        for (;MY_RANDOM_DICE === OTHER_RANDOM_DICE;) {
            OTHER_RANDOM_DICE = Math.floor(Math.random() * (6 - 0)) + 0;
        }
        setMyDice(myDiceList[MY_RANDOM_DICE]);
        setOtherDice(otherDiceList[OTHER_RANDOM_DICE]);

        let myScore = myDiceScore;
        let otherScore = otherDiceScore;
        MY_RANDOM_DICE > OTHER_RANDOM_DICE
            ? myScore += 1
            : otherScore += 1
        setMyDiceScore(myScore);
        setOtherDiceScore(otherScore);

        let myRecord = myDiceRecord;
        let otherRecord = otherDiceRecord;
        myRecord += `${MY_RANDOM_DICE + 1}, `;
        otherRecord += `${OTHER_RANDOM_DICE + 1}, `;
        setMyDiceRecord(myRecord);
        setOtherDiceRecord(otherRecord);

    }

    const DICE_GAME_RESET = () => {
        setMyDice(myDiceList[0]);
        setOtherDice(otherDiceList[0]);
        setMyDiceScore(0);
        setOtherDiceScore(0);
        setMyDiceRecord('');
        setOtherDiceRecord('');
    }

    return(
        <div id={"dice-background"}>
            <div id={"title-area"}>
                <img src={logo} alt={"로고"}/>
                <p>주사위 게임</p>
            </div>
            <div id={"play-area"}>
                <button onClick={()=>{DICE_GAME_START()}}>던지기</button>
                <button onClick={()=>{DICE_GAME_RESET()}}>처음부터</button>
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