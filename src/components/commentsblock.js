import React from 'react';

const MakeCommentsBlock = (props) => {
    const {coms, deleteComment, addComment} = props;
    return (
        <React.Fragment>
          {coms.map((com, i) => {
              return (
                <React.Fragment>
                      <div key={com.id} className='comment-block'>
                        <div className="coms-block-author">{com.author}</div>
                        <div className="coms-block-text">{com.text}</div>
                        <div className="coms-block-date">{com.date}</div>
                        <button className="button-del" onClick={ev => {deleteComment(com.id)}}>X</button>
                      </div>
                  </React.Fragment>
              );
          })}
          <div className="comment-field">
                <input type="text" className="author-field" placeholder="Автор" />
                <br />
                <input type="textarea" className="text-field" />
                <br />
                <input type="button" className="button-add" value="Отправить" onClick={ev => {addComment()}} />
          </div>
  
        </React.Fragment>
    );
}

export default MakeCommentsBlock