import { ACAIBOWL } from '../shared/acaiBowl';
import { INGREDIENTS } from '../shared/ingredients';
import { ABOUTS } from '../shared/abouts';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    acaiBowl: ACAIBOWL,
    ingredients: INGREDIENTS,
    abouts: ABOUTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};