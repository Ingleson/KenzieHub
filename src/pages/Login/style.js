import styled from "styled-components";

export const BaseLogin = styled.section`

  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-color: #121212;

  h2{
    color: #ff577f;
  }
`

export const NoFormBox = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 40px;

  background-color: #212529;
  color: #f8f9fa;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0;

    label {
      padding: 10px 0;
      font-size: 12px;
    }
    input {
      width: 100%;

      border: 1px solid #f8f9fa;
      border-radius: 3px;

      background-color: #343B41;
      color: #f8f9fa;

      padding: 10px 0 10px 5px;
    }
    span {
      color: #ff577f;
      margin: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      display: flex;
      justify-content: center;

      background-color: #ff577f;
      color: #f8f9fa;
      
      margin: 15px 0 0 10px;
      padding: 10px 100px;

      border: none;
      border-radius: 3px;
    }
  }

  span {
    font-size: 12px;
    color: #868E96;

    margin: 30px 0 10px 10px;
  }
  button {
    background-color: #868E96;
    color: #f8f9fa;

    padding: 10px 0;
    margin-left: 10px;

    border: none;
    border-radius: 3px;
  }
`