import React from 'react';
import { connect } from 'react-redux';

// Styles
import {
    DefaultServersStyles,
    GridBoxStyles
} from './default-servers.styles';

// Resources from assests
import { ReactComponent as Loader } from '../../assets/Loader.svg';

// Components
import ServerCard from '../server-card/server-card.component';

const DefaultServers = ({ serversData, isPending, error }) => {
    return (
        <DefaultServersStyles>
            {
                isPending === true 
                ? <Loader />
                : <GridBoxStyles>{
                    serversData?.map((obj, idx) => 
                        <ServerCard 
                            key={idx}
                            {...obj}
                    />)
                  }</GridBoxStyles>
            }
        </DefaultServersStyles>
    );
};

const mapStateToProps = ({defaultServers: {serversData, isPending, error}}) => ({
    serversData,
    isPending,
    error
});

export default connect(mapStateToProps)(DefaultServers);