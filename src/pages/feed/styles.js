import styled from 'styled-components';

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 26px;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    width: 17px;
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  flex-direction: column;
  div {
    flex-direction: row;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;

    img {
      height: 20px;
      margin-right: 10px;
    }
  }
  strong {
    width: 100%;
    display: flex;
  }
  p {
    width: 100%;
    display: flex;

    font-size: 13px;
    margin-top: 2px;
    line-height: 18px;
    flex-direction: column;
    span {
      color: #7159c1;
      display: block;
    }
  }
`;
export const Main = styled.section`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

    head {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        span {
          font-size: 13px;
          font-weight: bold;
        }
        p {
          font-size: 11px;
          color: #666;
          margin-top: 3px;
        }
      }
    }
  }

  footer {
    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    footer {
    }
    padding: 20px;
    div {
      margin-bottom: 10px;
    }
  }
`;
