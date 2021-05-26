import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  display: inline-block;
  width: fit-content;
  max-width: 50%;
  background: var(--main-blue);

  &.message-from-other-users {
    margin-left: auto;
    background: var(--pure-white);
  }

  svg {
    vertical-align: bottom;
    margin: 0 3px 0 16px;
    display: none;
  }

  ul {
    display: none;
  }

  &.message-from-own-user:hover {
    svg {
      display: inline-block;
    }

    ul {
      display: flex;
      float: right;
      margin: 2px 10px;
    }
  }

  &.message-from-other-users:hover {
    background: ${shade(0.2, "#fcfcff")};
  }

  @media (max-width: 650px) {
     {
      max-width: 95%;
    }
  }
`;
