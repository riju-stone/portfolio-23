import styled from "styled-components";

export const ContactSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Space Grotesk";
    input {
      margin: 1rem 0;
      width: 80%;
      font-size: 3.5rem;
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      border: none;
      outline: none;
      :focus {
        border-bottom: 2px solid;
        border-bottom-color: ${(props) => props.theme.text};
      }
    }
    textarea {
      margin: 1rem 0;
      width: 80%;
      height: 300px;
      font-size: 2.5rem;
      background-color: ${(props) => props.theme.text};
      padding: 10px 20px;
      color: ${(props) => props.theme.text};
      border: none;
      border-radius: 15px;
      outline: none;
    }
    button {
      font-size: 3.5rem;
      font-family: "Hammersmith One";
      padding: 5px 20px;
      border: none;
      background: none;
      color: ${(props) => props.theme.text};
    }
  }
  .contact-title {
    width: 50%;
    text-align: center;
    font-family: "Monoton";
    font-size: 17rem;
    color: ${(props) => props.theme.text};
  }
`;
