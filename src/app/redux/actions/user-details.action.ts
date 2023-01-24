import { createAction, props } from '@ngrx/store';
import { UserDetailsState } from '../state/user-details';

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction('[Data] Load Data Success', props<{ userdetails : UserDetailsState}>());
export const loadDataFail = createAction('[Data] Load Data Fail', props<{ error: any }>());