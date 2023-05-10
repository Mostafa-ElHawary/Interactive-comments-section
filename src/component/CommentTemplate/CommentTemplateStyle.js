import styled from "styled-components";

export const Template = styled.template``;
export const CommentWrp = styled.div``;
export const CommentContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-areas:
    "score user controls"
    "score comment comment"
    "score comment comment";
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  row-gap: 1rem;
  color: var(--Grayish-Blue);
  @media screen and (max-width: 640px) {
    grid-template-areas:
      "user user user"
      "comment comment comment"
      "score ... controls";

    gap: 0.5rem;
  }
`;
export const Cscore = styled.div`
  color: var(--Moderate-blue);
  font-weight: 500;
  grid-area: score;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 0.75rem;
  padding-top: 0.5rem;
  width: 1rem;
  box-sizing: content-box;
  background-color: var(--Very-light-gray);
  border-radius: 8px;
  align-self: flex-start;
  @media screen and (max-width: 640px) {
    flex-direction: row;
    width: auto;
  }
`;
export const ScoreplusImg = styled.img`
  width: 100%;
  cursor: pointer;
  object-fit: scale-down;
`;
export const Scorenumber = styled.p``;
export const ScoreminusImg = styled.img`
  width: 100%;
  cursor: pointer;
  object-fit: scale-down;
`;
export const Ccontrols = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--Moderate-blue);
  grid-area: controls;
  align-self: center;
  justify-self: flex-end;
`;
export const Delete = styled.a`
  color: var(--Soft-Red);
  display: none;
`;
export const ControliconImg = styled.img`
  margin-right: 0.5rem;
`;
export const Edit = styled.a`
  color: var(--Moderate-blue);
  display: none;
`;
export const Reply = styled.a`
  color: var(--Moderate-blue);
`;
export const Cuser = styled.div`
  width: 100%;
  grid-area: user;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const UsrImg = styled.img`
  height: 2rem;
  width: 2rem;
`;
export const Usrname = styled.p`
  color: var(--Dark-blue);
  font-weight: 700;
  &::after {
    font-weight: 400;
    content: "you";
    color: var(--White);
    background-color: var(--Moderate-blue);
    padding: 0 0.4rem;
    padding-bottom: 0.2rem;
    font-size: 0.8rem;
    margin-left: 0.5rem;
    border-radius: 2px;
  }
`;
export const Cmntat = styled.p``;
export const Ctext = styled.p`
  grid-area: comment;
  width: 100%;
`;
export const Replyto = styled.span`
  color: var(--Moderate-blue);
  font-weight: 500;
`;
export const Cbody = styled.span``;
export const Repliescommentswrp = styled.div`
  display: flex;
  margin-left: 2.5rem;
  padding-left: 2.4rem;
  border-left: 1px solid var(--Light-grayish-blue);

  @media screen and (max-width: 640px) {
    padding-left: 1rem;
    margin-left: 0.5rem;
  }
`;
