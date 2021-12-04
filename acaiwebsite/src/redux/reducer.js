import { ACAIBOWL } from '../shared/acaiBowl';
import { COMMENTS } from '../shared/comments';
import { ABOUTS } from '../shared/abouts';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    acaiBowl: ACAIBOWL,
    comments: COMMENTS,
    abouts: ABOUTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};