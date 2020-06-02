import styled from "styled-components";

export const Appstyled = styled.form`
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: "Song Myung", serif;
  font-size: 2rem;
  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);

  padding: 20px;

  @media (max-width: 700px) {
    font-size: 1em;
    padding: 20px;
  }
  input {
    width: 80%;
    border: 5px solid gray;
    -webkit-appearance: none;
    outline: none;
  }
  button {
    width: 20%;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  input,
  button {
    padding: 10px;
    font-size: 2rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: none;
    box-sizing: content-box;
    border-radius: 10px;
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
`;

export const Titlestyled = styled.h1`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttonstyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    outline: none;
    border: none;
    padding: 10px;
    margin-bottom: 50px;
    border-radius: 10px;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 13px;
      margin-bottom: 70px;
    }
  }
`;
