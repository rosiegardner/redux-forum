import React from "react";
import { v4 } from 'uuid';

function NewPostForm(props){
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    console.log(event.target.author.value);
    console.log(event.target.subject.value);
    console.log(event.target.issue.value);
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewPostFormSubmission}>
        <input
          type='text'
          author='author'
          placeholder='author name'/>
        <input
          type='text'
          subject='subject'
          placeholder='subject'/>
        <textarea
          type= 'text'
          issue='issue'
          placeholder ='issue'/>
      </form>
    </React.Fragment>
  );
}

export default NewPostForm;