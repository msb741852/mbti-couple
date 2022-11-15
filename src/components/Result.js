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
            alert('오류 ! 관리자에게 신고해주세요!');
    }

    switch(mbtiResult) {
        case 'blue' :
            mbtiResult_text = `두 분의 궁합은 정말 천생연분이랍니다 ! 행복한 사랑 나누시기를 바랍니다 !`;
            break;
        case 'greeen' :
            mbtiResult_text = '두 분은 맞는 것은 잘 맞고, 안 맞는 것은 안 맞으신다고 합니다..! 재미삼아 하는 것이니 너무 깊게 생각하지는 않으시길 바랍니다! 안 맞는 부분은 맞춰가면 되지 않을까요?';
            break;
        case 'green' :
            mbtiResult_text = '두 분은 정말 좋은 관계로 발전할 수 있답니다! 좋은 관계로 발전시키기 위해 서로 노력하면 좋을 것 같습니다~!';
            break;
        case 'red' :
            mbtiResult_text = '두 분은 정말 다시 생각해보라고 하지만.. 재미삼아 하는 거니까요! 사람마다 다르다고 생각해요! 궁합표는 재미로 보고 더욱 좋은 관계로 거듭나시길 바라겠습니다!'
            break;
        case 'yellow' :
            mbtiResult_text = '두 분은 최악까지는 아니지만.. 좋지도 않다고 합니다.. 이 결과를 너무 신뢰하지 않으셨으면 좋겠습니다! 결과는 틀렸다며 행복한 사랑 하시길 바랍니다!'
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
                            <button onClick={() => setHome(true)}>처음으로</button>
                        </div>
                    </> 
                }
            </>                
            }
        </>
    );
}

export default Result;