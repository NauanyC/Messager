import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import Loader from "react-loader-spinner";

import Message from "./Message";

import {
  CentralizedContainer,
  Container,
  CurrentChat,
  Error,
  Header,
  Messages,
  OpenChats,
} from "./styles";
import { RootState } from "../../redux/store";

const Chat: React.FC = () => {
  const { username, messages, error, loading } = useSelector(
    (state: RootState) => state.messages,
  );

  const [chatMembers, setChatMembers] = useState<string[]>([]);

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
        <CentralizedContainer>
          <Loader
            type="TailSpin"
            color="#000"
            height={100}
            width={100}
            timeout={3000}
          />
        </CentralizedContainer>
      );
    }

    if (error) {
      return (
        <CentralizedContainer>
          <Error>
            Sorry, we had an error fetching your messages. Please, try again
            later!
          </Error>
        </CentralizedContainer>
      );
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
            {messages &&
              messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  username={username}
                />
              ))}
          </Messages>
          <input
            type="text"
            placeholder="Type your message..."
            className="new-message-box"
          />
        </CurrentChat>
      </>
    );
  };

  return <Container>{renderChat()}</Container>;
};

export default Chat;
