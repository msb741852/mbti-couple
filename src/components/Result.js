import { useEffect, useState } from "react";
import Loading from "./Loading";
import App from "../App";


function Result({firstMbti, secondMbti}) {
    const [loading, setLoading] = useState(true);
    const [home, setHome] = useState(false);
    let mbtiResult = null;
    let mbtiResult_text = null;
    switch(firstMbti) {
        case 'INFP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'INTJ' || secondMbti === 'INTJ' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'ENFJ' || secondMbti === 'ENTJ') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'red';
            }
            break;
        case 'ENFP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'ENFJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'INFJ' || secondMbti === 'INTJ') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'red';
            }
            break;
        case 'INFJ':
            if (secondMbti === 'INFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ' || secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'ENFP' || secondMbti === 'ENTP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'red';
            }
            break;
        case 'ENFJ':
            if(secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ' || secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'INFP' || secondMbti === 'ISFP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'red';
            }
            break;
        case 'INTJ':
            if(secondMbti === 'INFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ' || secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP') {
                mbtiResult = 'green';
            } else if (secondMbti === 'ENFP' || secondMbti === 'ENTP') {
                mbtiResult = 'blue';
            } else if (secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'ENTJ':
            if(secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ' || secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'INFP' || secondMbti === 'INTP') {
                mbtiResult = 'blue';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'INTP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ' || secondMbti === 'INTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'ENTJ' || secondMbti === 'ESTJ') {
                mbtiResult = 'blue';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'ENTP': 
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'ENFJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'green';
            } else if(secondMbti === 'INFJ' || secondMbti === 'INTJ') {
                mbtiResult = 'blue';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'ISFP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'ENFJ' || secondMbti === 'ESFJ' || secondMbti === 'ESTJ') {
                mbtiResult = 'blue';
            } else if(secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP' || secondMbti === 'ISFJ' || secondMbti === 'ISTJ') {
                mbtiResult = 'greeen';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'ESFP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP' || secondMbti === 'ESFJ' || secondMbti === 'ESTJ') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'yellow';
            } else {
                mbtiResult = 'blue';
            }
            break;
        case 'ISTP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP' || secondMbti === 'ISFJ' || secondMbti === 'ISTJ') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ESFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'yellow';
            } else {
                mbtiResult = 'blue';
            }
            break;
        case 'ESTP':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'ENTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP' || secondMbti === 'ESFJ' || secondMbti === 'ISTJ' || secondMbti === 'ESTJ') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ISFJ') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'yellow';
            }
            break;
        case 'ISFJ':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'yellow';
            } else if(secondMbti === 'ENTJ' || secondMbti === 'ISFP' || secondMbti === 'ISTP') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ESFP' || secondMbti === 'ESTP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'green';
            }
            break;
        case 'ESFJ':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'yellow';
            } else if(secondMbti === 'ENTJ' || secondMbti === 'ESFP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ISFP' || secondMbti === 'ISTP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'green';
            }
            break;
        case 'ISTJ':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'INTP' || secondMbti === 'ENTP') {
                mbtiResult = 'yellow';
            } else if(secondMbti === 'ENTJ' || secondMbti === 'ISFP' || secondMbti === 'ISTP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'ESFP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'green';
            }
            break;
        case 'ESTJ':
            if(secondMbti === 'INFP' || secondMbti === 'ENFP' || secondMbti === 'INFJ' || secondMbti === 'ENFJ') {
                mbtiResult = 'red';
            } else if(secondMbti === 'INTJ' || secondMbti === 'ENTP') {
                mbtiResult = 'yellow';
            } else if(secondMbti === 'ENTJ' || secondMbti === 'ESFP' || secondMbti === 'ESTP') {
                mbtiResult = 'greeen';
            } else if(secondMbti === 'INTP' || secondMbti === 'ISFP' || secondMbti === 'ISTP') {
                mbtiResult = 'blue';
            } else {
                mbtiResult = 'green';
            }
            break;
        default:
            alert('?????? ! ??????????????? ??????????????????!');
    }

    switch(mbtiResult) {
        case 'blue' :
            mbtiResult_text = `??? ?????? ????????? ?????? ???????????????????????? ! ????????? ?????? ??????????????? ???????????? !`;
            break;
        case 'greeen' :
            mbtiResult_text = '??? ?????? ?????? ?????? ??? ??????, ??? ?????? ?????? ??? ??????????????? ?????????..! ???????????? ?????? ????????? ?????? ?????? ??????????????? ???????????? ????????????! ??? ?????? ????????? ???????????? ?????? ?????????????';
            break;
        case 'green' :
            mbtiResult_text = '??? ?????? ?????? ?????? ????????? ????????? ??? ????????????! ?????? ????????? ??????????????? ?????? ?????? ???????????? ?????? ??? ????????????~!';
            break;
        case 'red' :
            mbtiResult_text = '??? ?????? ?????? ?????? ?????????????????? ?????????.. ???????????? ?????? ????????????! ???????????? ???????????? ????????????! ???????????? ????????? ?????? ?????? ?????? ????????? ??????????????? ??????????????????!'
            break;
        case 'yellow' :
            mbtiResult_text = '??? ?????? ??????????????? ????????????.. ????????? ????????? ?????????.. ??? ????????? ?????? ???????????? ??????????????? ???????????????! ????????? ???????????? ????????? ?????? ????????? ????????????!'
            break;
        default:
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }
        , 2000);
    }, []);
    return (
        <>
            { home ? 
                <App /> 
            :
            <>   
                { loading ? 
                    <Loading /> 
                : 
                    <>
                        <div className="mbti_result">
                            <img alt="result" src={require(`../images/${mbtiResult}.gif`)} ></img>
                            <span>{mbtiResult_text}</span>
                            <button onClick={() => setHome(true)}>????????????</button>
                        </div>
                    </> 
                }
            </>                
            }
        </>
    );
}

export default Result;