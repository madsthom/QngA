import { Routes } from '@angular/router';
import { SectionAskQuestionComponent } from './app/sections/section-ask-question/section-ask-question.component';
import { SectionQuestionsComponent } from './app/sections/section-questions/section-questions.component';
import { SectionContactComponent } from './app/sections/section-contact/section-contact.component';
import { SectionAnswerQuestionComponent } from './app/sections/section-answer-question/section-answer-question.component';


export const appRoutes: Routes = [
    { path: 'ask-question', component: SectionAskQuestionComponent},
    { path: 'questions', component: SectionQuestionsComponent},
    { path: 'contact', component: SectionContactComponent},
    { path: 'answer-question/:id', component: SectionAnswerQuestionComponent},
    
    { path: '', redirectTo: '/questions', pathMatch: 'full'}
]