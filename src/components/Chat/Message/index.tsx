import React, { useCallback, useState } from "react";

import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineClose,
  AiOutlineCheck,
} from "react-icons/ai";

import { parseIntToDate } from "../../../utils/date";
import { Container, Title } from "./style";

import { Message as MessageInterface } from "../../../interfaces/Message";
import {
  deleteMessage,
  updateMessage,
} from "../../../redux/actions/messagesActions";
import { useAppDispatch } from "../../../redux/store";

interface MessageProps {
  message: MessageInterface;
  username: string;
}

const Message: React.FC<MessageProps> = ({
  message,
  username,
}: MessageProps) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(message.text);

  const handleDeleteMessageClick = useCallback(
    (messageData) => {
      dispatch(deleteMessage(messageData.id));
    },
    [dispatch],
  );

  const handleUpdateMessageClick = useCallback(
    (messageData) => {
      dispatch(updateMessage(messageData.id, messageData.name, editedText))
        .then(() => {
          setEditMode(false);
        })
        .catch((e: any) => {
          console.log(e);
          setEditMode(false);
        });
    },
    [dispatch, editedText],
  );

  return (
    <Container
      className={
        message.name !== username
          ? "message-from-other-users"
          : "message-from-own-user"
      }
      key={message.id}
    >
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <span className="edit-icons">
            <AiOutlineClose size={20} onClick={() => setEditMode(false)} />
            <AiOutlineCheck
              size={20}
              onClick={() => handleUpdateMessageClick(message)}
            />
          </span>
        </div>
      ) : (
        <>
          <Title>
            <strong>{message.name}</strong>
            <span>
              <strong>
                {parseIntToDate(message.dateAdded)}
                {message.dateAdded !== message.dateEdited ? " (edited)" : ""}
              </strong>
            </span>
          </Title>
          <br />
          <p>{message.text}</p>

          {message.name === username && (
            <ul>
              <li>
                <AiFillDelete
                  size={20}
                  onClick={() => handleDeleteMessageClick(message)}
                />
              </li>
              <li>
                <AiFillEdit size={20} onClick={() => setEditMode(true)} />
              </li>
            </ul>
          )}
        </>
      )}
    </Container>
  );
};

export default Message;
