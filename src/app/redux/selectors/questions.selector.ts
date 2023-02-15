import { createFeatureSelector, createSelector } from '@ngrx/store';
import { questionState } from '../state/question';

export const selectQuestion = createFeatureSelector<questionState>('questions');

export const selectQuestions = createSelector(
  selectQuestion,
  (questions) => questions
);