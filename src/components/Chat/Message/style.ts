import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
  display: inline-block;
  width: fit-content;
  max-width: 60%;
  background: var(--main-blue);

  div {
    display: flex;

    span.edit-icons {
      display: flex;
      float: right;
    }
  }

  &.message-from-other-users {
    margin-left: auto;
    background: var(--pure-white);
  }

  svg {
    vertical-align: bottom;
    margin: 0 3px 0 16px;
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
      margin: 4px 10px;
    }
  }

  &.message-from-other-users:hover {
    background: ${shade(0.2, "#fcfcff")};
  }

  input {
    border: 0;
    border-bottom: 1px solid grey;
    background: transparent;
    width: 80%;
  }

  @media (max-width: 1260px) {
    max-width: 95%;
  }
`;

export const Title = styled.div`
  strong:nth-child(1) {
    margin-right: 20px;
  }

  span strong {
    display: inline-block;
    color: ${shade(0.2, "#000")};
    font-size: 13px;
  }
`;
