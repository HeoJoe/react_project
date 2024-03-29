import styled from 'styled-components';
import { useState } from 'react';

import Friends from './Notification_Detail/Friends';
import Like from "./Notification_Detail/Like";
import News from './Notification_Detail/News';

const Wrapper = styled.section`
    text-align: center;
    margin-top: 1.5rem;
    width: 60rem;
`;

const Title = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
`;

const OptionButton = styled.button`
    width: auto;
    height: 1.9rem;
    font-size: 0.8rem;
    border: none;
    border-radius: 1rem;
    padding: 0rem 0.9rem;
    margin-top: 0.2rem;
    margin-left: 0.7rem;
    cursor: pointer;
`;

const UserInfo = () => {
    const [isClick, setIsClick] = useState("friends");

    const onSelect = (props) => setIsClick(props);

    const select = {
        color: "white",
        backgroundColor: "black",
        fontWeight: "bold"
    }

    const notSelect = {
        color: "black",
        backgroundColor: "#F5F5F5"
    }

    return (
        <Wrapper>
            <Title> 알림 </Title>
            <section style={{display: "flex"}}>
                <OptionButton
                    onClick={() => onSelect("friends")}
                    style={(
                        isClick === "friends") ? select : notSelect
                    }
                > 친구의 할 일
                </OptionButton>
                <OptionButton
                    onClick={() => onSelect("like")}
                    style={(
                        isClick === "like") ? select : notSelect
                    }
                > 받은 좋아요
                </OptionButton>
                <OptionButton
                    onClick={() => onSelect("news")}
                    style={(
                        isClick === "news") ? select : notSelect
                    }
                > 소식
                </OptionButton>
            </section>
            {(isClick === "friends") && <Friends/>}
            {(isClick === "like") && <Like/>}
            {(isClick === "news") && <News/>}
        </Wrapper>
    )
}

export default UserInfo;