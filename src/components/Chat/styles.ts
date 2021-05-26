import styled from "styled-components";

export const CentralizedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 40px;
`;

export const Container = styled.div`
  display: flex;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  min-width: 60%;
  max-width: 80%;
  height: 650px;
  min-height: 360px;

  margin: 30px;

  ul {
    list-style-type: none;
  }
`;

export const OpenChats = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: left;

  padding: 20px;

  p {
    margin: 20px auto;
  }

  li {
    display: block;
    margin-bottom: 6px;
    svg {
      vertical-align: bottom;
    }
  }

  @media (max-width: 650px) {
    width: 115px;
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  p {
    font-size: 24px;
    flex: 1;
    text-align: center;
  }
`;

export const CurrentChat = styled.div`
  flex: 1;
  position: relative;

  input {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
  }
`;

export const Messages = styled.ul`
  padding: 16px;
  overflow: auto;
  overflow-y: scroll;
  height: 560px;

  display: flex;
  flex-direction: column;
`;

export const Error = styled.h3`
  color: red;
`;
