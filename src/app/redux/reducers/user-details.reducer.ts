import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess } from '../actions/user-details.action';
import { UserDetailsState } from '../state/user-details';

export const initialState: UserDetailsState = {
    phone : '',
    email:'',
    gcollege:'',
    gfrom: new Date,
    gto:new Date,
    branch:'',
    state:'',
    Zipcode:123,
    country:''
};
  
  export const userdetailsReducer = createReducer(initialState,
    on(loadDataSuccess, (state, {userdetails}) => ({...state, ...userdetails}))
  );