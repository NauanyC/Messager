import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { Message } from "../interfaces/Message";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;

export type RootState = {
  messages: {
    username: string;
    messages: Message[];
    error: string;
    loading: boolean;
  };
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): any => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
