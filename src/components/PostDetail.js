import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>Author: {post.author}</h3>
      <h4>Subject: {post.subject}</h4>
      <h4>{props.issue}</h4>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={() => onClickingDelete(post.id) }>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;