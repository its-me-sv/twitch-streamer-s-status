import React from 'react';
import {connect} from 'react-redux';

// Styles
import { 
    FieldStyles,
    FieldLabelStyles,
    InputFieldStyles
} from './search-box.styles';

// Actions
import onSearchFieldChange from '../../redux/search-field/search-field-actions';

const SearchBox = ({searchFieldText, onSearchChange}) => {
    return (
        <FieldStyles>
            <FieldLabelStyles>Search Streamer</FieldLabelStyles>
            <InputFieldStyles
                type="text"
                placeholder="Eg: radextrem"
                value={searchFieldText}
                onChange={onSearchChange}
            />
        </FieldStyles>
    );
};

const mapStateToProps = ({searchField}) => ({
    searchFieldText: searchField.searchFieldText
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(onSearchFieldChange(event))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);