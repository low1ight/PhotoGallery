import {API} from "../API/API";

const SET_PHOTO = 'SET-PHOTO';
const SET_IS_FETCHING_STATUS = 'SET-IS-FETCHING_STATUS';

let initState = {
    photo: null,
    isFetching:true
};


const photoReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PHOTO:
            return {
                ...state,photo:action.data
            };
        case SET_IS_FETCHING_STATUS:
            return {
                ...state,isFetching: action.status
            }
        default:
            return state;
    }
};


const setPhoto = (data) => ({type:SET_PHOTO,data});
const setIsFetchingStatus = (status) => ({type:SET_IS_FETCHING_STATUS,status});


export const getPhoto = () => async (dispatch) => {
    dispatch(setIsFetchingStatus(true));
    let response = await API.getPhoto();
    dispatch(setPhoto(response));
    dispatch(setIsFetchingStatus(false))
};


export default photoReducer;