import styled from "styled-components";

export const BaseRegisterStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: #121212;

  main {
    display: flex;
    flex-direction: column;

    min-width: 260px;

    margin: 0 auto;
    padding: 20px 40px;

    background-color: #212529;
    color: #f8f9fa;

    span {
      font-size: 12px;
      color: #868E96;
    }
  }

`
export const FormStyled = styled.form`

  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      padding: 10px 0;
      font-size: 12px;
    }
    input {
      width: 100%;

      border: none;
      border-radius: 3px;

      background-color: #343B41;
      color: #f8f9fa;

      padding: 10px 0 10px 5px;
    }
    select {
      width: 102%;

      border: none;
      border-radius: 3px;

      background-color: #343B41;
      color: #f8f9fa;

      padding: 10px 25px 10px 5px;
    }
    span {
      color: #ff577f;
      margin: 0;
    }
  }

  button {
    width: 102.5%;
    
    background-color: #59323F;
    color: #f8f9fa;

    border: none;
    border-radius: 3px;

    margin-top: 15px;
    padding: 10px;
  }
`

export const LogoButton = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  min-width: 340px;
  height: 30px;

  background-color: #121212;

  h2{
    display: flex;
    flex-wrap: wrap;

    color: #ff577f;
  }
  button {
    padding: 10px 15px;

    background-color: #212529;
    color: #f8f9fa;

    border: none;
    border-radius: 5px;
  }
`