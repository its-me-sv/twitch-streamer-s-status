import fetchUserTypes from "./fetch-user.types";

const onFetchUserStart = username => dispatch => {
    dispatch({
        type:fetchUserTypes.FETCH_USER_PENDING
    });
    fetch("https://desolate-island-20928.herokuapp.com/twitch-api", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            urlToFetch: `https://api.twitch.tv/helix/users?login=${username}`, 
            type: 0
        })
    })
    .then(response => response.json())
    .then(data => dispatch({
        type:fetchUserTypes.FETCH_USER_SUCCESS, 
        payload: data
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