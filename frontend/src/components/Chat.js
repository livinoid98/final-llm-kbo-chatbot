import '../styles/chat.scss';
import { ReactComponent as Search } from "../assets/img/search-icon.svg";
import { ReactComponent as Profile } from "../assets/img/profile-img.svg";

const Chat = () => {
    return(
        <div className="chat">
            <div className="chat__search">
                <input
                    className="chat__search-input"
                    placeholder="야구의 궁금한 모든 것을 물어보세요."
                />
                <button
                    className="chat__search-button"
                >
                    <Search/>
                </button>
            </div>
            <div className="chat__main">
                <ul className="chat__main-ul">
                    <li className="chat__main-ul-li">
                        <div className="chat__main-ul-li-header">
                            <Profile className="chat__main-ul-li-header-img"/>
                            <h4 className="chat__main-ul-li-header-user">
                                KBOT
                            </h4>
                        </div>
                        <p className="chat__main-ul-li-content">
                            김도영 선수의 2024년 시즌 타율은 0.344입니다. 그는 37개의
                            홈런과 105타점, 39개의 도루를 기록하며
                        </p>
                    </li>
                    <li className="chat__main-ul-li">
                        <div className="chat__main-ul-li-header">
                            <Profile className="chat__main-ul-li-header-img"/>
                            <h4 className="chat__main-ul-li-header-user">
                                홍길동
                            </h4>
                        </div>
                        <p className="chat__main-ul-li-content">
                            현재 김도영 선수의 타할이 어떻게 돼?
                        </p>
                    </li>
                    <li className="chat__main-ul-li">
                        <div className="chat__main-ul-li-header">
                            <Profile className="chat__main-ul-li-header-img"/>
                            <h4 className="chat__main-ul-li-header-user">
                                KBOT
                            </h4>
                        </div>
                        <p className="chat__main-ul-li-content">
                            김도영 선수의 2024년 시즌 타율은 0.344입니다. 그는 37개의
                            홈런과 105타점, 39개의 도루를 기록하며
                        </p>
                    </li>
                    <li className="chat__main-ul-li">
                        <div className="chat__main-ul-li-header">
                            <Profile className="chat__main-ul-li-header-img"/>
                            <h4 className="chat__main-ul-li-header-user">
                                홍길동
                            </h4>
                        </div>
                        <p className="chat__main-ul-li-content">
                            현재 김도영 선수의 타할이 어떻게 돼?
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Chat;