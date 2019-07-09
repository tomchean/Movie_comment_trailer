import * as actions from "./../actions/actionTypes";

const initialState = {
    id :null,
    name:null,
    profilePicURL :null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...state,
                ...action.payload
            };
        case actions.ADD_USER:{
            return{
                ...state,
                id:action.payload.id,
                name:action.payload.name,
                profilePicURL :action.payload.profilePicURL,
            }
        }
        case actions.CLEAR_USER:
            return {
                ...state,
                id :null,
                name:null,
                profilePicURL :null,
            };
        default:
            return state;
    }
};

export default user;
