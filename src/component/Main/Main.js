import React from "react";
import "../app";
import "../../style.css";
import {
  MainUp,
  Commentsection,
  Commentswrp,
  Replyinput,
  Usrimg,
  Cmntinput,
  Buprimary,
  Modalwrp,
  Modal,
  Modalh3,
  Modalp,
  ModalBuYes,
  ModalBuNo,
} from "./MainStyle";
function Main() {
  return (
    <MainUp>
      <Commentsection className="comment-section r">
        <Commentswrp className="comments-wrp"></Commentswrp>

        <Replyinput className="reply-input container ">
          <Usrimg
            src="images/avatars/image-juliusomo.webp"
            alt=""
            className="usr-img"
          />
          <Cmntinput
            className="cmnt-input"
            placeholder="Add a comment..."
          ></Cmntinput>
          <Buprimary className="bu-primary">SEND</Buprimary>
        </Replyinput>
      </Commentsection>

      <Modalwrp className="modal-wrp invisible ">
        <Modal className="modal container g">
          <Modalh3>Delete comment</Modalh3>
          <Modalp>
            Are you sure you want to delete this comment? This will remove the
            comment and cant be undone
          </Modalp>
          <ModalBuYes className="yes">YES,DELETE</ModalBuYes>
          <ModalBuNo className="no">NO,CANCEL</ModalBuNo>
        </Modal>
      </Modalwrp>
    </MainUp>
  );
}

export default Main;
