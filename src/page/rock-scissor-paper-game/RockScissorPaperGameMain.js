import './RockScissorPaperGameMain.scss';
import resetButton from '../../image/rock-scissor-paper/ic-reset.svg';
import rock from '../../image/rock-scissor-paper/rock.svg';
import scissor from '../../image/rock-scissor-paper/scissor.svg';
import paper from '../../image/rock-scissor-paper/paper.svg';
import {useState} from "react";

function RockScissorPaperGameMain() {

    const BUTTON_LIST = [
        {
            id: 1,
            image: rock,
            description: "바위",
        },
        {
            id: 2,
            image: scissor,
            description: "가위",
        },
        {
            id: 3,
            image: paper,
            description: "보",
        }
    ];

    let [mySelect, setMySelect] = useState(rock);
    let [myImageDescription, setMyImageDescription] = useState('바위');

    let [otherSelect, setOtherSelect] = useState(rock);
    let [otherImageDescription, setOtherImageDescription] = useState('바위');

    let [myCount, setMyCount] = useState(0);
    let [otherCount, setOtherCount] = useState(0);

    let [point, setPoint] = useState(1);

    let [record, setRecord] = useState('');

    const CHANGE_MY_SELECT = (id, image, description) => {
        setMySelect(image);
        setMyImageDescription(description);
        CHANGE_OTHER_SELECT(id);
    }

    const CHANGE_OTHER_SELECT = (id) => {
        let randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;

        for(let i = 0; i < BUTTON_LIST.length; i++) {
            if (BUTTON_LIST[i].id === randomNumber) {
                setOtherSelect(BUTTON_LIST[i].image);
                setOtherImageDescription(BUTTON_LIST[i].description);
            } else {
                continue;
            }
        }

        RESULT_COUNT(id, randomNumber);
    }

    let myWin = 'my';
    let otherWin = 'other';
    let draw = 'draw';
    let reset = 'reset';

    function whoWin(value) {

        const WIN_BOX = document.getElementsByClassName("select-box-background");
        const MY_WIN_BOX = WIN_BOX[0];
        const OTHER_WIN_BOX = WIN_BOX[1];

        if(value === 'my') {
            MY_WIN_BOX.classList.add('active')
            OTHER_WIN_BOX.classList.remove('active')
        } else if (value === 'other') {
            OTHER_WIN_BOX.classList.add('active')
            MY_WIN_BOX.classList.remove('active')
        } else {
            OTHER_WIN_BOX.classList.remove('active')
            MY_WIN_BOX.classList.remove('active')
        }
    }

    //문자열 사이 ,(콤마) 넣는 방법으로 추후에 변경하기
    const RESULT_COUNT = (myButton, otherButton) => {

        let myRecord = '나, ';
        let otherRecord = '상대, ';

        if(myButton === otherButton) {
            whoWin(draw)
            return;
        } else if(myButton === 1 && otherButton === 2) {
            myCount += (1 * point);
            record += myRecord;
            whoWin(myWin);
        } else if (myButton === 2 && otherButton === 3) {
            myCount += (1 * point);
            record += myRecord;
            whoWin(myWin);
        } else if (myButton === 3 && otherButton === 1) {
            myCount += (1 * point);
            record += myRecord;
            whoWin(myWin);
        } else {
            otherCount += (1 * point);
            record += otherRecord;
            whoWin(otherWin);
        }

        setMyCount(myCount);
        setOtherCount(otherCount);
        setRecord(record);
    }

    const RESET_COUNT = () => {

        setMySelect(rock);
        setOtherSelect(rock);

        setMyCount(0);
        setOtherCount(0);

        setPoint(1);
        const POINT_INPUT = document.querySelector('#point');
        POINT_INPUT.value = 1;

        whoWin(reset);

        setRecord('');
    }

    return (
        <div id={"background"}>
            <div id={"game-area"}>
                <div id={"title-area"}>
                    <div>
                        <span>가위바위보</span>
                    </div>
                    <div id={"last"}>
                        <img src={resetButton} alt={"초기화 버튼"} onClick={()=>{RESET_COUNT()}}/>
                    </div>
                </div>
                <div id={"count-area"}>
                    <CountBox people={"나"} count={myCount}/>
                    <div id={"colon"}>
                        <div className={"colon-item"}></div>
                        <div className={"colon-item"}></div>
                    </div>
                    <CountBox people={"상대"} count={otherCount}/>
                </div>
                <div id={"result-area"}>
                    <div id={"inner-item"}>
                        <div>
                            <SelectBox image={mySelect} description={myImageDescription}/>
                            <p>vs</p>
                            <SelectBox image={otherSelect} description={otherImageDescription}/>
                        </div>
                        <div>
                            <span>배점</span>
                            <input id={"point"} type={"number"} min={1} max={10} defaultValue={point} onChange={(e)=>{setPoint(e.target.value)}}/>
                            <span>배</span>
                        </div>
                        <div>
                            <div>
                                <p>승부 기록</p>
                                <p>{record}</p>
                            </div>
                        </div>
                    </div>
                    <div id={"box"}>
                        <div id={"outline-shadow"}></div>
                        <div id={"inner-shadow"}></div>
                    </div>
                </div>
                <div id={"button-area"}>
                    <div>
                        {
                            BUTTON_LIST.map((item) => {
                                return (
                                    <div key={item.id} id={"button-box-background"} onClick={()=>{CHANGE_MY_SELECT(item.id, item.image, item.description)}}>
                                        <img src={item.image} alt={item.description}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function CountBox(props) {
    return (
        <div className={"count-box"}>
            <div className={"wrapper"}>
                <p className={"count-number"}>{props.count}</p>
                <p className={"count-people"}>{props.people}</p>
            </div>
        </div>
    )
}

function SelectBox({image, description}) {
    return (
        <div className={"select-box-background"}>
            <img src={image} alt={description}/>
        </div>
    )
}

export default RockScissorPaperGameMain;