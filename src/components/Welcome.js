import { useEffect, useState } from "react";
import Question from "./Question";

function Welcome() {
    const [message, setMessage] = useState("안녕하세요!");
    const messageChange = (newMsg, time) => {
        setTimeout(() => {
            setMessage(newMsg); 
         }, time);
    }
    useEffect( () => {
        messageChange("MBTI 궁합 표를 기반으로 만든 사이트입니다!", 2000);
        messageChange("재미로만 해주세요~!", 4000);
        messageChange("", 6000);
    }, []);
    
    
    return (
        <>
            {message === "" ? 
            <Question />
            : 
            <div className="message_box">
                <span>{message}</span>
            </div>}
        </>
    );
}

export default Welcome;