const initialState = {
    sortMode: 'CREATED_AT',
    sortText: 'Latest repositories',
    orderDirection: 'DESC',
    searchKeyword: '',
};
const repositoriesReducer = (state = initialState, action) => {
switch(action.type) {
case 'SORT_REPOSITORIES':
return {
...state,
sortMode:action.payload.sortMode,
sortText:action.payload.sortText,
orderDirection:action.payload.orderDirection,
};
case 'SEARCH_QUERY':
return {
...state,
searchKeyword:action.payload,
};
default:
return state;
}
}
export const sortRepositories = (sortMode, sortText, orderDirection) => ({
    type: 'SORT_REPOSITORIES',
    payload: {sortMode, sortText, orderDirection}
})

export const setSearchQuery = (searchQuery) => ({
    type: 'SEARCH_QUERY',
    payload: searchQuery
})

export default repositoriesReducer;