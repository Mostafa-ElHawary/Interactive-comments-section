import React from 'react'
import Main from './Main/Main'
import CommentTemplate from './CommentTemplate/CommentTemplate'
import ReplyInputTemplate from './ReplyInputTemplate/ReplyInputTemplate'

function Home() {
  return (
    <div>
      <ReplyInputTemplate />
      <CommentTemplate />
      <Main />
    </div>
  )
}

export default Home
