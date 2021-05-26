import { Dispatch } from "redux";

import {
  CREATE_MESSAGE,
  LOADING_MESSAGES,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
  FETCH_MESSAGES_SUCCESS,
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

    console.log("res");
    console.log(res);

    dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: res,
    });
  } catch (err) {
    console.log("err");
    console.log(err);
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

export const updateTutorial =
  (id: string, data: NewMessageData) => async (dispatch: Dispatch) => {
    try {
      const res = await MessagesService.update(id, data);

      console.log("res");
      console.log(res);

      dispatch({
        type: UPDATE_MESSAGE,
        payload: data,
      });

      return Promise.resolve(res);
    } catch (err) {
      console.log("err");
      console.log(err);
      return Promise.reject(err);
    }
  };

export const deleteTutorial = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await MessagesService.remove(id);

    console.log("res");
    console.log(res);

    dispatch({
      type: DELETE_MESSAGE,
      payload: { id },
    });
  } catch (err) {
    console.log("err");
    console.log(err);
  }
};
