import React from 'react';
import {connect} from 'react-redux';

// Styles
import { 
    UserCardStyles,
    ErrorStyles
} from './user-card.styles';

// Resources from assests
import {ReactComponent as Loader} from '../../assets/Loader.svg';

// Components
import ServerCard from "../server-card/server-card.component";

const UserCard = ({isPending, fetchedUser}) => {
    return (
        <UserCardStyles>
            {
                isPending === true
                ? <Loader />
                : fetchedUser
                ? <ServerCard 
                    user_name={fetchedUser.display_name} 
                    game_name={fetchedUser.description} 
                    thumbnail_url={fetchedUser.profile_image_url}
                  />
                : isPending === false && fetchedUser === null && <ErrorStyles>No User Found</ErrorStyles>
            }
        </UserCardStyles>
    );
};

const mapStateToProps = ({fetchUser}) => ({
    isPending: fetchUser.isPending,
    fetchedUser: fetchUser.fetchedUser
});

export default connect(mapStateToProps)(UserCard);