import { useState, useEffect } from "react";
import WhatMBTI from "./WhatMBTI";

function Question() {
    const [answer, setAnswer] = useState(null);
    const [pages, setPages] = useState(null);
    const goToNext = (page) => {
        setPages(page);
    }
    let content = null;

    useEffect(() =>{
        setTimeout(() => {
            setAnswer(["그럼요!! 재미로만 할게요! 😁", "진지하게 할건데요 😐"]);
        }, 1000)}
    , []);
    if(pages === null) {
        content =  (
            <div className="question_box">
            <span>다시 한 번 말씀드립니다!<br /> 정말 재미로만 하실거죠!?</span>
            {answer === null ? "" : answer.map((answer, idx) => <button key={idx} onClick={() => goToNext(idx)}>{answer}</button>)}
        </div>
        );
    } else if(pages === 0) {
        content = <WhatMBTI />
    } else {
        content = <WhatMBTI modal/>
    }
    
    return (
        <>
        {content}
        </>
    );
}

export default Question;