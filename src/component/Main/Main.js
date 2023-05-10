import React from "react";
import '../app'
import '../../style.css'

function Main() {
  return (
    <main>
      <div className="comment-section r">
        <div className="comments-wrp"></div>

        <div className="reply-input container ">
          <img
            src="images/avatars/image-juliusomo.webp"
            alt=""
            className="usr-img"
          />
          <textarea
            className="cmnt-input"
            placeholder="Add a comment..."
          ></textarea>
          <button className="bu-primary">SEND</button>
        </div>
      </div>

      <div className="modal-wrp invisible ">
        <div className="modal container g">
          <h3>Delete comment</h3>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and cant be undone
          </p>
          <button className="yes">YES,DELETE</button>
          <button className="no">NO,CANCEL</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
