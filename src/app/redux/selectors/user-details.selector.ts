import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserDetailsState } from '../state/user-details';

export const selectUserdetails = createFeatureSelector<UserDetailsState>('userdetails');

export const selectUserDetails = createSelector(
  selectUserdetails,
  (userdetails) => userdetails
);