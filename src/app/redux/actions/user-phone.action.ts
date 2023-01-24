import { createAction, props } from '@ngrx/store';
import { userPhoneState } from '../state/user-phone';

export const setUserPhone = createAction('[User] Set User Phone', props<{userPhone : userPhoneState}>());