import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div onClick ={() => props.whenPostClicked(props.id)}>
        <h3>{props.subject}</h3>
        <h3>By: {props.author}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  count: PropTypes.number,
  id: PropTypes.string,
  whenPropClicked: PropTypes.func
};

export default Post;