import React from 'react'
import {connect} from 'react-redux'

import AddSomePost from '../components/addsomepost'
import MakeCommentsBlock from '../components/commentsblock'
import {addComment, deleteComment} from '../actions/index'

let App = (props) => {
      const {
        coms, addComment, deleteComment
      } = props
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Виджет комментариев</h1>
          </header>
          <main>
            <AddSomePost />
            <MakeCommentsBlock coms={coms} addComment={addComment} deleteComment={deleteComment} />
          </main>
        </div>
      )
}

const mapStateToProps = (state) => {
  return{
    coms: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: () => dispatch(addComment()),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

App = connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
  
export default App