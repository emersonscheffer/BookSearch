
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING, SEND_SEARCH, GET_SEARCHBACK } from '../actions/types';

const initialState = {
    books: [],
    sea: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case GET_SEARCHBACK:
            return {
                ...state,
                sea: action.payload
            }
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book._id !== action.payload)
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [action.payload, ...state.books]
            }
        case SEND_SEARCH:
            return {
                ...state,
                sea: [action.payload]
            }
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true
            }
    
        default:
            return state;
    }
}