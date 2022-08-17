import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      author: event.target.author.value,
      subject: event.target.subject.value,
      issue: event.target.issue.value,
      id: post.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update post" />
    </React.Fragment>
  );
}

EditPostForm.propTypes ={
  prop: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;