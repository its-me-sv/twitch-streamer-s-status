import defaultServersTypes from "./default-servers.types";

import {urlToFetch} from './default-servers.data';

const startToFetchDefaultServers = () => dispatch => {
    dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_PENDING
    });
    fetch("https://desolate-island-20928.herokuapp.com/twitch-api", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({urlToFetch, type: 1})
    })
    .then(resp => resp.json())
    .then(data => dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_SUCCESS,
        payload: data
    }))
    .catch(error => dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_FAILURE,
        payload: error
    }));
};

export default startToFetchDefaultServers;