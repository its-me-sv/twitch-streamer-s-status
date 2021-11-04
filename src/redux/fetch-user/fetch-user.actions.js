import fetchUserTypes from "./fetch-user.types";
import config from '../../config';

const onFetchUserStart = username => dispatch => {
    dispatch({
        type:fetchUserTypes.FETCH_USER_PENDING
    });
    fetch(`https://twitch-proxy.freecodecamp.rocks/helix/users?login=${username}`, {
        headers: {
            'Client-Id': config.CLIENT_ID,
            'Authorization': `Bearer ${config.AUTH_TOKEN}`
        }
    })
    .then(response => response.json())
    .then(data => dispatch({
        type:fetchUserTypes.FETCH_USER_SUCCESS, 
        payload: data.data[0]
    }))
    .catch(error => dispatch({
        type: fetchUserTypes.FETCH_USER_FAILURE,
        payload: error
    }));
};

export const resetUser = () => ({
    type: fetchUserTypes.RESET_USER
});

export default onFetchUserStart;