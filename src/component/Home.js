import React from 'react'
import Main from './Main/Main'
import CommentTemplate from './CommentTemplate/CommentTemplate'
import ReplyInputTemplate from './ReplyInputTemplate/ReplyInputTemplate'
import GlobalStyle from '../globalStyle'
function Home() {
  return (
    <div>
      <GlobalStyle />
      <ReplyInputTemplate />
      <CommentTemplate />
      <Main />
    </div>
  )
}

export default Home
