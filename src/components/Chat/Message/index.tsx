import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { Container } from "./style";

import { Message as MessageInterface } from "../../../interfaces/Message";
import {
  deleteMessage,
  updateMessage,
} from "../../../redux/actions/messagesActions";

interface MessageProps {
  message: MessageInterface;
  username: string;
}

const Message: React.FC<MessageProps> = ({
  message,
  username,
}: MessageProps) => {
  const dispatch = useDispatch();

  const handleDeleteMessageClick = useCallback(
    (messageData) => {
      dispatch(deleteMessage(messageData.id));
    },
    [dispatch],
  );

  const handleUpdateMessageClick = useCallback((messageData) => {
    console.log("handleUpdateMessageClick");
    /*  dispatch(updateMessage(messageData.id)); */
  }, []);

  return (
    <Container
      className={
        message.name !== username
          ? "message-from-other-users"
          : "message-from-own-user"
      }
      key={message.id}
    >
      <p>
        <strong>{message.name}</strong>: {message.text}
      </p>
      {message.name === username && (
        <ul className="options-modal">
          <li>
            <AiFillDelete
              size={20}
              onClick={() => handleDeleteMessageClick(message)}
            />
          </li>
          <li>
            <AiFillEdit
              size={20}
              onClick={() => handleUpdateMessageClick(message)}
            />
          </li>
        </ul>
      )}
    </Container>
  );
};

export default Message;
