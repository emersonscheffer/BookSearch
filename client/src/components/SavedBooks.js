import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getBooks, deleteBook } from '../actions/bookActions'

import PropTypes from 'prop-types';
import TileSearch from './TileSearch';

export class SavedBooks extends Component {

  componentDidMount(){
    this.props.getBooks();
  }

  onDeleteClick = id => {
    this.props.deleteBook(id);
  }

  render() {

    const { books } = this.props.booko
    

    return (
      <div>
        <h1>Saved Books</h1>
        {books.map(({ _id, title, authors, description, imageThumb, linkToBook }) => ( 
      
        <TileSearch title={title} _id={_id} authors={authors} 
          description={description}
          imageThumb={imageThumb}
          linkToBook={linkToBook}
          btndelete={this.onDeleteClick.bind(this, _id)}
          />
          
        ))}
        
      </div>
    )
  }
}

SavedBooks.propTypes = {
  getBooks: PropTypes.func.isRequired,
  booko: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  booko: state.book,
  searcho: state.sea
});

export default connect(mapStateToProps,  { getBooks, deleteBook })(SavedBooks);