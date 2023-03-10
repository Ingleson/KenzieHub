import styled from "styled-components";
import "animate.css";

export const BaseHome = styled.div`

  background-color: #121214;
  color: #f8f9fa;
  animation: fadeIn 2s;

  width: 100%;
  height: 100%;

  header {
    height: 70px;
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
    height: 90px;

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
    align-items: center;
    margin: 0 auto;
    justify-content: center;

    width: 60%;
    

    h2 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 670px){ 
    
    .div-header {
      width: 95%;
    }
    article {
      height: 150px;
      
    }

    .status-profile {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-bottom: 30px;
    }
    main {
      width: 95%;
    }
  }
`
export const SectionTech = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  width: 100%;

  .void-box {
    font-size: 49px;
    color: #343B41;

    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #212529;

    width: 100%;
    height: 65vh;

    padding: 0;
    margin: 0;
    padding: 0 25px;

    overflow-x: hidden;

    border-radius: 4px;
    li:hover {
      background-color: #343B41;
      cursor: pointer;
    }
    li {
      list-style: none;

      width: 100%;
      height: 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #121214;

      margin-top: 20px;
      padding: 0 30px;

      border-radius: 4px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 120px;

        button {
          background-color: transparent;
          color: #fff;
          
          border: none;

          
        }
        @media screen and (max-width: 500px){
          display: flex;
          justify-content: flex-end;

          button {
            display: none;
          }
        }
      }
    }
  }
`
export const HeadList = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  button {
    background-color: #212529;
    color: #fff;

    border-radius: 4px;
    border: none;

    width: 30px;
    height: 30px;
    font-weight: 800;
  }
`