import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.subject}</h3>
      <h3>By: {props.author}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Post;