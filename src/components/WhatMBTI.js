import { useState } from "react";
import Result from "./Result";
import Modal from "./Modal";

function WhatMBTI({modal}) {
    const mbti = ["INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP", "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"];
    const [firstMbti, setFirstMbti] = useState("");
    const [secondMbti, setSecondMbti] = useState("");
    const [ok, setOk] = useState(0);
    const firstSelect = (e) => {
        setFirstMbti(e.target.value);
    } 
    const secondSelect = (e) => {
        setSecondMbti(e.target.value);
    }
    let content = null;
    if(ok === 0) {
        if(modal) {
            content = (
                <> 
                    <Modal />
                    <span>당신의 MBTI는 무엇인가요?</span>
                    <select onChange={firstSelect} value={firstMbti}>
                        <option value="">선택해주세요</option>
                        {mbti.map((mbti, idx) => <option key={idx} value={mbti}>{mbti}</option>)}
                    </select>
                    {firstMbti === "" ? "" : <><span>당신의 MBTI가 '{firstMbti}'가 맞나요?</span><button onClick={() => setOk(1)}>네 맞아요!😁</button></> }
                </>
            )
        } else {
            content = (
                <>
                    <span>당신의 MBTI는 무엇인가요?</span>
                    <select onChange={firstSelect} value={firstMbti}>
                        <option value="">선택해주세요</option>
                        {mbti.map((mbti, idx) => <option key={idx} value={mbti}>{mbti}</option>)}
                    </select>
                    {firstMbti === "" ? "" : <><span>당신의 MBTI가 '{firstMbti}'가 맞나요?</span><button onClick={() => setOk(1)}>네 맞아요!😁</button></> }
                </>
                )
        }
    } else if(ok === 1) {
        content = (
            <>
                <span>상대방의 MBTI는 무엇인가요?</span>
                <select onChange={secondSelect} value={secondMbti}>
                    <option value="">선택해주세요</option>
                    {mbti.map((mbti, idx) => <option key={idx} value={mbti}>{mbti}</option>)}
                </select>
                {secondMbti === "" ? "" : <><span>상대방의 MBTI가 '{secondMbti}'가 맞나요?</span><button onClick={() => setOk(2)}>네 맞아요!😁</button></> }
            </>
        );
    } else if(ok === 2) {
        content = (
            <Result firstMbti={firstMbti} secondMbti={secondMbti} />
        )
    }
    return (
        
        <>
            {ok !== 2 ? 
                (<div className="whatMbti">
                    {content}
                </div>) 
                : 
                <>{content}</>
            }
        </>
    );
}

export default WhatMBTI;