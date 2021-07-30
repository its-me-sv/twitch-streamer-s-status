import React from 'react';

// Styles
import { 
    CardStyles,
    UsernameStyles,
    StatusStyles
} from './server-card.styles';

const ServerCard = ({user_name, game_name, title="", thumbnail_url}) => (
    <CardStyles
        href={`https://twitch.tv/${user_name}`}
        title={`Head over to ${user_name}'s channel`}
        target="_blank"
        rel="noreferrer">
        <img 
            alt="images" 
            src={thumbnail_url.replace("{width}", "640").replace("{height}", "480")} 
        />
        <UsernameStyles>{user_name}</UsernameStyles>
        <StatusStyles>
            {game_name.length > 0 ? `${game_name} ${title}` : "Offline"}
        </StatusStyles>
    </CardStyles>
);

export default ServerCard;