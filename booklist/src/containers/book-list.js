import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
          <li 
          key={book.title} 
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      )
  }
}

function mapStateToProps(state) {
  //Returned value will be props for BookList
  return{
    books: state.books
  };
}

//Anything return from this function will end up as props(selectBook) on BookList container
function mapDispatchToProps(dispatch) {
  //Whenever select book is called, result should be passed to all reducers through dispatch
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Promote BookList from a componen to a container - make selectBook available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);