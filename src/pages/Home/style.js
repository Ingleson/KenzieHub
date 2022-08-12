import styled from "styled-components";

export const BaseHome = styled.div`

  background-color: #121214;
  color: #f8f9fa;

  width: 100%;
  height: 100vh;

  header {
    height: 100px;

    div {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;

      width: 60%;

      h2 {
        color: #ff577f;
      }
      button {
        padding: 10px 15px;

        background-color: #212529;
        color: #f8f9fa;

        border: none;
        border-radius: 5px;
      }
    }
  }
  article{
    display: flex;
    align-items: center;

    border: 2px solid #212529;
    height: 120px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      width: 60%;

      h2 {
        font-size: 25px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    margin-top: 20px;

    width: 60%;

    h2 {
      font-size: 25px;
    }
    span {
      font-size: 13px;

      display: flex;
      align-items: flex-start;
    }
  }
`