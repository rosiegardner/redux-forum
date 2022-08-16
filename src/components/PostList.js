import React from 'react';
import Post from './Post';

const mainPostList = [
  {

    author: "Pig Champion", 
    subject: "ACAB",
    issue:"Pick your King",
  },
  {
    author: "Tim the 'Tool Man' Taylor",
    subject:"Home Depot Blues",
    issue:"AEUHHH!???",
  }
]

function PostList(){
  return (
    <React.Fragment>
      <hr/>
      {mainPostList.map((post, index) =>
        <Post 
          author={post.author}
          subject={post.subject}
          issue={post.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default PostList;