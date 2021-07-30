import React from 'react';
import {connect} from 'react-redux';

// Styles
import {AppContainerStyles} from './app.styles';

// Components
import Header from '../components/header/header.component';
import SearchBox from '../components/search-box/search-box.component';
import DefaultServers from '../components/default-servers/default-servers.component';
import UserCard from '../components/user-card/user-card.component';

// Actions
import startToFetchDefaultServers from '../redux/default-servers/default-servers.actions';
import onFetchUserStart, {resetUser} from '../redux/fetch-user/fetch-user.actions';

class App extends React.Component {
    handleEnterKey = ({keyCode}) => {
        if (keyCode !== 13) return;
        const {fetchUser, searchFieldText} = this.props;
        if (searchFieldText.length < 1) return;
        fetchUser(searchFieldText);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleEnterKey);
        this.props.fetchDefaultServers();
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleEnterKey);
    }
    
    render() {
        const {searchFieldText, clearUser} = this.props;
        if (searchFieldText < 1)
            clearUser();
        return (
            <AppContainerStyles>
                <Header />
                <SearchBox />
                {
                    searchFieldText < 1
                    ? <DefaultServers />
                    : <UserCard />
                }
            </AppContainerStyles>
        );
    }
};

const mapStateToProps = ({ searchField }) => ({
    searchFieldText: searchField.searchFieldText
});

const mapDispatchToProps = dispatch => ({
    fetchDefaultServers: () => dispatch(startToFetchDefaultServers()),
    fetchUser: username => dispatch(onFetchUserStart(username)),
    clearUser: () => dispatch(resetUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);