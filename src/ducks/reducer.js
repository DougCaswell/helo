const initialState = {
    username: '',
    id: '',
    profilePic: 'https://target.scene7.com/is/image/Target/GUEST_0ecdacd8-0f0c-480d-ad53-1f605994eadb?wid=488&hei=488&fmt=pjpeg'
};

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_ID = 'UPDATE_ID';

export function updateUsername (username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updateID (id) {
    return {
        type: UPDATE_ID,
        payload: id
    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_USERNAME:
            return {...state, username: action.payload}

        case UPDATE_ID:
            return {...state, id: action.payload}

        default:
            return {...state};
    }

};