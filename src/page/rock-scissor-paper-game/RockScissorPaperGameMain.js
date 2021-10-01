import './RockScissorPaperGameMain..scss';
import reset from '../../image/rock-scissor-paper/ic-reset.svg';
import rock from '../../image/rock-scissor-paper/rock.svg';
import scissor from '../../image/rock-scissor-paper/scissor.svg';
import paper from '../../image/rock-scissor-paper/paper.svg';
import {useState} from "react";

function RockScissorPaperGameMain() {

    let [mySelect, setMySelect] = useState(rock);
    let [myImageDescription, setMyImageDescription] = useState('바위');

    let [otherSelect, setOtherSelect] = useState(rock);
    let [otherImageDescription, setOtherImageDescription] = useState('바위');

    return (
        <div id={"background"}>
            <div id={"game-area"}>
                <div id={"title-area"}>
                    <div>
                        <span>가위바위보</span>
                    </div>
                    <div id={"last"}>
                        <img src={reset} alt={"초기화 버튼"}/>
                    </div>
                </div>
                <div id={"count-area"}>
                    <CountBox people={"나"} count={23}/>
                    <div id={"colon"}>
                        <div className={"colon-item"}></div>
                        <div className={"colon-item"}></div>
                    </div>
                    <CountBox people={"상대"} count={15}/>
                </div>
                <div id={"result-area"}>
                    <div id={"inner-item"}>
                        <div>
                            <MySelectBox image={mySelect} description={myImageDescription}/>
                            <p>vs</p>
                            <OtherSelectBox image={otherSelect} description={otherImageDescription}/>
                        </div>
                        <div>
                            <span>배점</span>
                            <input type={"number"} min={1} max={10} value={"1"}/>
                            <span>배</span>
                        </div>
                        <div>
                            <div>
                                <p>승부 기록</p>
                                <p>나, 상대, 상대, 나</p>
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
                        <ButtonBox image={rock} description={'바위'} changeImage={setMySelect} changeDescription={setMyImageDescription}/>
                        <ButtonBox image={scissor} description={'가위'} changeImage={setMySelect} changeDescription={setMyImageDescription}/>
                        <ButtonBox image={paper} description={'보'} changeImage={setMySelect} changeDescription={setMyImageDescription}/>
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

function ButtonBox({image, description, changeImage, changeDescription}) {

    const onClick = (image, description) => {
        changeImage(image);
        changeDescription(description);
    }

    return (
        <div id={"button-box-background"} onClick={()=>{onClick(image, description)}}>
            <img src={image} alt={description}/>
        </div>
    )
}

function MySelectBox({image, description}) {
    return (
        <div id={"select-box-background"}>
            <img src={image} alt={description}/>
        </div>
    )
}

function OtherSelectBox({image, description}) {
    return (
        <div id={"select-box-background"}>
            <img src={image} alt={description}/>
        </div>
    )
}

export default RockScissorPaperGameMain;