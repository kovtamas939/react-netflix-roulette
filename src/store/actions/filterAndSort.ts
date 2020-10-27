import * as actionTypes from './actionTypes';

export const setActiveFilter = (activeFilter: string) => {
    return { 
        type: actionTypes.SET_ACTIVE_FILTER,
        activeFilter
    };
};

export const setSortType = (sortType: string) => {
    return { 
        type: actionTypes.SET_SORT_TYPE,
        sortType
    };
};
