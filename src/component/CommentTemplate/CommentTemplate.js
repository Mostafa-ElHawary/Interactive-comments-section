/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../app";
import {
  Template,
  CommentWrp,
  CommentContainer,
  Ccontrols,
  Cscore,
  ScoreplusImg,
  Scorenumber,
  ScoreminusImg,
  Edit,
  Reply,
  Delete,
  ControliconImg,
  Cuser,
  UsrImg,
  Usrname,
  Ctext,
  Cmntat,
  Replyto,
  Cbody,
  Repliescommentswrp,
} from "./CommentTemplateStyle";
function CommentTemplate() {
  return (
    <Template className="comment-template ">
      <CommentWrp className="comment-wrp b">
        <CommentContainer className="comment container">
          <Cscore className="c-score">
            <ScoreplusImg
              src="images/icon-plus.svg"
              alt="plus"
              className="score-control score-plus"
            />
            <Scorenumber className="score-number">5</Scorenumber>
            <ScoreminusImg
              src="images/icon-minus.svg"
              alt="minus"
              className="score-control score-minus"
            />
          </Cscore>

          <Ccontrols className="c-controls">
            <Delete className="delete">
              <ControliconImg
                src="images/icon-delete.svg"
                alt=""
                className="control-icon"
              />
              Delete
            </Delete>

            <Edit className="edit">
              <ControliconImg
                src="images/icon-edit.svg"
                alt=""
                className="control-icon"
              />
              Edit
            </Edit>
            <Reply className="reply">
              <ControliconImg
                src="images/icon-reply.svg"
                alt=""
                className="control-icon"
              />
              Reply
            </Reply>
          </Ccontrols>

          <Cuser className="c-user">
            <UsrImg
              src="images/avatars/image-maxblagun.webp"
              alt=""
              className="usr-img"
            />
            <Usrname className="usr-name">maxblagun</Usrname>
            <Cmntat className="cmnt-at">2 weeks ago</Cmntat>
          </Cuser>
          <Ctext className="c-text">
            <Replyto className="reply-to"></Replyto>
            <Cbody className="c-body"></Cbody>
          </Ctext>
        </CommentContainer>
        <Repliescommentswrp className="replies comments-wrp"></Repliescommentswrp>
      </CommentWrp>
    </Template>
  );
}

export default CommentTemplate;
