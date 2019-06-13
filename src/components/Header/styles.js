import styled from "styled-components";

export const Main = styled.header`
  background: #fff;
  height: 72px;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 72px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    width: 17px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
  }
`;
