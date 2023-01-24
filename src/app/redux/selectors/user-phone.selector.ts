import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userPhoneState } from '../state/user-phone';

export const selectUser = createFeatureSelector<userPhoneState>('userPhone');

export const selectUserPhone = createSelector(
  selectUser,
  (userPhone) => userPhone.phone
);