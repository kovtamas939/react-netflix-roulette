import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activeFilter: 'All',
    sortType: 'release-date-desc'
};

const setActiveFilter = (state: FilterAndSortState, action: FilterAndSortAction) => {
    return { ...state, activeFilter: action.activeFilter };
};

const setSortType = (state: FilterAndSortState, action: FilterAndSortAction) => {
    return { ...state, sortType: action.sortType } ;
};

const reducer = (state: FilterAndSortState = initialState, action: FilterAndSortAction) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_FILTER: return setActiveFilter(state, action);
        case actionTypes.SET_SORT_TYPE: return setSortType(state, action);
        default: return state;
    };
};

export default reducer;
