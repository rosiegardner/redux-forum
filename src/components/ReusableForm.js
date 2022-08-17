import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <br></br>
        <br></br>
        <input
          type='text'
          name='author'
          placeholder='author name'/>
          <br></br>
          <br></br>
        <input
          type='text'
          name='subject'
          placeholder='subject'/>
          <br></br>
          <br></br>
        <textarea
          type= 'text'
          name='issue'
          placeholder ='issue'/>
          <br></br>
          <br></br>
          <button type="submit">{props.buttonText}</button>
          <br></br>
          <br></br>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;