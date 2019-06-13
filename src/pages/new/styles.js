import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  input {
    height: 48px;
    border: 1px solid;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 20px;
    margin-top: 30px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 30px;

    &:hover {
      color: #fff;
    }
  }
`;
