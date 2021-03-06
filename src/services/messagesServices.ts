import { NewMessageData, Message } from "../interfaces/Message";
import api from "./api";

const getAll = (): Promise<Message[]> => {
  return api.get("/comments");
};

const create = (data: NewMessageData): Promise<Message> => {
  return api.post("/comments", data);
};

const update = ({ id, body }: any): Promise<any> => {
  return api.put(`comment/${id}`, body);
};

const remove = (id: string): Promise<any> => {
  return api.delete(`/comment/${id}`);
};

const MessagesService = {
  getAll,
  create,
  update,
  remove,
};

export default MessagesService;
