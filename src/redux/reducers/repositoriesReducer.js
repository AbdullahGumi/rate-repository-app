const initialState = {
    sortMode: 'CREATED_AT',
    sortText: 'Latest repositories',
    orderDirection: 'DESC'
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
default:
return state;
}
}
export const sortRepositories = (sortMode, sortText, orderDirection) => ({
    type: 'SORT_REPOSITORIES',
    payload: {sortMode, sortText, orderDirection}
})

export default repositoriesReducer;