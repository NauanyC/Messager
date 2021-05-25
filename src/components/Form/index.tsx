import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { Container, CurrentChat, Header, Messages, OpenChats } from "./styles";
/*
export interface ChatProps {} */

const Chat: React.FC /* <ChatProps> */ = () => {
  return (
    <Container>
      <OpenChats>
        <p>
          <strong>Chatting with</strong>
        </p>
        <ul>
          <li>
            <span>
              <HiUserCircle size={24} />
            </span>
            User 1
          </li>
          <li>
            <span>
              <HiUserCircle size={24} />
            </span>
            User 4
          </li>
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
          <li className="message-from-own-user">How you doing? </li>
          <li> Hey!</li>
          <li>Lorem ipsum dolor sit.</li>
          <li className="message-from-own-user">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            saepe necessitatibus earum tempora iste illo fugiat asperiores
            eligendi sed accusamus, omnis possimus eos provident eius
            praesentium rerum eaque, corrupti nostrum.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            ea assumenda soluta harum ut omnis error accusamus rerum. Aut,
            numquam.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            minus in saepe aut cupiditate reiciendis, facere esse autem at
            excepturi magnam eaque, repellat alias nemo! Neque voluptates, quasi
            vel fuga, ipsum vitae minus sit ratione atque excepturi dicta
            possimus nemo! Cum omnis fugiat pariatur quaerat earum ipsum neque
            ipsa corrupti.
          </li>
        </Messages>
        <input type="text" placeholder="Type your message..." />
      </CurrentChat>
    </Container>
  );
};

export default Chat;
