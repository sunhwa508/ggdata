import styled from "styled-components";

export const Citydetail = styled.div`
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);
  padding: 10px;
  margin-bottom: 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 600px;
  }

  h3,
  h2 {
    margin: 0;
    width: 100%;
    padding: 5px 0;

    @media (max-width: 700px) {
      font-size: 1em;
    }
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Newsfeed = styled.div``;
