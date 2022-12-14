import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function PostList(props){
  let newPropList= props.postList;
  let sorted = newPropList.sort((a, b)=> {return b.count - a.count});
  console.log(sorted);
  return (
    <React.Fragment>
      <hr/>
      {props.postList.map((post) =>
        <Post 
          whenPostClicked={props.onPostSelection}
          author={post.author}
          subject={post.subject}
          issue={post.issue}
          count={post.count}
          id={post.id}
          key={post.id} />
        )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};

export default PostList;