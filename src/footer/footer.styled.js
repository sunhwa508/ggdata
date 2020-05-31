import styled from "styled-components";

export const Footerstyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  flex-direction: column;
  width: 100%;

  padding: 10px;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  p {
    color: #cccccc;
    margin-top: 7px;
    font-size: 0.6em;
  }

  .icons a {
    margin: 10px;
    cursor: pointer;
    color: rgb(172, 168, 168);
    font-size: 1.5rem;
    transition: 0.5s;
  }
  .icons:hover a:not(:hover) {
    opacity: 0.1;
  }
  .icons a:hover {
    transform: translateY(-10px);
    color: black;
  }
`;
