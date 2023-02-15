import { createReducer, on } from '@ngrx/store';
import { loadQuestionSuccess } from '../actions/questions.action';
import { questionState } from '../state/question';

export const initialState: questionState = {
    questionid :'',
    question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    hint1:'',
    hint2:'',
    hint3:'',
    hint4:'',
    answer:''
};
  
  export const QuestionsReducer = createReducer(initialState,
    on(loadQuestionSuccess, (state, {questions}) => ({...state, ...questions}))
  );