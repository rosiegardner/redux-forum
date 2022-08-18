import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import EditPostForm from './EditPostForm';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
        this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList
      .concat(newPost);
    this.setState({ 
      mainPostList: newMainPostList,
      formVisibleOnPage: false
    });
    console.log(newPost);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList
      .filter(post => post.id === id)[0];
    this.setState({
      selectedPost: selectedPost
    });
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList
      .filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick Reached!");
    this.setState({editing: true});
  } 
  
  handleEditingPostInList = (postToEdit) => {
    const editedMainPostList = this.state.mainPostList
      .filter(post => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      mainPostList: editedMainPostList,
      editing: false,
      selectedPost: null
    });
  }


  handleDownVote = (id) =>{
    const selectedPost = this.state.mainPostList
      .filter((post)=> post.id === id )[0];
      const startingCount = selectedPost.count
      if (selectedPost.count < startingCount -1){
        alert("already downvoted!");
      } else {
      selectedPost.count -=1;
      const updatedMainPostList = this.state.mainPostList
      .filter((post)=> post.id !== id)
      .concat(selectedPost);
      this.setState({
      mainPostList: updatedMainPostList
    });
  }
    }


    // if (selectedPost.count > 0) {
    //   selectedPost.count -=1
    // }
    // const updatedMainPostList = this.state.mainPostList
    //   .filter((post)=> post.id !== id)
    //   .concat(selectedPost);
    // this.setState({
    //   mainPostList: updatedMainPostList
    // });


  handleUpVote = (id) => {
    const selectedPost = this.state.mainPostList
      .filter((post)=> post.id === id )[0];
    if (selectedPost.count < 0) {
      selectedPost.count +=1
    }
    const updatedMainPostList = this.state.mainPostList
      .filter((post)=> post.id !== id)
      .concat(selectedPost);
    this.setState({
      mainPostList: updatedMainPostList
    });
  }

  // upVote += 1     
  //              >>>>   toggle upVote >= downVote
  // downVote += 1 

  // handleBuyingTea = (id) => {
  //   const buyTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
  //   if (buyTea.quantity > 0) {
  //     buyTea.quantity -= 1
  //   }
  //   const editedMainTeaList = this.state.mainTeaList
  //     .filter(tea => tea.id !== this.state.selectedTea.id)
  //     .concat(buyTea);
  //   this.setState({
  //     mainTeaList: editedMainTeaList,
  //     selectedTea: null
  //   });
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing){
      currentlyVisibleState =
        <EditPostForm 
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList} />
          buttonText = "return to post list";
    } else if( this.state.selectedPost != null){
      currentlyVisibleState = 
      <PostDetail 
        post={this.state.selectedPost}
        onClickingDelete = {this.handleDeletingPost} 
        onClickingEdit ={this.handleEditClick}
        onDownVote = {this.handleDownVote}
        onUpVote = {this.handleUpVote}/>
        buttonText = 'Return to Post List';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewPostForm 
          onNewPostCreation={this.handleAddingNewPostToList} />;
        buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = 
        <PostList 
          postList={this.state.mainPostList}
          onPostSelection={this.handleChangingSelectedPost} />;
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