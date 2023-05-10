import React from "react";
// import "../app";
// import "../../style.css";
import { Template, Replyinput , Usrimg, Cmntinput , Buprimary} from "./ReplyInputTemplateStyle";
export const  ReplyInputTemplate = () =>  {
  return (
    <Template className="reply-input-template ">
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
        <Buprimary className="bu-primary ">SEND</Buprimary>
      </Replyinput>
    </Template>
  );
}

