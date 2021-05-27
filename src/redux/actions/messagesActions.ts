import { Dispatch } from "redux";

import {
  CREATE_MESSAGE,
  LOADING_MESSAGES,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
} from "../types";

import MessagesService from "../../services/messagesServices";
import { NewMessageData } from "../../interfaces/Message";

/* type DispatchTypes {

} */

export const fetchMessages = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: LOADING_MESSAGES,
    });

    const res = await MessagesService.getAll();

    dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: FETCH_MESSAGES_ERROR,
      payload: err,
    });
  }
};

export const createMessage =
  ({ name, text }: NewMessageData) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await MessagesService.create({ name, text });

      dispatch({
        type: CREATE_MESSAGE,
        payload: res,
      });

      console.log("res");
      console.log(res);
      return Promise.resolve(res);
    } catch (err) {
      console.log("err");
      console.log(err);
      return Promise.reject(err);
    }
  };

export const updateMessage =
  (id: string, user: string, newText: string) => async (dispatch: Dispatch) => {
    try {
      const body = { name: user, text: newText };
      const res = await MessagesService.update({ id, body });

      if (res.data) {
        dispatch({
          type: UPDATE_MESSAGE,
          payload: res.data,
        });
      }

      return Promise.resolve(res.data);
    } catch (err) {
      console.log("err");
      console.log(err);
      return Promise.reject(err);
    }
  };

export const deleteMessage = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await MessagesService.remove(id);

    if (res.data) {
      dispatch({
        type: DELETE_MESSAGE,
        payload: { id },
      });
    }
  } catch (err) {
    console.log("err");
    console.log(err);
  }
};
