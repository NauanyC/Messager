export interface NewMessageData {
  name: string;
  text: string;
}

export interface Message {
  id: string;
  name: string;
  text: string;
  dateAdded: number;
  dateEdited: number;
}
