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
    border: 5px solid gray;
    -webkit-appearance: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  button {
    width: 20%;
    box-sizing: content-box;
    -webkit-appearance: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: content-box;
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
