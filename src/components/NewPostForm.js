import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm"

function NewPostForm(props){

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      author: event.target.author.value,
      subject: event.target.subject.value,
      issue: event.target.issue.value,
      count: 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewPostFormSubmission}
        buttonText = "submit post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;