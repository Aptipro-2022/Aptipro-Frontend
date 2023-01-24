import { createReducer, on } from '@ngrx/store';
import { setUserPhone } from '../actions/user-phone.action';
import { userPhoneState } from '../state/user-phone';

export const initialState: userPhoneState = {
    phone : ''
};
  
  export const userPhoneReducer = createReducer(initialState,
    on(setUserPhone, (state, {userPhone}) => ({...state, ...userPhone}))
  );