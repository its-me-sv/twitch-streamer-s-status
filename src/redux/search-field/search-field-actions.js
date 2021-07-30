import searchFieldTypes from "./search-field.types";

const onSearchFieldChange = event => ({
    type: searchFieldTypes.ON_SEARCH_CHANGE,
    payload: event.target.value
});

export default onSearchFieldChange;