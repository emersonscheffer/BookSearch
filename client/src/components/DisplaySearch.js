import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getSearchArr, addBook } from '../actions/bookActions'

import PropTypes from 'prop-types';

import TileSearchToSave from './TileSearchToSave';

export class DisplaySearch extends Component {

    componentDidMount(){
        this.props.getSearchArr();
    }

    onSaveClick = (title, authors, description, imageThumb, linkToBook) => {
      
        const newBook = {
          title: title,
          authors: authors,
          description: description,
          imageThumb: imageThumb,
          linkToBook: linkToBook
        }
  
        this.props.addBook(newBook)
      }

    onDeleteClick = id => {
        this.props.deleteBook(id);
      }

  render() {

    const { books } = this.props.booko
    
    return (
      <div>
        
        {books.map(({ _id, title, authors, description, imageThumb, linkToBook }) => (
            
            <TileSearchToSave title={title} _id={_id} authors={authors} 
                description={description}
                imageThumb={imageThumb}
                linkToBook={linkToBook}
                btnsave={this.onSaveClick.bind(this, title, authors, description, imageThumb, linkToBook)}
            />

        ))}
      </div>
    )
  }
}

DisplaySearch.propTypes = {
    //getBooks: PropTypes.func.isRequired,
    booko: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    booko: state.book,
    
  });
export default connect(mapStateToProps,  { getSearchArr, addBook })(DisplaySearch);
