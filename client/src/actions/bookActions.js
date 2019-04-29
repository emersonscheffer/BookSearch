import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, SEND_SEARCH, GET_SEARCHBACK } from './types';

export const sendSearch = search => dispatch => {
    axios
        .post('/api/search', search)
        .then(res =>
            dispatch ({
                type: SEND_SEARCH,
                payload: res.data
            }))
            
};

export const getSearchArr = () => dispatch => {
    axios
        .get('/api/search')
        .then(res => 
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            }))

}

export const getBooks = () => dispatch => {
    dispatch(setBooksLoading());
    axios
        .get('/api/books')
        .then(res => 
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            }))
};

export const addBook = book => dispatch => {
    axios
        .post('/api/books', book)
        .then(res => 
            dispatch ({
                type: ADD_BOOK,
                payload: res.data
            })
        )
};

export const deleteBook = id => dispatch => {
    axios
        .delete(`/api/books/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_BOOK,
                payload: id
            })
            )
};

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    };
};