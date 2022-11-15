import { useState } from "react";

function Modal() {
    const [content, setContent] = useState(true);
    setTimeout(() => {
        setContent(false);
    }, 2000);
    return (
        <>
            {content ?
            <div className="modal">
                <span>재미로만 진행해주세요..😂</span>
            </div> 
            : 
            <></>}
        </>
    );
}
export default Modal;