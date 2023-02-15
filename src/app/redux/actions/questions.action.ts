import { createAction, props } from '@ngrx/store';
import { questionState } from '../state/question';


export const loadQuestion = createAction('[Data] Load Question');
export const loadQuestionSuccess = createAction('[Data] Load Question Success', props<{ questions : questionState}>());
export const loadQuestionFail = createAction('[Data] Load Question Fail', props<{ error: any }>());