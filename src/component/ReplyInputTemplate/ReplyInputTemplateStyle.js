import styled from "styled-components";

export const Template = styled.template``;
export const Replyinput = styled.div`
  display: grid;
  margin-bottom: 1rem;
  grid-template-areas: "avatar input button";
  grid-template-columns: min-content auto min-content;
  justify-items: center;
  gap: 1rem;
  min-height: 9rem;
  @media screen and (max-width: 640px) {
    grid-template-areas:
      "input input input"
      "avatar ... button";
    grid-template-rows: auto min-content;
    align-items: center;
    gap: 0.5rem;
  }
`;
export const Usrimg = styled.img`
  height: 2rem;
  width: 2rem;
`;
export const Cmntinput = styled.textarea``;
export const Buprimary = styled.button`
  background-color: var(--Moderate-blue);
  color: var(--White);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
`;
