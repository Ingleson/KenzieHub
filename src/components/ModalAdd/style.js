import styled from "styled-components";
import "animate.css"

export const EditModal = styled.div`

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.25);

  animation: fadeIn 2s;

  section {
    width: 100%;
    max-width: 400px;

    .mini-head {
      background-color: #343B41;
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      padding: 0 10px;

      border-radius: 4px 4px 0 0;

      button {
        border: none;
        background-color: #343B41;
        color: #868E96;

        font-size: 18px;
      }
    }
    form {
      background-color: #212529;
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      padding: 20px 15px 0 15px;

      border-radius: 0 0 4px 4px;
      

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 90%;

        gap: 15px;
        
        label {
          font-size: 12px;
        }
        input {
          width: 100%;
          padding: 15px 0 15px 5px ;

          background-color: #343B41;
          border: 1px solid #f8f9fa;
          border-radius: 4px;

          font-size: 16px;
        }
        select {
          width: 100%;
          padding: 15px 0 15px 5px ;

          background-color: #343B41;
          color: #f8f9fa;

          border: 1px solid #f8f9fa;
          border-radius: 4px;

          font-size: 16px;
        }
      }
      button {
        width: 90%;
        margin: 20px 0;

        padding: 15px 0;

        border-radius: 4px;

        background-color: #ff577f;
        color: #fff;
      }
    }
  }
`