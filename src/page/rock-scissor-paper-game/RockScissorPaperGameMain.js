import './RockScissorPaperGameMain..scss';
import reset from '../../image/rock-scissor-paper/ic-reset.svg';
import rock from '../../image/rock-scissor-paper/rock.svg';

function RockScissorPaperGameMain() {
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
                <div id={"count-area"} style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <CountBox people={"나"} count={23}/>
                    <div id={"colon"}>
                        <div className={"colon-item"}></div>
                        <div className={"colon-item"}></div>
                    </div>
                    <CountBox people={"상대"} count={15}/>
                </div>
                <div id={"result-area"} style={{textAlign: "center", position: "relative"}}>
                    <div style={{position: "absolute", width: "100%", zIndex: 999}}>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", lineHeight: "150px"}}>
                            <SelectBox/>
                            <p style={{margin: "0", color: "white", fontWeight: "bold", fontSize: "26px", textAlign: "center", textShadow: "0 2px 0 rgba(255, 255, 255, 0.5)", verticalAlign:"middle"}}>vs</p>
                            <SelectBox/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <span style={{color: "white", marginRight: "10px"}}>배점</span>
                            <input type={"number"} min={1} max={10} value={"1"} style={{border: "2px solid #6640E5", borderRadius: "8px", height: "30px", width: "38px", backgroundColor: "#5015CA", color: "white", padding: "0 10px"}}/>
                            <span style={{color: "white", marginLeft: "10px"}}>배</span>
                        </div>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                            <div style={{width: "80%", backgroundColor: "white", height: "auto", padding: "5px 10px", borderRadius: "10px", boxShadow: "0 6px 1px #E0D6F5"}}>
                                <p style={{color: "#5820CC", fontWeight: "bold"}}>승부 기록</p>
                                <p style={{fontSize: "14px", color: "#5C5A5E"}}>나, 상대, 상대, 나</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "320px", alignItems: "center"}}>
                        <div id={"outline-shadow"} style={{position: "absolute"}}></div>
                        <div id={"inner-shadow"}></div>
                    </div>
                </div>
                <div id={"button-area"}>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                        <ButtonBox/>
                        <ButtonBox/>
                        <ButtonBox/>
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

function ButtonBox() {
    return (
        <div id={"button-box-background"}>
            <img src={rock} alt={"바위"}/>
        </div>
    )
}

function SelectBox() {
    return (
        <div id={"select-box-background"}>
            <img src={rock} alt={"바위"}/>
        </div>
    )
}

export default RockScissorPaperGameMain;