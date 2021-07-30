import {defaultServers} from './default-servers.data';

const processData = payLoadData => {
    const dataToReturn = [];
    for (let serverName of defaultServers) {
        let serverStatus = payLoadData.find(
            ({user_name}) => user_name === serverName
        );
        if (serverStatus === undefined)
            dataToReturn.push({
                user_name: serverName,
                game_name: "",
                title: "",
                thumbnail_url: "https://image.flaticon.com/icons/png/512/1661/1661966.png"
            });
        else
            dataToReturn.push({
                user_name: serverStatus.user_name,
                game_name: serverStatus.game_name,
                title: serverStatus.title,
                thumbnail_url: serverStatus.thumbnail_url
            });
    }
    return dataToReturn.sort((a, b) => b.game_name.length - a.game_name.length);
};

export default processData;