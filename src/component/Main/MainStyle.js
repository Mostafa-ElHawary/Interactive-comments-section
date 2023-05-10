import styled from "styled-components";

export const MainUp = styled.main``;
export const Commentsection = styled.div`
  padding: 0 1rem;
  max-width: 75ch;
  margin: auto;
  margin-top: 1rem;
`;
export const Commentswrp = styled.div`
  display: flex;
  flex-direction: column;
`;
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
    padding: 0.75rem;
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
export const Modalwrp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Modal = styled.div`
  padding: 1.5rem;
  max-width: 32ch;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "heading heading"
    "body body"
    "no yes";
`;
export const Modalh3 = styled.h3`
  grid-area: heading;
  color: var(--Dark-blue);
`;
export const Modalp = styled.p`
  grid-area: body;
  color: var(--Grayish-Blue);
  line-height: 1.5;
`;
export const ModalBuYes = styled.button`
  color: var(--White);
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  grid-area: yes;
  background-color: var(--Soft-Red);
`;
export const ModalBuNo = styled.button`
  color: var(--White);
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  background-color: var(--Grayish-Blue);
  grid-area: no;
`;
