export const defaultServers = [
    "radextrem",
    "ESL_SC2", 
    "OgamingSC2", 
    "aceu", 
    "freecodecamp", 
    "nosyy", 
    "shroud", 
    "Ninja",
    "noobs2ninjas"
];

const streamsUrl = "https://twitch-proxy.freecodecamp.rocks/helix/streams?";

export const urlToFetch = streamsUrl + "user_login=" + defaultServers.join("&user_login=");