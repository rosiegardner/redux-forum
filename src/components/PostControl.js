import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList.js';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewPostForm />;
        buttonText = "Return to Post List"
    } else {
      currentlyVisibleState = 
        <PostList />;
        buttonText= "Create new post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PostControl;