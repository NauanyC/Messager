import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import Loader from "react-loader-spinner";

import {
  Container,
  CurrentChat,
  Error,
  Header,
  Messages,
  OpenChats,
} from "./styles";
import { RootState } from "../../redux/store";
import { Message } from "../../interfaces/Message";
/*
export interface ChatProps {} */

const Chat: React.FC /* <ChatProps> */ = () => {
  const { username, messages, error, loading } = useSelector(
    (state: RootState) => state.messages,
  );

  const [chatMembers, setChatMembers] = useState<string[]>([]);

  console.log("chatMembers");
  console.log(chatMembers);

  useEffect(() => {
    const currentlyTalkingWith = messages
      .filter((message) => message.name !== username)
      .map((message) => {
        return message.name;
      });

    setChatMembers(currentlyTalkingWith);
  }, [messages, username]);

  const renderChat = (): JSX.Element => {
    if (loading) {
      return (
        <Loader
          type="TailSpin"
          color="#000"
          height={100}
          width={100}
          timeout={3000}
        />
      );
    }

    if (error) {
      return <Error />;
    }

    return (
      <>
        <OpenChats>
          <p>
            <strong>Chatting with</strong>
          </p>
          <ul>
            {chatMembers &&
              chatMembers.map((chatMember) => (
                <li key={chatMember}>
                  <span>
                    <HiUserCircle size={24} />
                  </span>
                  {chatMember}
                </li>
              ))}
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
            {/*
      <li> Hey!</li> */}

            {messages &&
              messages.map((message) => (
                <li
                  className={
                    message.name !== username ? "message-from-own-user" : ""
                  }
                  key={message.id}
                >
                  <strong>{message.name}</strong>: {message.text}
                </li>
              ))}
          </Messages>
          <input type="text" placeholder="Type your message..." />
        </CurrentChat>
      </>
    );
  };

  return <Container>{renderChat()}</Container>;
};

export default Chat;
