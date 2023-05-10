import React from 'react'
import '../app'

function ReplyInputTemplate() {
  return (
    <template className="reply-input-template ">
    <div className="reply-input container ">
      <img src="images/avatars/image-juliusomo.webp" alt="" className="usr-img"/>
      <textarea className="cmnt-input" placeholder="Add a comment..."></textarea>
      <button className="bu-primary ">SEND</button>
    </div>
  </template>
  )
}

export default ReplyInputTemplate
