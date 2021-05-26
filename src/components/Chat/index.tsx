import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { Container, CurrentChat, Header, Messages, OpenChats } from "./styles";
/*
export interface ChatProps {} */

const Chat: React.FC /* <ChatProps> */ = () => {
  return (
    <Container>
      <OpenChats>
        <p>
          <strong>Chatting with</strong>
        </p>
        <ul>
          <li>
            <span>
              <HiUserCircle size={24} />
            </span>
            User 1
          </li>
          <li>
            <span>
              <HiUserCircle size={24} />
            </span>
            User 4
          </li>
        </ul>
      </OpenChats>

      <CurrentChat>
        <Header>
          <p>
            <strong>User 1</strong>
          </p>
          <span>
            <IoIosSettings size={32} />
          </span>
        </Header>
        <Messages>
          {/*  <li className="message-from-own-user">How you doing? </li>
          <li> Hey!</li> */}
        </Messages>
        <input type="text" placeholder="Type your message..." />
      </CurrentChat>
    </Container>
  );
};

export default Chat;
