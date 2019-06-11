import * as actions from "./../actions/actionTypes";

const initialState = {
    movie: null,
    actors: null,
    directors: [],
    videos: null,
    loading: false
};

const movie = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_MOVIE_STATE:
            return {
                ...state,
                ...action.payload
            };
        case actions.GET_MOVIE:
            return {
                ...state,
                movie: action.payload.movie,
                actors: action.payload.actors,
                directors: action.payload.directors,
                videos:action.payload.videos,
                loading: false
            };
        case actions.SHOW_LOADING_SPINNER:
            return {
                ...state,
                loading: true
            };
        case actions.CLEAR_MOVIE:
            return {
                ...state,
                movie: null,
                actors: null,
                directors: [],
                videos: null,
            };
        default:
            return state;
    }
};

export default movie;
