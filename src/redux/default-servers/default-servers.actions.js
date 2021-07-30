import defaultServersTypes from "./default-servers.types";
import config from '../../config';

import {urlToFetch} from './default-servers.data';

const startToFetchDefaultServers = () => dispatch => {
    dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_PENDING
    });
    fetch(urlToFetch, {
        headers: {
            'Client-Id': config.CLIENT_ID,
            'Authorization': `Bearer ${config.AUTH_TOKEN}`
        }
    })
    .then(response => response.json())
    .then(data => dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_SUCCESS,
        payload: data.data
    }))
    .catch(error => dispatch({
        type: defaultServersTypes.DEFAULT_SERVERS_FAILURE,
        payload: error
    }));
};

export default startToFetchDefaultServers;