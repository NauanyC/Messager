/* eslint-disable no-case-declarations */
import {
  CREATE_MESSAGE,
  LOADING_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
} from "../types";

import { Message } from "../../interfaces/Message";

const initialState = {
  username: "Nauany",
  messages: [] as Message[],
  error: "",
  loading: false,
};

function messagesReducer(messages = initialState, action: any): any {
  const { type, payload } = action;

  switch (type) {
    case CREATE_MESSAGE:
      return [...messages.messages, payload.data];

    case LOADING_MESSAGES:
      return {
        ...messages,
        loading: true,
        error: "",
      };

    case FETCH_MESSAGES_SUCCESS:
      return {
        ...messages,
        messages: payload.data,
        loading: false,
        error: "",
      };

    case FETCH_MESSAGES_ERROR:
      return {
        ...messages,
        loading: false,
        error: payload,
      };

    case UPDATE_MESSAGE:
      return messages.messages.map((message) => {
        if (message.id === payload.id) {
          return {
            ...message,
            messages: payload.data,
          };
        }
        return message;
      });

    case DELETE_MESSAGE:
      return {
        ...messages,
        messages: messages.messages.filter(({ id }) => id !== payload.id),
      };

    default:
      return messages;
  }
}

export default messagesReducer;
