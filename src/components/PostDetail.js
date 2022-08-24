import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete, onClickingEdit, onDownVote, onUpVote } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>Author: {post.author}</h3>
      <h4>Subject: {post.subject}</h4>
      <p>{post.issue}</p>
      <p>{post.count}</p>
      <button onClick={()=> onUpVote(post.id)}>Upvote this post</button>
      <button onClick={()=> onDownVote(post.id)}>Downvote this post</button>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={() => onClickingDelete(post.id) }>Delete Post</button>

      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onDownVote: PropTypes.func,
  onUpVote: PropTypes.func
};

export default PostDetail;